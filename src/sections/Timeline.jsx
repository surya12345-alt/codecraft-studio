import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

const process = [
  {
    icon: <FaLightbulb />,
    title: "Idea",
    desc: "We understand your business goals and collect project requirements.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Design",
    desc: "Our designers create modern UI/UX designs and wireframes.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "We build scalable, secure and high-performance applications.",
  },
  {
    icon: <FaBug />,
    title: "Testing",
    desc: "Every feature is tested thoroughly before deployment.",
  },
  {
    icon: <FaRocket />,
    title: "Launch",
    desc: "Your product is deployed successfully with ongoing support.",
  },
];

function Timeline() {
  return (
    <section id="process" className="py-24 bg-gray-100">

      <Reveal>

        <div className="max-w-6xl mx-auto px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center"
          >
            Our Process
          </motion.h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            From concept to launch, we follow a streamlined workflow.
          </p>

          <div className="space-y-8">

            {process.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.03,
                  x: 10,
                }}
                className="bg-white rounded-2xl shadow-xl p-8 flex items-center gap-6 cursor-pointer"
              >

                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl">
                  {step.icon}
                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {step.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>
  );
}

export default Timeline;