"use server";

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

// ✅ Fetch user by username with error handling
export const fetchuser = async (username) => {
    try {
        await connectDB();

        if (!username) throw new Error("Username is undefined");

        const user = await User.findOne({ username });

        if (!user) {
            throw new Error(`User not found: ${username}`);
        }

        return user.toObject();
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
    }
};

// ✅ Update user profile and related payments
export const updateProfile = async (data, oldusername) => {
    try {
        await connectDB();

        const updatedData = Object.fromEntries(data);

        if (!updatedData.email) {
            return { error: "Email is required to update profile" };
        }

        // Handle username change
        if (oldusername !== updatedData.username) {
            const existing = await User.findOne({ username: updatedData.username });
            if (existing) {
                return { error: "Username already exists" };
            }

            // Update user info
            await User.updateOne({ email: updatedData.email }, updatedData);

            // Update all associated payments
            await Payment.updateMany({ to_user: oldusername }, { to_user: updatedData.username });
        } else {
            // No username change
            await User.updateOne({ email: updatedData.email }, updatedData);
        }

        return { success: true };
    } catch (error) {
        console.error("Error updating profile:", error);
        return { error: "Failed to update profile" };
    }
};

// ✅ Initiate a payment and save order in DB
export const initiate = async (amount, to_username, Paymentform) => {
    try {
        await connectDB();

        const instance = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_KEY_ID,
            key_secret: process.env.KEY_SECRET
        });

        const options = {
            amount: Number.parseInt(amount), // amount in paise
            currency: "INR"
        };

        const order = await instance.orders.create(options);

        await Payment.create({
            oid: order.id,
            amount: amount, // Store in rupees
            to_user: to_username,
            name: Paymentform?.name || "Anonymous",
            message: Paymentform?.message || ""
        });

        return order;
    } catch (error) {
        console.error("Error initiating payment:", error);
        throw new Error("Payment initiation failed");
    }
};

// ✅ Fetch payment history for a user
export const fetchpayments = async (username) => {
    try {
        await connectDB();
        const payments = await Payment.find({ to_user: username })
            .sort({ createdAt: -1 })
            .limit(10) // Fetch only the top 10 payments
            .lean();

        return payments;
    } catch (error) {
        console.error("Error fetching payments:", error);
        throw new Error("Failed to fetch payments");
    }
};

// ✅ Update only profile picture by username
export const updateUser = async (username, updates) => {
    try {
        await connectDB();

        const updatedUser = await User.findOneAndUpdate(
            { username },
            { $set: updates },
            { new: true }
        );

        return updatedUser.toObject();
    } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Failed to update user");
    }
};
