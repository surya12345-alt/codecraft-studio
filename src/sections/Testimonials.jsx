import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    review:
      "CodeCraft Studio transformed our idea into a beautiful product. The team exceeded our expectations.",
  },
  {
    name: "Michael Lee",
    role: "Business Owner",
    review:
      "Excellent communication, clean code, and a fantastic user experience. Highly recommended.",
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    review:
      "Professional developers who delivered our project on time with outstanding quality.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">

      <Reveal>

        <div className="max-w-7xl mx-auto px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center"
          >
            What Our Clients Say
          </motion.h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            Trusted by startups, businesses, and enterprises worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="bg-gray-50 rounded-2xl shadow-xl p-8 cursor-pointer"
              >

                <div className="flex gap-1 text-yellow-400 mb-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="text-gray-600 italic leading-7">
                  "{item.review}"
                </p>

                <div className="mt-8">

                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                    {item.name.charAt(0)}
                  </div>

                  <h3 className="text-xl font-bold mt-4">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
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

export default Testimonials;