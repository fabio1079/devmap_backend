import { app } from "../index";
import * as request from "supertest";

import {
  mongooseTestConnect,
  mongooseTestDisconnect
} from "../utils/mongotest";

import DevModel, { IDev } from "../models/DevModel";
import { generateDev } from "../utils/fakerModels";

let dev: IDev;

describe("DevController", () => {
  beforeAll(async () => {
    await mongooseTestConnect();
    dev = generateDev(-36.0632081, -18.0905776);
    await dev.save();
  });

  afterAll(async () => {
    await DevModel.deleteMany({});
    await mongooseTestDisconnect();
  });

  it("searches for devs", async () => {
    let [longitude, latitude] = dev.location.coordinates;

    let response = await request(app)
      .get("/search")
      .query({
        latitude,
        longitude,
        techs: ""
      });

    expect(response.body).toEqual({ devs: [] });

    response = await request(app)
      .get("/search")
      .query({
        latitude,
        longitude,
        techs: dev.techs.join(",")
      });

    let respDev = response.body.devs[0] as IDev;

    expect(respDev.name).toEqual(dev.name);
    expect(respDev.github_username).toEqual(dev.github_username);
  });
});
