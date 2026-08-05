import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for startups and personal websites.",
    features: [
      "Responsive Website",
      "Up to 5 Pages",
      "Basic SEO",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$799",
    description: "Best choice for growing businesses.",
    features: [
      "Up to 20 Pages",
      "Advanced UI/UX",
      "Premium SEO",
      "Priority Support",
      "Performance Optimization",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complete digital solution for enterprises.",
    features: [
      "Unlimited Pages",
      "Cloud Deployment",
      "Dedicated Team",
      "24/7 Support",
      "Custom Features",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-100">

      <Reveal>

        <div className="max-w-7xl mx-auto px-8">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center"
          >
            Pricing Plans
          </motion.h2>

          <p className="text-center text-gray-500 mt-4 mb-16">
            Choose a plan that fits your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {plans.map((plan, index) => (

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
                className={`rounded-2xl shadow-xl p-8 cursor-pointer transition-all duration-300 ${
                  plan.featured
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >

                {plan.featured && (
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                )}

                <h2 className="text-3xl font-bold mt-4">
                  {plan.name}
                </h2>

                <h1 className="text-5xl font-bold mt-6">
                  {plan.price}
                </h1>

                <p className="mt-4 opacity-80">
                  {plan.description}
                </p>

                <div className="mt-8 space-y-4">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <FaCheckCircle />

                      <span>{feature}</span>

                    </div>

                  ))}

                </div>

                <button
                  className={`mt-10 w-full py-3 rounded-xl font-semibold transition ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-gray-200"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Choose Plan
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </Reveal>

    </section>
  );
}

export default Pricing;