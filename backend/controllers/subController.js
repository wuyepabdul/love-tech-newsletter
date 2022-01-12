import asyncHandler from "express-async-handler";
import Subscriber from "../models/subscriberModel.js";

export const signupContoller = asyncHandler(async (req, res) => {
  try {
    const { name, email } = req.body;
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

export const deleteSubscriberController = asyncHandler(async (req, res) => {
  try {
    const deletedSubscriber = await Subscriber.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    if (deletedSubscriber) {
      res.json({ message: 'Subscriber Deleted', deletedSubscriber });
    } else {
      res.status(404).json('Subscriber not found');
    }
  } catch (error) {
    console.log('error', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export const getAllubscribersController = asyncHandler(async (req, res) => {
  try {
    const subscribers = await Subscriber.find({})
      .sort([["createdAt", "desc"]])
      .exec();

    if (subscribers.length === 0) {
      res.json({ message: "No subscribers created" });
    } else {
      res.json(subscribers);
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: "Server Error, try again later" });
  }
});
