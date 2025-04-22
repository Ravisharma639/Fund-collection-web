"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayId: "",
    razorpaySecret: ""
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }
  }, [status, router]);

  // Show loading or unauthenticated state
  if (status === "loading") return <p className="text-center py-6">Loading...</p>;
  if (status === "unauthenticated") return <p className="text-center py-6">Redirecting...</p>;

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.username) {
      alert("Name, Email, and Username are required.");
      return;
    }

    try {
      // Update user profile (you can uncomment this after implementing the updateProfile function)
      console.log("Form submitted:", form);
      // await updateProfile(form, session.user.username);
      alert("Profile updated successfully!");

      // Redirect to PaymentPage
      router.push('/PaymentPage');
    } catch (err) {
      console.error("Update failed:", err);
      alert("Profile update failed.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">Welcome to your Dashboard</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[{ name: "name", label: "Name", type: "text", placeholder: "Enter your name" },
          { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
          { name: "username", label: "Username", type: "text", placeholder: "Choose a username" },
          { name: "profilepic", label: "Profile Picture URL", type: "text", placeholder: "Paste image URL" }].map(({ name, label, type, placeholder }) => (
            <div key={name}>
              <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          ))}

        {/* Profile picture preview */}
        {form.profilepic && (
          <div className="my-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">Profile Picture Preview</p>
            <img
              src={form.profilepic}
              alt="Profile"
              className="mx-auto w-24 h-24 rounded-full object-cover"
            />
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-1/3 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
