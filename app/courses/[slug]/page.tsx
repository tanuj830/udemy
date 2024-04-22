"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import courses from "../../../constants/courses";
import { useRouter } from "next/router";
import { Globe, InfoIcon, Star } from "lucide-react";
import { GrUpdate } from "react-icons/gr";
import ShowRoute from "@/components/ShowRoute";
import { Button } from "@/components/ui/button";
import CourseOutline from "@/components/courses/CourseOutline";

const Course = ({ params }: { params: { slug: number } }) => {
  const [course, setCourse] = React.useState({} as any);

  useEffect(() => {
    const c = courses.filter((course) => course.id == params.slug);
    console.log(c);
    setCourse(c[0]);
  }, []);

  return (
    <div className="flex justify-center w-full  relative ">
      <div className="w-[92%] md:w-[75%] lg:w-[70%] ">
        <div className="pb-5">
          <ShowRoute path={["courses", `${course.title}`]} />
        </div>

        {/* price section for mobile */}
        <div className="fixed bottom-2 left-3 right-3  lg:hidden">
          <Button className="w-full flex gap-1 items-center">
            <span>Buy Course at </span>
            <span className="font-semibold"> ₹{course.price}</span>
          </Button>
        </div>

        <div>
          <div className="flex flex-col-reverse lg:flex-row">
            {/* left side */}
            <div className="">
              <h1 className="font-bold py-2">{course.title}</h1>
              <p className="text-sm py-2 text-muted-foreground">
                {course.introduction}
              </p>
              <div className="mt-2">
                <p className="text-xs  flex gap-1   items-center">
                  {course.ratings}
                  <Star width={16} color="gold" />
                  <Star width={16} color="gold" />
                  <Star width={16} color="gold" />
                  <Star width={16} color="gold" />
                </p>
                <p className="text-xs text-muted-foreground py-1">
                  Created by{" "}
                  <span className="text-primary">{course.author}</span>
                </p>
                <p className="text-xs text-muted-foreground py-1 flex gap-2 items-center">
                  <InfoIcon width={16} />
                  <span className="text-primary">
                    Published on {course.date_published}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground  flex gap-2 items-center">
                  <Globe width={16} />
                  <span className="text-primary">{course.language}</span>
                </p>
              </div>
              {/* course outline */}
              <CourseOutline content={course.content} />
            </div>
            {/* right side */}
            <div className="h-fit ">
              <video className="w-full h-fit " controls>
                <source src={course.video} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
