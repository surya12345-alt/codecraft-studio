import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Statistics from "./sections/Statistics";
import Timeline from "./sections/Timeline";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <Timeline />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;