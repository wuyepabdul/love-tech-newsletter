import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    name: { type: String, required:true},
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;
