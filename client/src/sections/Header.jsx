import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ title }) => (
    <LinkScroll className="text-w1/80 text-lg font-bold uppercase tracking-wider transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
      {title}
    </LinkScroll>
  );

  return (
    <header className="fixed left-0 z-50 w-full p-6">
      <div className="container flex h-14 items-center max-lg:px-5 max-lg:w-[327px] max-lg:h-[72px] max-lg:rounded-3xl lg:mt-12 bg-m1/50">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/logo.svg" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="items-center max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:overflow-hidden sidebar-before bg-m1/50 rounded-[32px] backdrop-blur-[10px]">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto lg:px-[120px] lg:h-[104px]">
              <ul className="flex items-center justify-center h-full max-lg:block max-lg:space-y-5 gap-12">
                <li className="nav-li flex">
                  <NavLink title="home page" />
                  <NavLink title="portfolio" />
                  <NavLink title="about us" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="home page"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/logo.svg"
                      width={70}
                      height={70}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li flex gap-4">
                  <NavLink title="inquires" />
                  <NavLink title="pricings" />
                  <NavLink title="challenges" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <button
          className="lg:hidden z-2 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "phone-menu"}.svg`}
            alt="phone-menu"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
