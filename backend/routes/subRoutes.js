import express from "express";
import { deleteSubscriberController, getAllubscribersController, signupContoller } from "../controllers/subController.js";
import { subscribeValidator, validatorResult } from "../middlewares/validate.js";

const router = express.Router();

router.post("/", subscribeValidator, validatorResult, signupContoller);
router.get("/", getAllubscribersController);
router.delete("/:id", deleteSubscriberController);

export default router;
