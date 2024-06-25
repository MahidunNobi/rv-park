import SinglePrice from "./SinglePrice";

const Pricing = () => {
  return (
    <div id="pricing" className="container mx-auto px-4 my-12">
      <h1 className="text-3xl md:text-4xl text-center font-semibold  pb-3">
        PRICING
      </h1>
      {/* ------Prices------------ */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <SinglePrice />
        <div className="md:scale-110">
          <SinglePrice />
        </div>
        <SinglePrice />
      </div>
    </div>
  );
};

export default Pricing;
