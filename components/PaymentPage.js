"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { fetchuser, fetchpayments, initiate } from "@actions/useractions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username: propUsername }) => {
  const { data: session } = useSession();
  const username = propUsername || session?.user?.name || "";
  const [paymentForm, setPaymentForm] = useState({ name: "", message: "", amount: "" });
  const [currentUser, setCurrentUser] = useState({});
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    if (!username) {
      console.error("Username not available");
      return;
    }
    getData();
  }, [username]);

  const handleChange = (e) => {
    setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    try {
      const u = await fetchuser(username);
      const dbpayments = await fetchpayments(username);
      setCurrentUser(u);
      setPayments(dbpayments);
    } catch (error) {
      console.error("Error fetching user or payments:", error);
    }
  };

  const pay = async (amount) => {
    amount = parseFloat(amount);
    if (!amount || isNaN(amount) || amount < 1) {
      toast.error("Enter a valid amount (Minimum ₹1)");
      return;
    }

    try {
      const response = await initiate(amount * 100, username, paymentForm);
      if (!response || !response.id) {
        toast.error("Error initiating payment. Please try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_KEY_ID || "",
        amount: amount * 100,
        currency: "INR",
        name: "FutureBridge!",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response.id,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: session?.user?.name || paymentForm.name || "Guest",
          email: session?.user?.email || "guest@example.com",
          contact: "9000090000",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#3399cc" },
        handler: async function (response) {
          toast.success("Payment successful! Thank you for your support.");
          setPaymentForm({ name: "", message: "", amount: "" });
          await getData();
        },
      };

      if (typeof window !== "undefined" && window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        toast.error("Razorpay SDK failed to load. Please refresh the page.");
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error("Payment failed. Try again later.");
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable theme="light" />
      
      <div className="cover w-full bg-red-50 relative">
        <img className="object-cover w-full h-[350px]" src="header img.png" alt="Header Image" />
        <div className="absolute transform -translate-y-12 button-20 right-[46%] border-white border-2 rounded-full">
          <img className="rounded-full" width={100} height={100} src="anime for symbol.webp" alt="Anime Symbol" />
        </div>
      </div>

      <div className="info flex justify-center items-center my-20 flex-col gap-2">
        <div className="font-bold text-lg">@{username}</div>
        <div className="text-slate-400">Lets help {username} FutureBridge</div>
        <div className="text-slate-400">{payments.length} payments. ₹{payments.reduce((a,b) => a+b.amount, 0)} has raising fund for poor child !</div>

        
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mt-10">
          {/* Supporters */}
          <div className="md:w-1/2 w-full bg-slate-900 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Supporters</h2>
            <ul className="text-sm space-y-4">
              {payments.length === 0 && <li>No payments yet</li>}
              {payments.map((p, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src="wired-lineal-21-avatar-hover-jumping.gif" alt="Avatar" width={30} />
                  <span>
                    <strong>{p.name}</strong> donated <strong>₹{p.amount / 100}</strong>: "{p.message}"
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Form */}
          <div className="md:w-1/2 w-full bg-slate-900 text-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
            <div className="flex flex-col gap-3">
              <input
                onChange={handleChange}
                name="name"
                value={paymentForm.name}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
              <input
                onChange={handleChange}
                name="message"
                value={paymentForm.message}
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                onChange={handleChange}
                name="amount"
                value={paymentForm.amount}
                type="number"
                min="1"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                onClick={() => pay(paymentForm.amount)}
                className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg"
              >
                Pay
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4 justify-start">
              {[10, 20, 30].map((amt) => (
                <button
                  key={amt}
                  onClick={() => pay(amt)}
                  className="bg-slate-800 px-4 py-2 rounded-lg text-sm"
                >
                  Pay ₹{amt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
