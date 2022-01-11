import express from "express";
import { subController } from "../controllers/subController.js";
import { subscribeValidator, validatorResult } from "../middlewares/validate.js";

const router = express.Router();

router.post("/subscribe", subscribeValidator, validatorResult, subController);

export default router;
