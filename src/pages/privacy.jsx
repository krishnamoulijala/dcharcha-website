import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-emerald-200 via-white to-teal-900 text-slate-800 px-4 py-16 font-inter">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg shadow-lg rounded-2xl p-10 animate-fadeIn">
        {/* Header */}
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-900 mb-2">
            D'charcha Privacy Policy
          </h1>
          <p className="text-center text-gray-500 text-sm mb-8">
            Last updated: <strong>30 October 2025</strong>
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 bg-teal-100/30 rounded-xl py-3 mb-10">
            {[
              ["Introduction", "#introduction"],
              ["Scope", "#scope"],
              ["What We Collect", "#collect"],
              ["Your Rights", "#rights"],
              ["Contact", "#contact"],
            ].map(([title, href]) => (
              <a
                key={title}
                href={href}
                className="text-teal-900 font-semibold hover:text-teal-600 relative after:block after:h-[2px] after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {title}
              </a>
            ))}
          </nav>
        </header>

        {/* Sections */}
        <section id="introduction" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold text-teal-900 mb-3">1. Introduction</h2>
          <p className="mb-3">
            Welcome to D'charcha, a civic-tech platform for visual storytelling,
            civic reporting, and community engagement. We are committed to
            protecting your privacy and handling your personal data responsibly
            and transparently.
          </p>
          <p>
            This Privacy Policy explains how D'charcha Technologies Private
            Limited ("we", "us", "our") collects, uses, shares, and protects
            information when you use the D'charcha mobile application, website,
            or related services (the "Platform"). By using the Platform, you
            consent to this policy and our Terms of Service. If you do not
            agree, please do not use the Platform.
          </p>
        </section>

        <section id="scope" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold text-teal-900 mb-3">2. Scope</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>All users of the D'charcha mobile app and website;</li>
            <li>All civic submissions, AI-generated content, and community interactions;</li>
            <li>
              Registered and guest users, including citizens, civic partners,
              and government collaborators.
            </li>
          </ul>
        </section>

        <section id="collect" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold text-teal-900 mb-3">3. What We Collect</h2>

          <h3 className="font-semibold text-teal-800 mt-3 mb-2">3.1 Personal Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Name, email address, phone number (if provided)</li>
            <li>Profile photo or display name (optional)</li>
            <li>Location data (GPS or approximate)</li>
            <li>Device & network information (IP address, device ID, OS, push tokens)</li>
          </ul>

          <h3 className="font-semibold text-teal-800 mt-4 mb-2">3.2 Civic & AI Content</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Uploaded photos, videos, captions, and issue tags</li>
            <li>AI-generated visuals and transformations</li>
            <li>Location metadata associated with submissions</li>
            <li>Comments, reactions, and reports</li>
          </ul>

          <h3 className="font-semibold text-teal-800 mt-4 mb-2">3.3 Usage Data</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>App interactions, session duration, feature usage</li>
            <li>Submission counts, engagement metrics, referral activity</li>
            <li>Device event logs and diagnostics</li>
          </ul>

          <h3 className="font-semibold text-teal-800 mt-4 mb-2">3.4 Children's Data</h3>
          <p>Users under 18 must obtain parental or guardian consent. We may collect year of birth to verify eligibility.</p>
        </section>

        <section id="usage" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold text-teal-900 mb-3">4. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Enable civic reporting, visualization, and collaboration</li>
            <li>Generate anonymized dashboards, heatmaps, and civic insights</li>
            <li>Improve user experience and app performance</li>
            <li>Send important updates, alerts, and responses</li>
            <li>Moderate content and ensure compliance</li>
            <li>Support research and policy design for public benefit</li>
          </ul>
        </section>

        <section id="rights" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold text-teal-900 mb-3">10. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Correct or update inaccurate information</li>
            <li>Request deletion of your account and personal data</li>
            <li>Withdraw consent for processing</li>
            <li>Request a copy of your data in a readable format</li>
          </ul>
          <p className="mt-3">
            To exercise these rights, contact{" "}
            <a href="mailto:support@dcharcha.in" className="text-teal-700 hover:underline">
              support@dcharcha.in
            </a>{" "}
            or use the in-app settings.
          </p>
        </section>

        <section id="contact" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold text-teal-900 mb-3">15. Contact Us</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@dcharcha.in" className="text-teal-700 hover:underline">
              support@dcharcha.in
            </a>
            <br />
            <strong>Website:</strong>{" "}
            <a href="https://www.dcharcha.in" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
              www.dcharcha.in
            </a>
          </p>
          <p className="mt-3">
            D'charcha respects your privacy. We collect only what is necessary,
            store it securely, and use it transparently. Your control over your
            data is important to us.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 MAJJI DIGITAL SOLUTIONS PVT. LTD. |{" "}
          <a
            href="https://www.dcharcha.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:underline"
          >
            Dcharcha
          </a>{" "}
          | All copy rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
