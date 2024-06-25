import FilledButton from "../Buttons/FilledButton/FilledButton";

const Banner = () => {
  return (
    <div className="min-h-[95vh] max-w-[100vw] overflow-hidden banner-background flex items-center">
      <div className="container mx-auto text-white px-4">
        <div className="max-w-[850px] py-6">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Your Ultimate Guide to RV Parks
          </h1>
          <p className="my-6">
            Embark on your next RV adventure with confidence and ease. Our
            website is your comprehensive resource for finding the best RV parks
            across the country. Whether you&apos;re looking for family-friendly
            locations, scenic retreats, or parks with top-notch amenities,
            we&apos;ve got you covered.
          </p>
          <FilledButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;
