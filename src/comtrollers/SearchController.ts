import { Request, Response } from "express";
import DevModel from "../models/DevModel";

import { techsAsArray } from "../utils/parseString";

const SearchController = {
  async index(request: Request, response: Response) {
    const { techs, latitude, longitude } = request.query;

    const techsArr = techsAsArray(techs || "");

    const devs = await DevModel.find({
      techs: {
        $in: techsArr
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000 // 10.000 meters
        }
      }
    });

    return response.json({ devs });
  }
};

export default SearchController;
