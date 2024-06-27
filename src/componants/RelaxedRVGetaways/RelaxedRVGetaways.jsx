import FilledButton from "../Buttons/FilledButton/FilledButton";
import Title from "../Title/Title";
import RelaxedRvGatewayPic from "../../assets/RelaxedRvGateways.jpeg";

const RelaxedRVGetaways = () => {
  return (
    <div className="bg-hunterGreen/10 px-4 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* ----------Left image */}
        <div className="w-full overflow-hidden flex items-center">
          <img
            src={RelaxedRvGatewayPic}
            alt=""
            className="w-full object-cover"
          />
        </div>
        {/* -------Right Description------ */}
        <div className="*:text-left">
          <Title title={"Relaxed RV"} colored={"Gateways"} />
          <p className="text-center my-6">
            Welcome to the Wilson Christmas Tree Farm and RV Park, your one-stop
            shop for a relaxing and comfortable stay when you bring your RV
            through Wilson, Oklahoma. Our RV resort comes equipped with all of
            the needed amenities to safely park and rest your RV for as long as
            you would like to stay with us. Our fun, kind, and family-oriented
            community can put your mind at ease when you stay with us in Wilson.
            <br /> <br />
            Experience the pinnacle of RV adventures at Wilson Christmas Tree
            Farm and RV Park. Nestled in the serene landscapes of Wilson
            Oklahoma our park offers a quiet and peaceful atmosphere , high
            speed internet , and a welcoming community. Whether you&apos;re
            looking for a peaceful retreat or a base for your outdoor
            explorations, Wilson Christmas Tree Farm and RV Park has everything
            you need for an unforgettable stay.
          </p>
          <FilledButton />
        </div>
      </div>
    </div>
  );
};

export default RelaxedRVGetaways;
