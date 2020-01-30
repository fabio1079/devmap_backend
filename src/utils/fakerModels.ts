import * as faker from "faker";
import DevModel from "../models/DevModel";

export const generateDev = (latitude: number, longitude: number) => {
  let dev = new DevModel({
    github_username: faker.name.firstName(),
    name: faker.name.findName(),
    avatar_url: faker.internet.avatar(),
    bio: faker.lorem.sentence(60),
    techs: [faker.lorem.words()],
    location: {
      type: "Point",
      coordinates: [longitude, latitude]
    }
  });

  return dev;
};
