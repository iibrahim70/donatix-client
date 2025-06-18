import { GridGallery } from "./ui";

const data = [
  {
    _id: 1,
    src: "https://images.pexels.com/photos/2320004/pexels-photo-2320004.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Serene Nature",
  },
  {
    _id: 2,
    src: "https://images.pexels.com/photos/2324637/pexels-photo-2324637.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Modern Architecture",
  },
  {
    _id: 3,
    src: "https://images.pexels.com/photos/1362910/pexels-photo-1362910.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "City at Night",
    layout: "tall",
  },
  {
    _id: 4,
    src: "https://images.pexels.com/photos/8078548/pexels-photo-8078548.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Mountain Journey",
  },
  {
    _id: 5,
    src: "https://images.pexels.com/photos/8078397/pexels-photo-8078397.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Delicious Food",
  },
  {
    _id: 6,
    src: "https://images.pexels.com/photos/8078499/pexels-photo-8078499.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Candid Portrait",
  },
  {
    _id: 7,
    src: "https://images.pexels.com/photos/28926431/pexels-photo-28926431/free-photo-of-bustling-street-market-in-jalandhar-india.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Innovative Tech",
  },
  {
    _id: 8,
    src: "https://images.pexels.com/photos/7385834/pexels-photo-7385834.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Wildlife",
  },
  {
    _id: 9,
    src: "https://images.pexels.com/photos/27979207/pexels-photo-27979207/free-photo-of-local-area-in-alexandria-egypt.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Delicious Food",
  },
];

const ImageGallery = () => {
  return (
    <section className="bg-midnight-slate py-20">
      <div className="section-wrapper space-y-10">
        <div className="text-center space-y-2.5">
          <h3>
            <span className="text-flame-orange">Stories</span> Through Images
          </h3>
          <p className="line-clamp-2">
            Explore our dynamic carousel showcasing the impact of your
            donations. <br /> Each image tells a story of hope, resilience, and
            generosity.
          </p>
        </div>

        <GridGallery data={data} />
      </div>
    </section>
  );
};

export default ImageGallery;
