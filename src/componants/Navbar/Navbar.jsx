import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FilledButton from "../Buttons/FilledButton/FilledButton";

const Navbar = () => {
  const links = (
    <>
      <li className="py-2">
        <a
          className="bg-transparent text-gray-600 border-b-2 hover:border-hunterGreen rounded-none p-0 border-transparent"
          href="#pricing"
        >
          Pricing
        </a>
      </li>
      <li className="py-2">
        <a
          className="bg-transparent text-gray-600 border-b-2 hover:border-hunterGreen rounded-none p-0 border-transparent"
          href="#contact-us"
        >
          Contact Us
        </a>
      </li>
      <li className="py-2">
        <a
          className="bg-transparent text-gray-600 border-b-2 hover:border-hunterGreen rounded-none p-0 border-transparent"
          href="#faq"
        >
          FAQ
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://resnexus.com/resnexus/reservations/book/BC0AFB01-D539-456F-B9A0-DDA5645D6038/?NewSearch=1"
        >
          <FilledButton text={"Book your stay"}></FilledButton>
        </a>
      </li>
      <li className="flex gap-3 flex-row justify-center my-3 md:my-0">
        <a
          className="hover:bg-transparent group p-0"
          href="https://www.facebook.com/profile.php?id=61555638544744&mibextid=LQQJ4d"
        >
          <FaFacebookF
            size={20}
            className="text-gray-600 group-hover:text-hunterGreen"
          />
        </a>
        <a className="hover:bg-transparent group p-0">
          <FaInstagram
            size={20}
            className="text-gray-600 group-hover:text-hunterGreen"
          />
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="container mx-auto px-4">
        <div className="navbar-start flex flex-row justify-between w-full items-center lg:w-1/2 lg:block">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white border border-hunterGreen rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <div className="flex-1 flex md:block justify-center">
            <div className="w-24 lg:w-20 -ml-8">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 *:bg-transparent space-x-6 *:flex-row *:items-center">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
