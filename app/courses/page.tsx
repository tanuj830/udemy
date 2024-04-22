"use client";
import { ArrowBigLeft, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Suspense } from "react";
import courses from "../../constants/courses";
import ShowRoute from "@/components/ShowRoute";

const Courses = () => {
  const params = usePathname();
  const path = ["courses"];
  return (
    <div className="px-4 lg:px-20">
      <div>
        <ShowRoute path={path} />
      </div>
      <h1 className="pt-2 font-bold">Courses</h1>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {courses.map((course, ind) => (
          <Suspense fallback={<p>Loading feed...</p>}>
            <Link href={"/courses/" + course.id}>
              <div>
                <img
                  src={course.img}
                  className="w-64 rounded-md"
                  alt="course image"
                />
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <h6 className="font-bold text-sm">{course.title}</h6>
                <p className="text-xs text-muted-foreground">{course.author}</p>
                <p className="text-muted-foreground flex gap-1  items-center">
                  {course.ratings}
                  <Star width={16} color="gold" />
                  <Star width={16} color="gold" />
                  <Star width={16} color="gold" />
                  <Star width={16} color="gold" />
                </p>
                <p className="font-bold text-sm"> ₹{course.price}</p>
              </div>
            </Link>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Courses;
