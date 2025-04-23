import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String },
    username: { type: String, required: true, unique: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Avoid model overwrite error in dev
export default models.User || model("User", UserSchema);
