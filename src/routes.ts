import { Router } from "express";

import HomeController from "./comtrollers/HomeController";

const router = Router();

router.get("/", HomeController.index);

export default router;
