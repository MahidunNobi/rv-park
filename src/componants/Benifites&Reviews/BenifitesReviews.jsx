import Amenities from "./Amenities/Amenities";
import Reviews from "./Reviews/Reviews";

const BenifitesReviews = () => {
  return (
    <div className="my-6 bg-hunterGreen/10 gap-12 md:gap-0 px-6 py-12 flex flex-col md:flex-row justify-between">
      <Amenities />
      <div className="divider divider-horizontal borde before:bg-hunterGreen after:bg-hunterGreen"></div>
      <Reviews />
    </div>
  );
};

export default BenifitesReviews;
