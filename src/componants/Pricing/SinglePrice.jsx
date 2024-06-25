const SinglePrice = () => {
  return (
    <div className="border border-hunterGreen/70 shadow-xl shadow-hunterGreen/50">
      <h5 className="bg-hunterGreen text-center text-white py-3">
        STARTING AT
      </h5>
      <div className="bg-hunterGreen/70 py-12 space-y-3">
        <h5 className="text-center text-xl font-semibold text-white">
          NIGHTLY
        </h5>
        <h1 className="text-6xl text-center text-white">
          <sup>$</sup>45
        </h1>
      </div>
      <ul className="*:text-center *:py-2">
        <li>Wifi</li>
        <li className="border-y border-hunterGreen/70">30 Amp Hookups</li>
        <li className="border-b border-hunterGreen/70">50 Amp Hookups</li>
        <li>Water & Sewer Hookups</li>
      </ul>
      <button className="w-full py-3 hover:bg-hunterGreen bg-hunterGreen/90 duration-200 text-white">
        BOOK YOUR STAY
      </button>
    </div>
  );
};

export default SinglePrice;
