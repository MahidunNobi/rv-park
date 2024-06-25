const Faq = () => {
  return (
    <div id="faq" className="container mx-auto px-4 my-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">FAQ</h1>

      {/* ----------1st question--------- */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 bg-base-200 border mt-6 rounded-none"
      >
        <div className="collapse-title text-xl font-medium">
          Do all RV pad sites have 30 amp and 50 amp electrical connections?
        </div>
        <div className="collapse-content">
          <p>
            Yes, so no matter what your needs, we can accommodate your RV at
            every pad site.
          </p>
        </div>
      </div>
      {/* ------------2nd question-------- */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 bg-base-200 border rounded-none"
      >
        <div className="collapse-title text-xl font-medium">
          Are pets allowed?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we love pets. There are some restrictions on some breeds of
            dogs, please check our Rules and Regulations found here. All pets
            must be registered with the office. Animals must be kept on a leash
            at all times and may not be left unattended at RV pad site.
          </p>
        </div>
      </div>
      {/* ------------3rd question-------- */}
      <div
        tabIndex={0}
        className="collapse collapse-arrow border-base-300 bg-base-200 border rounded-none"
      >
        <div className="collapse-title text-xl font-medium">
          What is the maximum number of people allowed living in one RV?
        </div>
        <div className="collapse-content">
          <p>
            Four and there is an extra monthly charge for the fourth person to
            cover our costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
