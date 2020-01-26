import { Router } from "express";

import HomeController from "./comtrollers/HomeController";
import DevController from "./comtrollers/DevController";

const router = Router();

router.get("/", HomeController.index);

router.get("/devs", DevController.index);
router.post("/devs", DevController.store);

export default router;
