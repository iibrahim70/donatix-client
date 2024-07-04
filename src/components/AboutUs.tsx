import videoImg from "../assets/images/video.png";
import iconImg from "../assets/icons/1.svg";
import { Button } from "./ui/button";
import { Progress } from "@/components/ui/progress";

const AboutUs = () => {
  const donationItems = [
    { name: "Food Donation", icon: iconImg },
    { name: "Financial Support", icon: iconImg },
    { name: "Clothing Donation", icon: iconImg },
    { name: "Water Supply", icon: iconImg },
    { name: "Education Support", icon: iconImg },
    { name: "Toy Donation", icon: iconImg },
  ];

  return (
    <section className="section-wrapper">
      {/* first col */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:relative -top-10 max-md:gap-y-5">
        <div className="bg-teal-700 max-md:p-10 lg:px-10 flex items-center">
          <div className="space-y-5">
            <h3>Education</h3>
            <p>
              Education is crucial for rebuilding lives after a disaster. Help
              us provide educational resources and support to those affected.
            </p>

            <Button variant="white">Support Education</Button>
          </div>
        </div>

        <div className="bg-greyish-blue max-md:p-10 lg:px-10 flex items-center">
          <div className="space-y-5">
            <h3>Become a Volunteer</h3>
            <p>Join us in making a difference! Every contribution counts.</p>

            <Button size="link" variant="link">
              Join our Cause
            </Button>
          </div>
        </div>

        <div className="max-md:hidden">
          <img src={videoImg} alt="Video Thumbnail" />
        </div>
      </div>

      {/* second col */}
      <div className="pt-20 lg:pt-10 pb-20 flex max-md:flex-col items-center justify-between gap-20">
        <div className="flex-1 space-y-5">
          <p className="font-caveat text-ruby-red">About Us</p>
          <h2>
            Helping Those <br /> in Need
          </h2>
          <p>
            At our core, we are dedicated to providing support and resources to
            communities affected by disasters. Our mission is to stand with
            these communities, offering a helping hand as they rebuild and
            recover.
          </p>

          <Button>More About</Button>
        </div>

        <div className="flex-1 bg-emerald-400/90 dark:bg-emerald-600/90 p-10 rounded-md shadow-md space-y-8">
          <div className="grid grid-cols-2 gap-5">
            {donationItems.map((item, index) => (
              <a key={index} className="flex items-center gap-2">
                <img src={item?.icon} alt={item?.name} />
                <p className="text-lg">{item.name}</p>
              </a>
            ))}
          </div>

          <div className="space-y-3">
            <h5>Total Donations</h5>
            <Progress value={30} />
            <div className="flex justify-between font-semibold">
              <p>Total Collected - $3M</p>
              <p>Target Goal - $10M</p>
            </div>
          </div>

          <Button variant="white">Donate Now</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
