import { FaPhoneAlt } from "react-icons/fa";
import Title from "../../Title/Title";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ParkInfo = () => {
  return (
    <div className="">
      <Title title="Park" colored="Info" />
      {/* -----Park Hours---- */}
      <div className="my-6">
        <h5 className="text-2xl font-semibold"> Park Hours:</h5>
        <span>Monday-Friday: 9:00am – 5:30pm</span> <br />
        <span>Saturday: 9:00am-1:00pm</span>
      </div>
      {/* -----Park Hours---- */}
      <div className="my-6">
        <h5 className="text-2xl font-semibold mb-3"> How to reach us:</h5>
        <span className="flex gap-3 items-center">
          <FaPhoneAlt className="text-hunterGreen" /> 580-668-0830
        </span>
        <br />
        <span className="flex gap-3 items-center">
          <MdEmail className="text-hunterGreen" />{" "}
          <a
            href="mailto:wilsonchristmastreefarm@gmail.com"
            className="text-blue-600 underline"
          >
            WilsonChristmastreefarm@gmail.com
          </a>
        </span>
        <br />
        <span className="flex gap-3 items-center">
          <FaLocationDot className="text-hunterGreen" />
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Wilson+Christmas+Tree+Farm+and+RV+Park/@34.1718366,-97.4398719,17z/data=!3m1!4b1!4m6!3m5!1s0x864d49902a2a3d41:0x2e0971523cd6264a!8m2!3d34.1718366!4d-97.4398719!16s%2Fg%2F11vs9bw4dq?entry=ttu"
            className="text-blue-600"
          >
            1955 Cimmaron Road Wilson Oklahoma 73463.
          </a>
        </span>
      </div>
    </div>
  );
};

export default ParkInfo;
