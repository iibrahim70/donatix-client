import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedCauses from "@/components/FeaturedCauses";
import HowWeWork from "@/components/HowWeWork";
import MakeDonation from "@/components/MakeDonation";
import Sponsors from "@/components/Sponsors";
import Events from "@/components/Events";
import ImageGallery from "@/components/ImageGallery";
import LatestBlogs from "@/components/LatestBlogs";
import Testimonials from "@/components/Testimonials";

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
      <LatestBlogs />
      <Testimonials />
      <Sponsors />
    </main>
  );
};

export default Home;
