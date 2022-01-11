import asyncHandler from "express-async-handler"; 
import Subscriber from "../models/subscriberModel.js";

export const subController = asyncHandler(async (req, res) => {
  try {
    const { name, email, } = req.body;
    const emailExist = await Subscriber.findOne({ email });

    if (emailExist) {
      res.status(400).json({ message: "Subscriber already exist" });
      return;
    }

    const newSubscriber = new Subscriber({
      name,
      email,
    });
    const savedSub = await newSubscriber.save();

    if (savedSub) {
      res.status(201).json({
        _id: savedSub._id,
        name: savedSub.name,
        email: savedSub.email,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});
