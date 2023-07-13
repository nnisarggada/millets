import { React, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  let menuPos;
  if (showMenu) {
    menuPos = "left-0";
  } else {
    menuPos = "left-full";
  }

  const NavLink = ({ text }) => {
    return (
      <li
        onClick={() => {
          setShowMenu(false);
        }}
        className="bg-primary w-full h-20"
      >
        <a
          href={`#${text}`}
          className="w-full h-full grid place-items-center text-accent text-3xl font-bold uppercase"
        >
          {text}
        </a>
      </li>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-30 w-full h-20 p-4 bg-accent flex justify-between items-center text-white text-2xl font-black">
        <a href="#">Prithvi Che Shetkari</a>
        {!showMenu ? (
          <button
            className="text-4xl"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <MdMenu />
          </button>
        ) : (
          <button
            className="text-4xl"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <MdClose />
          </button>
        )}
      </nav>
      <div
        className={`fixed top-20 ${menuPos} w-full h-screen bg-secondary p-4 pt-10 transition-all`}
      >
        <ul className="flex flex-col gap-10 px-10">
          <NavLink text="home" />
          <NavLink text="home" />
          <NavLink text="home" />
          <NavLink text="home" />
        </ul>
      </div>
    </>
  );
}
