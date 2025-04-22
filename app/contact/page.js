"use client";

import React from "react";
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6">
          We'd love to hear from you! Whether you have a question about our services, donations,
          or anything else, our team is ready to answer all your questions.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm p-2"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm p-2"
              placeholder="your@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full border border-gray-700 bg-gray-800 text-white rounded-md shadow-sm p-2"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Reach us at:</h2>
          <p>Email: ravi82639f@gmail.com</p>
          <p>Phone: +91 7039917040</p>
          <p>Address: Antop hill, wadala, Mumbai, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
