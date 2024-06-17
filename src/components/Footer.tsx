import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#E7ECFF] p-2 text-center md:px-40 md:py-8">
      <div className="flex items-center justify-between px-2">
        <p className="text-sm text-[#939EAF]">&copy;2023 Yourcompany</p>
        <p className="roboto-bold text-2xl">Landing</p>
        <button className="hidden w-1/2 bg-[#111B47] px-6 py-2 md:inline md:w-[200px]">
          <p className="roboto-medium text-sm text-white">Purchase Now</p>
        </button>
      </div>
      <div className="my-8 h-0 border-b-2 border-solid border-[#CDD1D4]"></div>
      <div className="flex items-center justify-between px-2">
        <ul className="flex list-none gap-2 md:gap-8">
          <li>
            <Link to="/">
              <p className="text-sm text-[#929ECC]">Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p className="text-sm text-[#929ECC]">About</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p className="text-sm text-[#929ECC]">Contact</p>
            </Link>
          </li>
        </ul>

        <div className="flex w-1/2 flex-row-reverse items-center justify-start gap-8 py-2">
          <FaFacebookF className="text-2xl text-[#929ECC]" />
          <FaLinkedinIn className="text-2xl text-[#929ECC]" />
          <FaTwitter className="text-2xl text-[#929ECC]" />
          <FaYoutube className="text-2xl text-[#929ECC]" />
          <FaInstagram className="text-2xl text-[#929ECC]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
