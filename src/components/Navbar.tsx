import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
//@ts-ignore
import { isClickedAtom } from "../atoms/atoms.js";
import { useSetRecoilState, useRecoilValue } from "recoil";

const Navbar = () => {
  const setClickedState = useSetRecoilState(isClickedAtom);
  return (
    <nav className={`fixed inset-x-0 top-0 z-20 bg-white`}>
      <div className="flex items-center justify-between  p-4">
        <div className="hidden px-4 md:flex md:w-[270px] md:items-center md:justify-center md:px-8">
          <span className="flex items-center justify-between gap-4">
            <span className="roboto-regular text-[14px] leading-6 text-[#505F98]">
              <Link to={"/"}>Home</Link>
            </span>
            <span className="roboto-regular text-[14px] leading-6 text-[#505F98]">
              <Link to={"/about"}>About</Link>
            </span>
            <span className="roboto-regular text-[14px] leading-6 text-[#505F98]">
              <Link to={"/contact"}>Contact</Link>
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center md:w-1/2 md:flex-1">
          <span className="roboto-bold  w-full text-center text-[26px] leading-[38px] text-[#37447E]">
            Landing
          </span>
        </div>
        <div className="hidden w-1/4 md:flex md:items-center md:justify-center">
          <button className="flex-center w-20 bg-[#111B47] p-2">
            <span className="roboto-medium text-[12px] text-white ">
              Buy Now
            </span>
          </button>
        </div>
        <div className="md:hidden">
          <button className="flex items-center justify-center p-2">
            <CiMenuBurger
              className="cursor-pointer text-3xl text-black"
              onClick={() => {
                setClickedState((prev: boolean) => !prev);
              }}
            />
            <Dropdown />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Dropdown = () => {
  const isClicked = useRecoilValue(isClickedAtom);
  return (
    <div
      className={`absolute right-14 top-14 z-10 rounded-lg bg-white ${
        isClicked ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <div className="roboto-regular text-[14px] leading-6 text-[#505F98]">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="roboto-regular text-[14px] leading-6 text-[#505F98]">
          <Link to={"/about"}>About</Link>
        </div>
        <div className="roboto-regular text-[14px] leading-6 text-[#505F98]">
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div>
          <span className="flex w-20 items-center justify-center bg-[#111B47] p-2">
            <span className="roboto-medium text-[12px] text-white ">
              Buy Now
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
