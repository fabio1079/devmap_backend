import { Request, Response } from "express";
import axios from "../utils/axios";

import DevModel from "../models/DevModel";
import { PointType } from "../models/PointSchema";
import { techsAsArray } from "../utils/parseString";

const DevController = {
  async index(request: Request, response: Response) {
    const devs = await DevModel.find();

    return response.json({ devs });
  },

  async store(req: Request, res: Response) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await DevModel.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { login, name = login, avatar_url, bio } = apiResponse.data;

      const techsList = techsAsArray(techs);

      const location: PointType = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await DevModel.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsList,
        location
      });
    }

    return res.json(dev);
  }
};

export default DevController;
