import { useEffect } from "react";
import { Collapse, initTE } from "tw-elements";

const NavigationBar = () => {
  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <>
      {/* Main navigation container */}
      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref=""
      >
        <div className="flex w-full mx-auto max-w-screen-xl flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init=""
            data-te-target="#navbarSupportedContent3"
            aria-controls="navbarSupportedContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/* Collapsible navbar container */}
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item=""
          >
            {/* Navbar title */}
            <a
              className="pr-2 text-xl text-black dark:text-neutral-200"
              href="#"
            >
              Navbar
            </a>
            {/* Left links */}
            <ul
              className="list-style-none ml-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref=""
            >
              {/* Home link */}
              <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref="">
                <a
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref=""
                >
                  Home
                </a>
              </li>
              {/* About link */}
              <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref="">
                <a
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref=""
                >
                  About
                </a>
              </li>
              {/* Properties link */}
              <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref="">
                <a
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref=""
                >
                  Properties
                </a>
              </li>
              {/* Contact link */}
              <li className="my-4 lg:my-0 lg:pr-2" data-te-nav-item-ref="">
                <a
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
