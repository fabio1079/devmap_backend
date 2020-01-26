import { Router } from "express";

import HomeController from "./comtrollers/HomeController";
import DevController from "./comtrollers/DevController";
import SearchController from "./comtrollers/SearchController";

const router = Router();

router.get("/", HomeController.index);

router.get("/devs", DevController.index);
router.post("/devs", DevController.store);

router.get("/search", SearchController.index);

export default router;
