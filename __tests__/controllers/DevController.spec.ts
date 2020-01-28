import {
  app,
  mongooseTestConnect,
  mongooseTestDisconnect,
  request
} from "../testutils";

import DevModel from "../../src/models/DevModel";

describe("DevController", () => {
  beforeAll(async () => {
    await mongooseTestConnect();
  });

  afterAll(async () => {
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
});
