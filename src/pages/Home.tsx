import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedCauses from "@/components/FeaturedCauses";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";
import MakeDonation from "@/components/MakeDonation";
import Sponsors from "@/components/Sponsors";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <FeaturedCauses />
      <Gallery />
      <HowWeWork />
      <MakeDonation />
      <Testimonials />
      <Sponsors />
    </main>
  );
};

export default Home;
