import React from "react";
const PrivacyPolicy: React.FC = () => {
  return (
    <section className="max-container padding-container py-20">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-bold text-black mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-500 mb-10">
          Last updated: March 04, 2026
        </p>

        {/* Intro */}
        <p className="text-gray-700 mb-6">
          This Privacy Notice for Deosai Medtech Incorporated ("we", "us", or
          "our") describes how and why we collect, store, use, and share your
          personal information when you use our services.
        </p>

        <p className="text-gray-700 mb-6">
          This includes when you visit our website at{" "}
          <a
            href="https://deosai.ai"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://deosai.ai
          </a>{" "}
          or engage with us in other related ways such as marketing or events.
        </p>

        {/* Section */}
        <h2 className="text-3xl font-semibold mt-12 mb-4">
          Summary of Key Points
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
          <li>We process personal information based on how you interact with our services.</li>
          <li>We do not process sensitive personal information.</li>
          <li>We do not collect personal information from third parties.</li>
          <li>We process information to provide and improve our services.</li>
          <li>We implement security measures to protect personal data.</li>
        </ul>

        {/* Section */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          1. What Information Do We Collect?
        </h2>

        <p className="text-gray-700 mb-4">
          We collect personal information that you voluntarily provide when you
          contact us or interact with our services.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
          <li>Mailing addresses</li>
        </ul>

        {/* Section */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          2. How Do We Process Your Information?
        </h2>

        <p className="text-gray-700 mb-4">
          We process your information to provide, improve, and administer our
          services, communicate with users, prevent fraud, and comply with
          legal obligations.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>To deliver our services</li>
          <li>To respond to user inquiries</li>
          <li>To send marketing communications</li>
          <li>To comply with legal obligations</li>
        </ul>

      </div>
    </section>
  );
};

export default PrivacyPolicy;