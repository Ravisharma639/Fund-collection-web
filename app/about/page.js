"use client";

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About FutureBridge</h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          Building a bridge to a better future — one contribution at a time.
        </p>
        <div className="text-left space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              FutureBridge is dedicated to empowering underprivileged children by connecting
              compassionate individuals and organizations with meaningful donation opportunities.
              We aim to remove barriers to education, healthcare, and basic well-being by
              providing a simple, secure, and transparent platform for giving.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Why We Exist</h2>
            <p>
              Millions of children around the world face systemic challenges every day.
              FutureBridge exists to harness technology and empathy to create an inclusive future
              where every child has the chance to thrive. We believe small actions lead to big change.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <ul className="list-disc ml-6">
              <li>Donors visit the platform and choose a cause or individual to support.</li>
              <li>Our secure Razorpay integration ensures safe and instant payments.</li>
              <li>Funds are distributed with complete transparency and impact tracking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
            <p>
              Whether you’re an individual looking to make a difference or an organization
              wanting to collaborate, FutureBridge is your platform to act with purpose.
              Join us in building a better tomorrow.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

