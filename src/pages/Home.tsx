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
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Home;
