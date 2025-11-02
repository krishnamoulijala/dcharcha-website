import React from "react";

const TermsOfService = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-white to-teal-900 py-16 px-4 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white/95 rounded-2xl shadow-xl backdrop-blur-lg p-10 animate-fadeIn">
        {/* Header */}
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-800 mb-2">
            D'charcha — Terms of Service
          </h1>
          <p className="text-center text-gray-500 text-sm">
            Last Updated: <strong>October 2025</strong> | Effective Date:{" "}
            <strong>October 2025</strong>
          </p>

          <nav className="bg-teal-100/50 rounded-xl mt-6 mb-10 py-3 px-5 flex flex-wrap justify-center gap-4">
            {[
              { id: "definitions", text: "Definitions" },
              { id: "eligibility", text: "Eligibility" },
              { id: "user-content", text: "User Content" },
              { id: "moderation", text: "Moderation" },
              { id: "privacy", text: "Data & Privacy" },
              { id: "contact", text: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-teal-800 font-semibold hover:text-teal-500 relative after:block after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.text}
              </button>
            ))}
          </nav>
        </header>

        {/* Introduction */}
        <section id="introduction" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            Introduction
          </h2>
          <p>
            These Terms of Service ("Terms", "Agreement") govern your access to
            and use of the D'charcha platform and related services (the
            "Platform" or "Service"), provided by{" "}
            <strong>Majji Digital Solutions Private Limited</strong>, a company
            organized under the laws of India, having its registered office at:
            30-1-14, South Jail Road, Dabagardens, Visakhapatnam (Urban),
            Andhra Pradesh – 530020, India ("Company", "we", "our", or "us").
          </p>
          <p className="mt-3">
            By accessing or using the Platform (including the website, mobile
            applications, APIs, plugins, and any associated services), you
            accept and agree to be bound by these Terms. If you do not agree to
            these Terms, please do not use the Platform.
          </p>
        </section>

        {/* Table of Contents */}
        <section id="toc" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            Table of Contents
          </h2>
          <p>
            Definitions | Eligibility & Account Registration | Purpose and Scope
            | User Content & License | AI-Generated Content | Upload Guidelines
            | Code of Conduct | Moderation | Visibility & Third-Party Use | Data
            & Privacy | Data Retention | IP & Copyright | Third-Party Services |
            Prohibited Activities | Disclaimers | Termination | Grievance |
            Changes | Governing Law | Acknowledgement | Contact
          </p>
        </section>

        {/* Definitions */}
        <section id="definitions" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            1. Definitions
          </h2>
          <p>
            <strong>1.1 Platform / Service:</strong> All products, features,
            applications, APIs, and websites provided by D'charcha.
          </p>
          <p>
            <strong>1.2 User:</strong> Any person or entity that accesses or
            uses the Platform.
          </p>
          <p>
            <strong>1.3 Content / User Content:</strong> All materials you
            upload, submit, post, or generate using the Platform, including AI
            outputs.
          </p>
        </section>

        {/* Eligibility */}
        <section id="eligibility" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            2. Eligibility & Account Registration
          </h2>
          <p>
            You must be at least 13 years old to use the Platform. If under 18,
            parental or guardian consent is required. You agree to provide
            accurate information and safeguard your credentials.
          </p>
        </section>

        {/* User Content */}
        <section id="user-content" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            3. User Content & License
          </h2>
          <p>
            You retain ownership of your uploads. By posting content, you grant
            D'charcha a non-exclusive, royalty-free license to host, reproduce,
            and display your content for operational and promotional purposes,
            including AI visualizations and community displays.
          </p>
        </section>

        {/* Moderation */}
        <section id="moderation" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            4. Content Moderation, Removal & Appeals
          </h2>
          <p>
            D'charcha may monitor, remove, or restrict content that violates
            these Terms or laws. Users can appeal removals within 30 days.
            Repeated violations may result in suspension or account termination.
          </p>
        </section>

        {/* Privacy */}
        <section id="privacy" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            5. Data Protection, User Rights & Privacy
          </h2>
          <p>
            We comply with the Digital Personal Data Protection Act (DPDP) of
            India. User data (uploads, metadata, device info) is collected only
            for operating and improving the Platform. You have rights to access,
            correct, or delete your data by contacting{" "}
            <a
              href="mailto:support@dcharcha.com"
              className="text-teal-600 hover:underline"
            >
              support@dcharcha.com
            </a>
            .
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            6. Contact Information
          </h2>
          <p>
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:support@dcharcha.com"
              className="text-teal-600 hover:underline"
            >
              support@dcharcha.com
            </a>
          </p>
          <p>
            🌐 <strong>Website:</strong>{" "}
            <a
              href="https://dcharcha.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 hover:underline"
            >
              https://dcharcha.com
            </a>
          </p>
          <p>
            🏢 <strong>Registered Office:</strong> Majji Digital Solutions Pvt.
            Ltd., 30-1-14, South Jail Road, Dabagardens, Visakhapatnam (Urban),
            Andhra Pradesh – 530020, India
          </p>
        </section>

        {/* Appendices */}
        <section id="appendices" className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mb-3">
            Appendix A — Upload Policy Addendum
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Do not upload restricted or sensitive images</li>
            <li>Blur faces or identifiable data if you do not have consent</li>
            <li>Label AI-modified content when reposting externally</li>
            <li>
              Report misuse to{" "}
              <a
                href="mailto:support@dcharcha.com"
                className="text-teal-600 hover:underline"
              >
                support@dcharcha.com
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-teal-700 border-l-4 border-teal-500 pl-3 mt-6 mb-3">
            Appendix B — Copyright Takedown Procedure
          </h2>
          <p>
            Send complaints to{" "}
            <a
              href="mailto:support@dcharcha.com"
              className="text-teal-600 hover:underline"
            >
              support@dcharcha.com
            </a>{" "}
            with identification of the work, URL of infringement, your contact
            details, and a good-faith statement. We will respond per applicable
            Indian law.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>
            By using D'charcha, you acknowledge that you have read, understood,
            and agree to these Terms.
          </p>
          <p className="mt-2">
            © 2025 MAJJI DIGITAL SOLUTIONS PVT. LTD. |{" "}
            <a
              href="https://dcharcha.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 hover:underline"
            >
              Dcharcha
            </a>{" "}
            | All copy rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
