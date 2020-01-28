import { app } from "../index";
import * as request from "supertest";
import {
  mongooseTestConnect,
  mongooseTestDisconnect
} from "../utils/mongotest";

import DevModel from "../models/DevModel";

describe("DevController", () => {
  beforeAll(async () => {
    await mongooseTestConnect();
  });

  afterAll(async () => {
    await DevModel.deleteMany({});
    await mongooseTestDisconnect();
  });

  it("gets devs on /dev", async () => {
    let response = await request(app).get("/devs");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ devs: [] });

    await DevModel.create({
      github_username: "github_username",
      name: "user name",
      avatar_url: "#",
      bio: "",
      techs: [],
      location: {
        type: "Point",
        coordinates: [30.5, 40.1]
      }
    });

    response = await request(app).get("/devs");

    expect(response.status).toBe(200);
    expect(response.body).not.toEqual({ desv: [] });
  });

  it("creates devs on POST /devs", async () => {
    let response = await request(app)
      .post("/devs")
      .send({
        github_username: "test",
        techs: "ReactJS, React Native, Nodejs, Express",
        latitude: 56.5642581,
        longitude: -78.4903776
      });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      techs: ["ReactJS", "React Native", "Nodejs", "Express"],
      github_username: "test",
      bio: "testbio",
      name: "testname"
    });
  });
});
