import AboutUs from "@/components/AboutUs";
import Donations from "@/pages/Donations";
import Hero from "@/components/Hero";
import Testimonials from "../components/Testimonials";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Donations />
      <Gallery />
      <Testimonials />
    </main>
  );
};

export default Home;
