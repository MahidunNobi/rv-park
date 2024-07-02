import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer bg-hunterGreen/20 text-gray-600 p-10 flex flex-col gap-6 items-center">
      <div className="max-w-[400px]">
        <Logo />
      </div>

      <div className="grid grid-flow-col gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=61555638544744&mibextid=LQQJ4d"
          className="border p-2 rounded-full border-gray-600 "
        >
          <FaFacebookF size={18} className="text-gray-600" />
        </a>
        <button className="border p-2 rounded-full border-gray-600 ">
          <FaInstagram size={18} className="text-gray-600" />
        </button>
      </div>
      <p>© Wilson Christmas Tree Farm and RV Park</p>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Wilson+Christmas+Tree+Farm+and+RV+Park/@34.1718366,-97.4398719,17z/data=!3m1!4b1!4m6!3m5!1s0x864d49902a2a3d41:0x2e0971523cd6264a!8m2!3d34.1718366!4d-97.4398719!16s%2Fg%2F11vs9bw4dq?entry=ttu"
        className="text-blue-600"
      >
        1955 Cimmaron Road Wilson Oklahoma 73463.{" "}
      </a>
    </footer>
  );
};

export default Footer;
