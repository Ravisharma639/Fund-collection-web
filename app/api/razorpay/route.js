import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
    await connectDb();
    let body = await req.formData();
    body = Object.fromEntries(body);

    // Check if the order exists in the database
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "Order ID not found" });
    }

    // Fetch the secret of the user receiving the payment
    let user = await User.findOne({ username: p.to_user });
    if (!user || !user.razorpaysecret) {
        return NextResponse.json({ success: false, message: "Secret key not found for user" });
    }
    const secret = user.razorpaysecret;

    // Verify the payment using the correct secret
    let isValid = validatePaymentVerification(
        { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
        body.razorpay_signature,
        secret
    );

    if (isValid) {
        // Update the payment status to 'done: true'
        await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: true },
            { new: true }
        );

        // ✅ Redirect to success page
        return NextResponse.redirect("http://localhost:3000/api/razorpay/successful");
    } else {
        return NextResponse.json({ success: false, message: "Payment Verification Failed" });
    }
};
