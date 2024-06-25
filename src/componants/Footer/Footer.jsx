import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer bg-hunterGreen/20 text-gray-600 p-10 flex flex-col gap-6 items-center">
      <div className="max-w-[400px]">
        <Logo />
      </div>

      <div className="grid grid-flow-col gap-4">
        <button className="border p-2 rounded-full border-gray-600 ">
          <FaFacebookF size={18} className="text-gray-600" />
        </button>
        <button className="border p-2 rounded-full border-gray-600 ">
          <FaInstagram size={18} className="text-gray-600" />
        </button>
      </div>
      <p>© 2024 RV Park near Paradise, TX | Over The Hill RV Park.</p>
    </footer>
  );
};

export default Footer;
