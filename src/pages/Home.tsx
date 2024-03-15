import AboutUs from "@/components/AboutUs";
import Donations from "@/pages/Donations";
import Hero from "@/components/Hero";
import Testimonial from "../components/Testimonial";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Donations />
      <Testimonial />
      <Gallery />
    </main>
  );
};

export default Home;
