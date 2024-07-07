import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedCauses from "@/components/FeaturedCauses";
import HowWeWork from "@/components/HowWeWork";
import MakeDonation from "@/components/MakeDonation";
import Sponsors from "@/components/Sponsors";
import Events from "@/components/Events";
import ImageGallery from "@/components/ImageGallery";
import Testimonials from "@/components/Testimonials";
import Blogs from "@/components/Blogs";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <FeaturedCauses />
      <ImageGallery />
      <HowWeWork />
      <MakeDonation />
      <Events />
      <Blogs />
      <Testimonials />
      <Sponsors />
    </main>
  );
};

export default Home;
