"use client";

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy outlines how FutureBridge collects, uses, and protects your information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-300">
          <li>Personal Information: name, email, phone number, and any other data you provide voluntarily.</li>
          <li>Usage Data: pages visited, time spent, and other analytical data through cookies or third-party tools.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-300">
          We use your data to respond to inquiries, process donations, improve our website, and send updates (only if you opt-in).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
        <p className="text-gray-300">
          We do not sell, rent, or share your personal information with third parties, except as required by law or to provide essential services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="text-gray-300">
          We implement standard security measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="text-gray-300">
          You can access, update, or delete your data by contacting us at ravi82639f@gmail.com.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
        <p className="text-gray-300">
          We may update this policy from time to time. All changes will be reflected on this page with the date of revision.
        </p>

  
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
