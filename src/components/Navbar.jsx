import { DarkThemeToggle } from "flowbite-react";
import { Button, Navbar as NavbarC } from "flowbite-react";

export function Navbar() {
  return (
    <NavbarC class="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 left-0 border-b mx-auto py-4 px-4 md:px-8 border-gray-200 dark:border-gray-600">
      {/* <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> */}
      <a
        href="#"
        class="flex items-center text-black dark:text-white text-lg font-bold"
      >
        @HafizRP
      </a>

      <div class="flex md:order-2">
        <DarkThemeToggle />
        <NavbarC.Toggle />
        {/* <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> */}
      </div>
      <NavbarC.Collapse
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a id="home-anchor" href="#home" class="nav-link">
              Home
            </a>
          </li>
          <li>
            <a id="projects-anchor" href="#projects" class="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a id="skills-anchor" href="#skills" class="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a id="experiences-anchor" href="#experiences" class="nav-link">
              Experiences
            </a>
          </li>
        </ul>
      </NavbarC.Collapse>
      {/* </div> */}
    </NavbarC>

    // <NavbarC fluid rounded>
    //   <NavbarC.Brand href="https://flowbite-react.com">
    //     <img
    //       alt="Flowbite React Logo"
    //       className="mr-3 h-6 sm:h-9"
    //       src="/vite.svg"
    //     />
    //     {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    //       Flowbite React
    //     </span> */}
    //   </NavbarC.Brand>
    //   <div className="flex md:order-2">
    //     <Button>Get started</Button>
    //     <NavbarC.Toggle />
    //   </div>
    //   <NavbarC.Collapse>
    //     <NavbarC.Link active href="#">
    //       <p>Home</p>
    //     </NavbarC.Link>
    //     <NavbarC.Link href="#">About</NavbarC.Link>
    //     <NavbarC.Link href="#">Services</NavbarC.Link>
    //     <NavbarC.Link href="#">Pricing</NavbarC.Link>
    //     <NavbarC.Link href="#">Contact</NavbarC.Link>
    //   </NavbarC.Collapse>
    // </NavbarC>
  );
}
