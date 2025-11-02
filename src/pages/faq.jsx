import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  FaInfoCircle,
  FaMobileAlt,
  FaUsers,
  FaShieldAlt,
  FaHandsHelping,
  FaQuestionCircle,
  FaRocket,
} from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const iconStyle =
    "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 p-2 rounded-full shadow-md transition-transform duration-200 hover:scale-110 flex-shrink-0";

  const sectionIcons = {
    about: <FaInfoCircle className={`${iconStyle} text-emerald-700 bg-emerald-200`} />,
    using: <FaMobileAlt className={`${iconStyle} text-blue-700 bg-blue-200`} />,
    community: <FaUsers className={`${iconStyle} text-purple-700 bg-purple-200`} />,
    features: <FaRocket className={`${iconStyle} text-orange-700 bg-orange-200`} />,
    privacy: <FaShieldAlt className={`${iconStyle} text-yellow-700 bg-yellow-200`} />,
    support: <FaHandsHelping className={`${iconStyle} text-rose-700 bg-rose-200`} />,
  };

  const faqSections = [
    {
      key: "about",
      title: "About Dcharcha",
      questions: [
        {
          q: "What is Dcharcha?",
          a: (
            <p>
              <strong>Dcharcha</strong> is India’s first <em>AI-powered civic-tech platform</em> that empowers citizens
              to report issues, reimagine public spaces, and collaborate for real-world change. It’s where ideas,
              discussions, and action come together to build better cities.
            </p>
          ),
        },
        {
          q: "What does “Dcharcha” mean?",
          a: (
            <p>
              The name <em>“Dcharcha”</em> comes from the Hindi word <em>“चर्चा”</em>, meaning “discussion.” Because
              meaningful change always begins with a conversation — and on Dcharcha, every discussion has the power to
              create impact.
            </p>
          ),
        },
        {
          q: "Why was Dcharcha created?",
          a: (
            <p>
              India’s cities face recurring civic challenges — from waste to waterlogging — yet citizens often feel
              unheard. <strong>Dcharcha</strong> was built to bridge this gap, turning citizen voice, visuals, and
              collaboration into a force for smarter, cleaner, and greener cities.
            </p>
          ),
        },
        {
          q: "Who can use Dcharcha?",
          a: (
            <p>
              Anyone aged <strong>13 and above</strong> can join — students, residents, NGOs, volunteers, community
              leaders, and anyone passionate about improving their surroundings.
            </p>
          ),
        },
        {
          q: "Is Dcharcha free to use?",
          a: <p>Yes! Dcharcha is completely free for all users — always.</p>,
        },
      ],
    },
    {
      key: "using",
      title: "Using Dcharcha",
      questions: [
        {
          q: "How do I use Dcharcha?",
          a: (
            <ul className="list-decimal ml-6 space-y-2">
              <li>Capture a photo of a civic issue or public space.</li>
              <li>Upload it to the app with your caption or improvement idea.</li>
              <li>Watch as AI reimagines it into your “Dream World.”</li>
              <li>Discuss, share, and inspire others to take action.</li>
              <li>Track real-world progress — from report to resolution.</li>
            </ul>
          ),
        },
        {
          q: "What kind of issues can I report?",
          a: (
            <ul className="list-disc ml-6 space-y-1">
              <li>Flooded or damaged roads</li>
              <li>Garbage piles or waste management issues</li>
              <li>Poor lighting or unsafe spaces</li>
              <li>Broken sidewalks or infrastructure</li>
              <li>Neglected parks or greenery</li>
              <li>Any local public concern needing attention</li>
            </ul>
          ),
        },
        {
          q: "What is the “Dream World” feature?",
          a: (
            <p>
              The <strong>Dream World</strong> feature uses AI to transform your uploaded photo into a stunning,
              reimagined version of how the place could look — clean, green, safe, and beautifully designed. It’s your
              imagination, visualized!
            </p>
          ),
        },
        {
          q: "How does Dcharcha help solve problems?",
          a: (
            <>
              <p className="mb-2">
                Dcharcha follows a unique <strong>3R + 3E civic model</strong> for sustainable action:
              </p>
              <ul className="list-disc ml-6 mb-3">
                <li>Report → Reimagine → Resolve</li>
                <li>Express → Engage → Empower</li>
              </ul>
              <p>
                You report an issue, visualize better solutions, engage your community, and collectively move toward
                resolution.
              </p>
            </>
          ),
        },
      ],
    },
    {
      key: "community",
      title: "Community & Collaboration",
      questions: [
        {
          q: "How does community participation work?",
          a: (
            <p>
              Every issue or idea you post becomes a <strong>conversation starter</strong>. People nearby can join in,
              add comments, share solutions, and collaborate. Together, the community helps prioritize problems and
              accelerate change with collective effort.
            </p>
          ),
        },
        {
          q: "Who are the stakeholders behind Dcharcha?",
          a: (
            <ul className="list-disc ml-6 space-y-1">
              <li>Active citizens & residents</li>
              <li>Community volunteers & NGOs</li>
              <li>Urban planners, architects & designers</li>
              <li>Corporate CSR teams & innovators</li>
              <li>Local leaders & representatives</li>
              <li>Municipal bodies & government departments</li>
            </ul>
          ),
        },
        {
          q: "How can NGOs, volunteers, or leaders join?",
          a: (
            <p>
              NGOs, volunteers, and civic leaders can sign up like regular users, post insights, and engage with
              citizens. For partnerships or collaborations, reach out to{" "}
              <a href="mailto:info@dcharcha.com" className="text-teal-600 hover:underline">
                info@dcharcha.com
              </a>
              .
            </p>
          ),
        },
        {
          q: "Does Dcharcha partner with government bodies?",
          a: (
            <p>
              Yes. Dcharcha works with <strong>Smart City Missions</strong> and local municipalities through pilot
              projects that demonstrate real civic impact before expanding citywide.
            </p>
          ),
        },
        {
          q: "How can I get involved beyond reporting?",
          a: (
            <ul className="list-disc ml-6">
              <li>Join and lead local discussions</li>
              <li>Volunteer for neighborhood projects</li>
              <li>Share creative reimagination ideas</li>
              <li>Invite others to use Dcharcha</li>
              <li>Collaborate with civic authorities</li>
            </ul>
          ),
        },
      ],
    },
    {
      key: "features",
      title: "Mobile App Features",
      questions: [
        {
          q: "What are the main features of Dcharcha?",
          a: (
            <ul className="list-disc ml-6 space-y-1">
              <li>Report civic issues with photos & captions</li>
              <li>AI-powered “Dream World” visual reimagination</li>
              <li>Community discussion threads & collaborations</li>
              <li>Progress tracking from “Reported” → “Resolved”</li>
              <li>Interactive civic dashboards (coming soon)</li>
              <li>Verified NGO & leader profiles (coming soon)</li>
            </ul>
          ),
        },
        {
          q: "Is Dcharcha available on Android and iOS?",
          a: (
            <p>
              Dcharcha is currently available on <strong>Android</strong>. The iOS version is under development and
              launching soon!
            </p>
          ),
        },
        {
          q: "Can I post in my regional language?",
          a: (
            <p>
              Absolutely! Dcharcha supports <strong>Hindi, English, Telugu, Tamil, Kannada, and Malayalam</strong> —
              with more Indian languages coming soon to make civic participation inclusive.
            </p>
          ),
        },
      ],
    },
    {
      key: "privacy",
      title: "Privacy, Security & Policy",
      questions: [
        {
          q: "Is my data safe on Dcharcha?",
          a: (
            <p>
              100%. Dcharcha uses <strong>end-to-end encryption</strong> and advanced security measures. Your data is
              never shared or sold — it’s used only to improve your experience and platform safety.
            </p>
          ),
        },
        {
          q: "What happens to the photos I upload?",
          a: (
            <p>
              All uploads are securely stored and used strictly for civic visualization or research. You can delete your
              posts and data anytime from the app settings.
            </p>
          ),
        },
        {
          q: "Are there any photo rules?",
          a: (
            <ul className="list-disc ml-6 space-y-1">
              <li>Upload only public spaces or infrastructure</li>
              <li>Avoid private property or identifiable people</li>
              <li>No offensive or political content</li>
              <li>Keep posts civic, positive, and solution-oriented</li>
            </ul>
          ),
        },
        {
          q: "What are the Terms of Service?",
          a: (
            <p>
              By using Dcharcha, you agree to follow our <strong>Terms of Service</strong> — designed to ensure respectful
              discussion, civic harmony, and responsible participation.
            </p>
          ),
        },
        {
          q: "How does Dcharcha use AI responsibly?",
          a: (
            <p>
              Our AI is used only for <strong>creative visualization</strong> — not misinformation or content
              manipulation. It’s designed to <em>inspire change</em>, not distort reality.
            </p>
          ),
        },
      ],
    },
    {
      key: "support",
      title: "Support, Feedback & Legal",
      questions: [
        {
          q: "How do I contact Dcharcha support?",
          a: (
            <p>
              Reach us anytime at{" "}
              <a href="mailto:support@dcharcha.com" className="text-teal-600 hover:underline">
                support@dcharcha.com
              </a>{" "}
              or via the in-app Help & Support section. We’re always here to help.
            </p>
          ),
        },
        {
          q: "How do I report inappropriate content or misuse?",
          a: (
            <p>
              You can report content using the in-app <strong>“Report”</strong> option or email{" "}
              <a href="mailto:support@dcharcha.com" className="text-teal-600 hover:underline">
                support@dcharcha.com
              </a>
              . Our moderation team ensures swift action.
            </p>
          ),
        },
        {
          q: "How can I share feedback or suggest new features?",
          a: (
            <p>
              We love hearing from users! Send us your ideas at{" "}
              <a href="mailto:info@dcharcha.com" className="text-teal-600 hover:underline">
                info@dcharcha.com
              </a>{" "}
              — your feedback helps shape Dcharcha’s future.
            </p>
          ),
        },
        {
          q: "What if I want to delete my account?",
          a: (
            <p>
              You can delete your account anytime from app settings or by emailing{" "}
              <a href="mailto:support@dcharcha.com" className="text-teal-600 hover:underline">
                support@dcharcha.com
              </a>
              . We’ll ensure your data is securely removed as per our Privacy Policy.
            </p>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-200 via-white to-teal-900 py-10 sm:py-16 px-4 sm:px-6 md:px-10 text-slate-800">
      <div className="max-w-5xl mx-auto bg-white/95 rounded-2xl shadow-2xl backdrop-blur-md p-6 sm:p-8 md:p-10 animate-fadeIn">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-800 mb-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-balance">
            <FaQuestionCircle className="text-teal-700 w-8 h-8 sm:w-10 sm:h-10" />
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about <strong>Dcharcha</strong> — India’s civic-tech platform for changemakers.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-5 py-2 sm:px-6 sm:py-2.5 bg-teal-700 text-white rounded-full hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            Back to Home
          </Link>
        </header>

        {/* FAQ Sections */}
        {faqSections.map((section, sIdx) => (
          <section
            key={sIdx}
            className="border-t border-gray-200 pt-8 mt-8 first:border-none first:pt-0 first:mt-0"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4 hover:translate-x-1 transition-transform duration-300">
              {sectionIcons[section.key]}
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-700">{section.title}</h2>
            </div>

            <div className="space-y-4">
              {section.questions.map((item, qIdx) => {
                const index = `${sIdx}-${qIdx}`;
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center p-3 sm:p-4 text-left bg-gray-50 hover:bg-gray-100"
                    >
                      <span className="font-medium text-slate-800 text-sm sm:text-base pr-2">{item.q}</span>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-teal-700 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
                      <div className="p-3 sm:p-4 text-gray-600 bg-white border-t border-gray-100 leading-relaxed text-sm sm:text-base">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
          <p>
            © 2025 MAJJI DIGITAL SOLUTIONS PVT. LTD. |{" "}
            <a
              href="https://www.dcharcha.com"
              target="_blank"
              rel="noreferrer"
              className="text-teal-600 hover:underline"
            >
              Dcharcha
            </a>{" "}
            | All rights reserved.
          </p>
          <p className="mt-2">
            <a href="/privacy" className="text-teal-600 hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="mailto:support@dcharcha.com" className="text-teal-600 hover:underline">
              Contact Support
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FAQ;
