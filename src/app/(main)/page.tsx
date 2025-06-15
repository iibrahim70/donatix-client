import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Causes from "@/components/Causes";
import HowWeWork from "@/components/HowWeWork";
import Blogs from "@/components/Blogs";
import Events from "@/components/Events";
import ImageGallery from "@/components/ImageGallery";
import Sponsors from "@/components/Sponsors";
import SupportEducation from "@/components/SupportEducation";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Causes />
      {/* <ImageGallery /> */}
      <HowWeWork />
      <SupportEducation />
      <Blogs />
      <Events />
      {/* <Testimonials /> */}
      <Sponsors />
    </main>
  );
};

export default Home;
