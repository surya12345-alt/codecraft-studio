import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 via-white to-indigo-100 px-8 pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold leading-tight text-gray-800">
            Building
            <br />
            <span className="text-blue-600">
              Digital Experiences
            </span>
            <br />
            That Inspire
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We create beautiful websites, scalable applications,
            AI solutions, and cloud platforms that help businesses
            grow faster.
          </p>

          <div className="mt-8 flex gap-5">

            <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-xl text-white font-semibold shadow-lg">
              Get Started
            </button>

            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-7 py-3 rounded-xl font-semibold">
              Learn More
            </button>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Developer"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;