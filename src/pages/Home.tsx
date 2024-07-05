import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedCauses from "@/components/FeaturedCauses";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <FeaturedCauses />
      <Gallery />
      <HowWeWork />
      <Testimonials />
    </main>
  );
};

export default Home;
