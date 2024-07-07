import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Causes from "@/components/Causes";
import HowWeWork from "@/components/HowWeWork";
import Sponsors from "@/components/Sponsors";
import Events from "@/components/Events";
import ImageGallery from "@/components/ImageGallery";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";
import SupportEducation from "@/components/SupportEducation";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Causes />
      <ImageGallery />
      <HowWeWork />
      <SupportEducation />
      <Blogs />
      <Events />
      <Testimonials />
      <Sponsors />
    </main>
  );
};

export default Home;
