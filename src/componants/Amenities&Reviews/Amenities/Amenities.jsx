import { FaCheckCircle } from "react-icons/fa";
import FilledButton from "../../Buttons/FilledButton/FilledButton";

const Amenities = () => {
  return (
    <div className="md:w-1/2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl text-center font-semibold border-b border-hunterGreen/40 pb-3">
        AMENITIES
      </h1>

      <ul className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          New Park Built in 2024
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          Daily Rentals, Weekly Rentals and Monthly Rentals Available
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          30 & 50 Amp Connections ⚡️
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          All 23 spaces have full water and sewer hookups
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          High Speed WiFI - Full Service
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          300 1st Year Christmas Trees Planted🌲🌲🌲
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          Dog Park Area
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          Quiet Atmosphere
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          Conveniently located right off Highway 70
        </li>
        <li className="text-xl flex items-center gap-3">
          <div className="min-w-6">
            <FaCheckCircle className="text-hunterGreen" />
          </div>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Wilson+Christmas+Tree+Farm+and+RV+Park/@34.1718366,-97.4398719,17z/data=!3m1!4b1!4m6!3m5!1s0x864d49902a2a3d41:0x2e0971523cd6264a!8m2!3d34.1718366!4d-97.4398719!16s%2Fg%2F11vs9bw4dq?entry=ttu"
            className="text-blue-600"
          >
            1955 Cimmaron Road Wilson Oklahoma 73463.
          </a>
        </li>
      </ul>
      <FilledButton />
    </div>
  );
};

export default Amenities;
