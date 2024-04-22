"use client";
import { Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import courses from "../../constants/courses";

const Courses = () => {
  const params = usePathname();
  console.log(params);
  return (
    <div className="px-4 lg:px-20">
      <div>
        <span className="text-muted-foreground text-xs">home{params}</span>
      </div>
      <h1>Courses</h1>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {courses.map((course, ind) => (
          <Link href={"/courses/" + course.id}>
            <div>
              <img
                src={course.img}
                className="w-64 rounded-md"
                alt="course image"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h6 className="font-bold">{course.title}</h6>
              <p className="text-xs text-muted-foreground">{course.author}</p>
              <p className="text-muted-foreground flex gap-1  items-center">
                {course.ratings}
                <Star width={16} color="gold" />
                <Star width={16} color="gold" />
                <Star width={16} color="gold" />
                <Star width={16} color="gold" />
              </p>
              <p className="font-bold"> ₹{course.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
