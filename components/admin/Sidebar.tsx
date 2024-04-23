"use client";
import {
  AlignVerticalJustifyStartIcon,
  BarChart2,
  BookOpen,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Courses",
    path: "/admin/courses/all",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: BarChart2,
  },
];

const Sidebar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="w-64 border-r ">
      <h3 className="font-semibold px-5">UDEMY</h3>
      <div className="mt-14 flex flex-col  ">
        {links.map((link, ind) => (
          <Link
            href={link.path}
            className={`flex gap-2 items-center hover:bg-muted pl-4 py-3 text-sm text-muted-foreground leading-6 ${
              link.path == path
                ? "bg-primary/10 border-r-4 border-primary text-primary font-semibold"
                : null
            }`}
            key={ind}
          >
            <link.icon className="mr-2 h-4 w-4" />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
