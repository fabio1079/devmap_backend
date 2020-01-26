import { Request, Response } from "express";

const HomeController = {
  index(request: Request, response: Response) {
    response.json({
      message: "Hello from home"
    });
  }
};

export default HomeController;
