import povertyImg from "../assets/images/poverty.png";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="hero-banner bg-cover object-cover">
      <div className="section-wrapper min-h-[calc(100dvh-64px)] flex items-center text-deep-white">
        <div className="space-y-5 ">
          <p className="font-caveat">Need Help...</p>
          <h1>
            Being Life Saver <br /> For Someone
          </h1>
          <img src={povertyImg} alt="Poverty" className="w-1/2 h-auto" />

          <div className="flex gap-5">
            <Button>Donate</Button>
            <Button variant="white">Discover</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
