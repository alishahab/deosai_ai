import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="max-container padding-container py-20 pb-40">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-bold text-black mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-500 mb-10">
          Last updated March 04, 2026
        </p>

        {/* Intro */}
        <p className="text-gray-700 mb-6">
          This Privacy Notice for Deosai Medtech Incorporated ("we," "us," or "our"),
          describes how and why we might access, collect, store, use, and/or share
          ("process") your personal information when you use our services ("Services").
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
          or engage with us in other related ways including marketing or events.
        </p>

        <p className="text-gray-700 mb-10">
          Questions or concerns? Reading this Privacy Notice will help you understand
          your privacy rights and choices. If you do not agree with our policies and
          practices, please do not use our Services. If you have any questions, contact
          us at{" "}
          <a
            href="mailto:hello@deosai.ai"
            className="text-blue-600 underline"
          >
            hello@deosai.ai
          </a>.
        </p>

        {/* Summary */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          Summary of Key Points
        </h2>

        <p className="text-gray-700 mb-6">
          This summary provides key points from our Privacy Notice. You can read the
          full policy below for more detailed information.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-10">
          <li>
            We process personal information depending on how you interact with our services.
          </li>
          <li>
            We do not process sensitive personal information.
          </li>
          <li>
            We do not collect personal information from third parties.
          </li>
          <li>
            We process information to provide, improve, and administer our services.
          </li>
          <li>
            We implement organizational and technical measures to protect your information.
          </li>
        </ul>

        {/* Table of Contents */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          Table of Contents
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
          <li>What Information Do We Collect?</li>
          <li>How Do We Process Your Information?</li>
          <li>When and With Whom Do We Share Your Personal Information?</li>
          <li>Do We Offer Artificial Intelligence-Based Products?</li>
          <li>How Long Do We Keep Your Information?</li>
          <li>How Do We Keep Your Information Safe?</li>
          <li>Do We Collect Information From Minors?</li>
          <li>What Are Your Privacy Rights?</li>
          <li>Controls for Do-Not-Track Features</li>
          <li>Do United States Residents Have Specific Privacy Rights?</li>
          <li>Do We Make Updates to This Notice?</li>
          <li>How Can You Contact Us About This Notice?</li>
          <li>How Can You Review, Update, or Delete the Data We Collect From You?</li>
        </ul>

        {/* Section 1 */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          What Information Do We Collect?
        </h2>

        <h3 className="text-xl font-semibold mb-3">
          Personal information you disclose to us
        </h3>

        <p className="text-gray-700 mb-4">
          In Short: We collect personal information that you provide to us.
        </p>

        <p className="text-gray-700 mb-6">
          We collect personal information that you voluntarily provide when you
          express interest in our products or services, participate in activities
          on the Services, or otherwise contact us.
        </p>

        <p className="text-gray-700 mb-3 font-semibold">
          Personal Information Provided by You
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
          <li>Mailing addresses</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Sensitive Information. We do not process sensitive information.
        </p>

        <p className="text-gray-700 mb-10">
          All personal information that you provide must be true, complete, and
          accurate, and you must notify us of any changes to such information.
        </p>

        {/* Section 2 */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          How Do We Process Your Information?
        </h2>

        <p className="text-gray-700 mb-4">
          In Short: We process your information to provide, improve, and administer
          our Services, communicate with you, ensure security, prevent fraud, and
          comply with legal obligations.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-3 mb-10">
          <li>
            <strong>To deliver and facilitate delivery of services.</strong> We
            may process your information to provide you with the requested service.
          </li>

          <li>
            <strong>To respond to user inquiries.</strong> We may process your
            information to respond to inquiries and resolve issues.
          </li>

          <li>
            <strong>To send marketing communications.</strong> You can opt out of
            marketing emails at any time.
          </li>

          <li>
            <strong>To comply with legal obligations.</strong> We may process
            information to respond to legal requests and protect our legal rights.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-3xl font-semibold mt-10 mb-4">
          When and With Whom Do We Share Your Personal Information?
        </h2>

        <p className="text-gray-700 mb-4">
          In Short: We may share information in specific situations described in
          this section and with certain third parties.
        </p>

        <p className="text-gray-700 mb-6">
          We may need to share your personal information in the following
          situations:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-3">
          <li>
            <strong>Business Transfers.</strong> We may share or transfer your
            information during negotiations of any merger, sale of company
            assets, financing, or acquisition of our business.
          </li>
        </ul>

      </div>
    </section>
  );
};

export default PrivacyPolicy;