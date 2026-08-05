import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Modern responsive websites built with the latest technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "Android and iOS applications with smooth user experience.",
  },
  {
    icon: <FaRobot />,
    title: "AI Solutions",
    desc: "Intelligent AI-powered solutions for business automation.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services",
    desc: "Secure and scalable cloud infrastructure for your business.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Creative, attractive and user-friendly interface designs.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Analytics",
    desc: "Transform data into valuable business insights.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">

      <Reveal>

        <div className="max-w-7xl mx-auto px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center"
          >
            Our Services
          </motion.h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            We provide innovative digital solutions for startups,
            businesses and enterprises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >

                <div className="text-5xl text-blue-600 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>
  );
}

export default Services;