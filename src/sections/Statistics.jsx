import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

import {
  FaProjectDiagram,
  FaUsers,
  FaAward,
  FaSmile,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      value: 250,
      suffix: "+",
      title: "Projects Completed",
    },
    {
      icon: <FaUsers />,
      value: 120,
      suffix: "+",
      title: "Happy Clients",
    },
    {
      icon: <FaAward />,
      value: 15,
      suffix: "+",
      title: "Industry Awards",
    },
    {
      icon: <FaSmile />,
      value: 99,
      suffix: "%",
      title: "Client Satisfaction",
    },
  ];

  return (
    <section id="statistics" className="py-24 bg-blue-600">
      <Reveal>
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center text-white"
          >
            Our Achievements
          </motion.h2>

          <p className="text-center text-blue-100 mt-4 mb-16">
            Numbers that reflect our commitment to excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center cursor-pointer"
              >
                <div className="text-blue-600 text-5xl flex justify-center mb-6">
                  {item.icon}
                </div>

                <h2 className="text-5xl font-bold text-gray-800">
                  {item.value}
                  {item.suffix}
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Statistics;