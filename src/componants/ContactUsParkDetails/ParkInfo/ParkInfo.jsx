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
          WilsonChristmastreefarm@gmail.com
        </span>
        <br />
        <span className="flex gap-3 items-center">
          <FaLocationDot className="text-hunterGreen" /> 1955 Cimmaron Road,
          Wilson Oklahoma 73463
        </span>
      </div>
    </div>
  );
};

export default ParkInfo;
