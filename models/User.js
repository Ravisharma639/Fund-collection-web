import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    username: { type: String, required: true, unique: true },
    profilepic: { type: String },
    coverpic: { type: String },
    Razorpayid: { type: String },
    Razorpaysecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
 }); //  Keeps existing fields while enabling automatic timestamps

export default models.User || model("User", UserSchema);
