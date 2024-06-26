"use client";
import { ThemeButton } from "../theme/ThemeButton";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenu4Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { Ghost, GhostIcon } from "lucide-react";
import { FaGhost } from "react-icons/fa";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const path = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const [showTopBanner, setShowTopBanner] = React.useState(false);

  const navlinks = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "courses",
      path: "/courses",
    },
    {
      name: "blogs",
      path: "/blogs",
    },
  ];
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleTopBanner = () => {
    setShowTopBanner(!showTopBanner);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  //Authentication
  const { isAuthenticated } = useKindeBrowserClient();
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user, isAuthenticated]);

  return (
    <>
      {showTopBanner ? (
        <div className="transition-all duration-1000 text-[3.75vw] md:text-[14px] bg-[url(https://images.pexels.com/photos/10461974/pexels-photo-10461974.jpeg?auto=compress&cs=tinysrgb&w=6000)] bg-center bg-no-repeat px-10 py-4  tracking-wider bg-cover text-white relative">
          <button
            className="absolute lg:top-4 lg:right-10 hidden lg:inline-block"
            onClick={handleTopBanner}
          >
            <AiOutlineClose />
          </button>

          <h6 className="text-center font-[400]">
            80% OFF : If you want web services then its a best time!{" "}
            <Link className="text-md font-bold underline" href="#">
              Explore Services
            </Link>
          </h6>
        </div>
      ) : null}

      <div className=" block lg:hidden  z-[999] relative  ">
        {/* for mobile */}
        <div className=" pt-4 pb-3  w-full h-full backdrop-blur-sm">
          {/* border-b border-gray-700 */}
          <div className="  flex justify-between items-center gap-4 px-4 md:gap-44 w-full ">
            <div className="flex items-center  ">
              <Link
                className="cursor-pointer text-primary flex items-end"
                href="/"
              >
                <img
                  src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
                  alt=""
                />
              </Link>
            </div>

            <div className="ml-2 transition-all  duration-1000 flex items-center gap-2">
              <ThemeButton />
              {!showMenu ? (
                <button
                  className="text-3xl text-primary font-extrabold mr-3 "
                  onClick={handleClick}
                >
                  <RiMenu4Line />
                </button>
              ) : (
                <button
                  className="text-3xl text-primary font-extrabold mr- "
                  onClick={handleClick}
                >
                  <RxCross2 />
                </button>
              )}
            </div>
          </div>
          {showMenu === true ? (
            <div className="mb-2 relative transition-all duration-1000 flex h-screen   items-center justify-between ">
              {/* <div> */}
              <div className="bg-card absolute text-secondary-foreground h-[80%] w-full text-2xl  p-10 ">
                <div className="flex  items-start justify-between  w-full h-full flex-col ">
                  <div className="flex  items-start  w-full h-fit flex-col gap-8">
                    <div className="text-center">
                      <span className=" no-underline rounded-full bg-secondary-foreground text-secondary px-3 py-2 text-xs font-extrabold">
                        1
                      </span>{" "}
                      <Link
                        onClick={closeMenu}
                        className={` ${
                          path == "/project"
                            ? "text-popover-foreground font-bold underline underline-offset-8"
                            : ""
                        }`}
                        href="/project"
                      >
                        Projects
                      </Link>
                    </div>
                    <div className="text-center">
                      <span className=" no-underline rounded-full bg-secondary-foreground text-secondary px-3 py-2 text-xs font-extrabold">
                        2
                      </span>{" "}
                      <Link
                        onClick={closeMenu}
                        className={` ${
                          path == "/blog"
                            ? "text-popover-foreground font-bold underline underline-offset-8"
                            : "text-inherit"
                        }`}
                        href="/courses"
                      >
                        Courses
                      </Link>
                    </div>
                    <div className="text-center">
                      <span className=" no-underline rounded-full bg-secondary-foreground text-secondary px-3 py-2 text-xs font-extrabold">
                        3
                      </span>{" "}
                      <Link
                        onClick={closeMenu}
                        className={` ${
                          path == "/services"
                            ? "text-popover-foreground font-bold underline underline-offset-8"
                            : "text-inherit"
                        }`}
                        href="/services"
                      >
                        Services
                      </Link>
                    </div>
                    <div className="text-center">
                      <span className=" no-underline rounded-full bg-secondary-foreground text-secondary px-3 py-2 text-xs font-extrabold">
                        4
                      </span>{" "}
                      <Link
                        onClick={closeMenu}
                        className={` ${
                          path == "/fun"
                            ? "text-popover-foreground font-bold underline underline-offset-8"
                            : "text-inherit"
                        }`}
                        href="/fun"
                      >
                        Chill Zone
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* for pc */}
      <div className="hidden px-4 lg:px-20 lg:inline-block z-50 relative text-black backdrop-blur-md overflow-hidden	w-full xl:h-20 h-16   ">
        <div className=" flex justify-between items-center  w-full h-full">
          <div className=" flex items-center  h-full">
            <Link
              className="cursor-pointer text-primary flex items-end"
              href="/"
            >
              <span className="text-xl font-bold tracking-widest">UDEMY</span>
            </Link>
          </div>
          <div className=" flex  items-center md:gap-x-7 h-full text-muted-foreground">
            {navlinks.map((link, ind) => (
              <Link
                key={ind}
                className={` flex items-center h-full   ${
                  path == "/project"
                    ? "text-secondary-foreground   font-bold"
                    : ""
                }`}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
            <ThemeButton />
            {isAuthenticated === true && user != null ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img
                    className="w-8  rounded-full"
                    src={user.picture!}
                    alt=""
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/profile">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <Link href="/admin/course/all">
                    <DropdownMenuItem>Admin Pannel</DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <LogoutLink>
                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                  </LogoutLink>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <LoginLink>Log in</LoginLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
