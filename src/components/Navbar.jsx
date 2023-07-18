import { React, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  let menuPos;
  if (showMenu) {
    menuPos = "right-0";
  } else {
    menuPos = "-right-full";
  }

  const NavLink = ({ text }) => {
    return (
      <li
        onClick={() => {
          setShowMenu(false);
        }}
        className="bg-primary w-full h-20 md:w-80"
      >
        <a
          onClick={() => {
            const targetElement = document.getElementById(text);

            if (targetElement) {
              // Calculate the target scroll position
              const targetScrollPosition =
                targetElement.offsetTop -
                5 *
                  parseFloat(
                    getComputedStyle(document.documentElement).fontSize,
                  );

              // Scroll to the target position
              window.scrollTo({
                top: targetScrollPosition,
                behavior: "smooth",
              });
            }
          }}
          className="w-full h-full grid place-items-center text-accent text-3xl font-bold uppercase cursor-pointer md:text-4xl"
        >
          {text}
        </a>
      </li>
    );
  };

  return (
    <>
      <nav className="sticky top-0 left-0 z-30 w-full h-20 p-4 bg-accent flex justify-between items-center text-white text-2xl font-black md:text-3xl xl:text-5xl xl:h-24 xl:px-12">
        <a href="#">पृथ्वी चे शेतकरी</a>
        {!showMenu ? (
          <button
            className="text-4xl md:text-5xl xl:text-6xl"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <MdMenu />
          </button>
        ) : (
          <button
            className="text-4xl md:text-5xl xl:text-6xl"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <MdClose />
          </button>
        )}
      </nav>
      <div
        className={`fixed z-30 top-20 ${menuPos} w-full h-[calc(100dvh-5rem)] bg-secondary p-4 py-10 transition-all md:w-fit xl:top-24 xl:h-[calc(100dvh-6rem)]`}
      >
        <ul className="h-full flex flex-col gap-10 px-10 items-center">
          <NavLink text="home" />
          <NavLink text="bts" />
          <NavLink text="iyom" />
          <NavLink text="about us" />
          <li className="flex-grow"></li>
          <li
            onClick={() => {
              setShowMenu(false);
            }}
            className="bg-primary w-full h-20 md:w-80"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJxL-MsFOMkh85YbZJ08Ld7aQ2gd7Yv501FjH57oXRePGSsw/viewform"
              target="_blank"
              className="w-full h-full grid place-items-center text-accent text-3xl font-bold uppercase cursor-pointer md:text-4xl"
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
