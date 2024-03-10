import AboutUs from "@/components/AboutUs";
import Donations from "@/pages/Donations";
import Hero from "@/components/Hero";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Donations />
      <Testimonial />
    </main>
  );
};

export default Home;
