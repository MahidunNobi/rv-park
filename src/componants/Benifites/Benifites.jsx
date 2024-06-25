import { FaCheckCircle } from "react-icons/fa";
import FilledButton from "../Buttons/FilledButton/FilledButton";

const Benifites = () => {
  return (
    <div className="md:w-1/2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl text-center font-semibold border-b border-hunterGreen/40 pb-3">
        AMENITIES
      </h1>

      <ul className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> 30 & 50 Amp Connections
        </li>
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> Concrete Roads
        </li>
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> Excellent WiFi
        </li>
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> Fire Pits
        </li>
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> Dog Park
        </li>
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> Winding Trails
        </li>
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> Picnic Areas and Grills
        </li>
        <li className="text-xl flex items-center gap-3">
          <FaCheckCircle className="text-hunterGreen" /> Maytag Commercial
          Laundry
        </li>
      </ul>
      <FilledButton />
    </div>
  );
};

export default Benifites;
