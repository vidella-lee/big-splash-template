"use client";

import Logo from "../../../public/logo.js";
import { Button } from "@material-tailwind/react";
import logo from "./logo.svg";

interface NavbarProps {
  buttonHoverColor?: string;
  buttonBackgroundColor?: string;
  menuIconColor?: string;
  menuHoverColor?: string;
  logoColor?: string;
  logoHoverColor?: string;
}

// const navListMenuItems = [
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: SquaresPlusIcon,
//   },
//   {
//     title: "About Us",
//     description: "Meet and learn about our dedication",
//     icon: UserGroupIcon,
//   },
//   {
//     title: "Blog",
//     description: "Find the perfect solution for your needs.",
//     icon: Bars4Icon,
//   },
//   {
//     title: "Services",
//     description: "Learn how we can help you achieve your goals.",
//     icon: SunIcon,
//   },
//   {
//     title: "Support",
//     description: "Reach out to us for assistance or inquiries",
//     icon: GlobeAmericasIcon,
//   },
//   {
//     title: "Contact",
//     description: "Find the perfect solution for your needs.",
//     icon: PhoneIcon,
//   },
//   {
//     title: "News",
//     description: "Read insightful articles, tips, and expert opinions.",
//     icon: NewspaperIcon,
//   },
//   {
//     title: "Products",
//     description: "Find the perfect solution for your needs.",
//     icon: RectangleGroupIcon,
//   },
//   {
//     title: "Special Offers",
//     description: "Explore limited-time deals and bundles",
//     icon: TagIcon,
//   },
// ];

export default function Navbar() {
  return (
    <>
      <div className="absolute z-10 bg-transparent w-screen h-40 px-24 py-10">
        <div className="flex flex-row justify-between items-center w-100 h-100 p-12">
          <div className=" w-16 lg:w-auto ">
            <Button className="bg-dark hover:bg-babyBlue hover:text-dark text-white p-6 mr-5 rounded-lg">
              <span className="material-symbols-rounded text-3xl xl:text-7xl ">
                menu
              </span>
            </Button>
          </div>

          <a
            className=" w-16 lg:w-auto flex place-items-center gap-2 p-8 lg:p-0"
            href="/"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <Button className="bg-dark hover:bg-white text-babyBlue hover:text-white p-6 ml-5 rounded-lg ">
              {/* <Logo /> */}
              <img src="./logo.svg" alt="logo" />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
