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
            Conveniently nestled directly off Highway 70 in Wilson, Oklahoma.
            The Wilson Christmas Tree Farm and RV Park offers a serene haven for
            weekend hunting stays, rodeo traveler stays, travelers passing
            through the area, and MONTHLY stays. Our tranquil RV park provides a
            peaceful retreat for guests seeking a quiet and relaxing environment
            to unwind after a day of adventure. Whether you&apos;re a nature
            enthusiast, rodeo fan, or road-weary traveler looking for a
            longer-term option, our location ensures easy access while offering
            a peaceful rest from the hustle and bustle of the highway.
            Experience the perfect blend of convenience and tranquility at
            Wilson Christmas Tree Farm and RV Park, where the beauty of nature
            and the charm of Wilson come together to create a restful and
            rejuvenating stay just off Highway 70 at 1955 Cimmaron Road Wilson
            Oklahoma 73463.
          </p>
          <FilledButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;
