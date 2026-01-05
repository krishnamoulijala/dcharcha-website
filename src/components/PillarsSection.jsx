// src/components/PillarsSection.jsx
import { motion } from "framer-motion";
import {
  MegaphoneIcon,
  HandRaisedIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const pillars = [
  {
    title: "Envision",
    subheading: "Upload a real issue. Reimagine a better future.",
    description:
      "Your journey begins with vision. Capture a real civic problem—broken roads, unsafe streets, neglected spaces—and use AI to visualize how it should look. Turn everyday issues into powerful Dream Worlds that inspire change.",
    icon: MegaphoneIcon,
  },
  {
    title: "Engage",
    subheading: "Discuss with your community and decision-makers",
    description:
      "Great ideas grow through dialogue. Engage with citizens, volunteers, experts, and leaders to discuss, validate, and refine visions. Build collective understanding and momentum around what truly matters locally.",
    icon: HandRaisedIcon,
  },
  {
    title: "Empower",
    subheading: "Transform ideas into real-world action",
    description:
      "Move from vision to impact. Access insights, dashboards, and partnerships that help turn validated ideas into pilots, projects, and policy actions—bridging citizens and authorities to create lasting change.",
    icon: SparklesIcon,
  },
];


export default function PillarsSection() {
  const handleScroll = () => {
    const target = document.getElementById("share-dream");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 leading-tight"
        >
          How It Works
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg sm:text-2xl font-semibold text-[#005555] mb-6"
        >
          The 3E Model — Envision • Engage • Empower
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Dcharcha bridges vision and reality through a simple three-step journey. Envision how your city could be better, engage voices that matter, and empower ideas to drive meaningful, lasting change.

        </motion.p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-14">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#005555]"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-[#E0F2F2] p-3 sm:p-4 rounded-full mb-2">
                  <pillar.icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#005555]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-[#005555] mb-1 font-medium">
                  {pillar.subheading}
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2 sm:px-4">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScroll}
          className="bg-[#005555] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
        >
          Explore Your Role
        </motion.button>
      </div>
    </section>
  );
}
