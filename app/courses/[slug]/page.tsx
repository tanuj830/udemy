"use client";
import { usePathname } from "next/navigation";
import React from "react";
import courses from "../../../constants/courses";
import { useRouter } from "next/router";
import { Globe, InfoIcon, Star } from "lucide-react";
import { GrUpdate } from "react-icons/gr";

const Course = ({ params }: { params: { slug: number } }) => {
  //   const params = usePathname();
  //   const router = useRouter();
  //   console.log(router.query.slug);
  //   const path = ;
  return (
    <div className="px-4 lg:px-20">
      <div>
        <span className="text-muted-foreground text-xs">
          home {">"} courses {">"} {params.slug}
        </span>
      </div>
      {courses.map((course) => (
        <div>
          {course.id == params.slug ? (
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
                <span className="font-bold ">₹{course.price}</span>
              </div>
              {/* right side */}
              <div className="h-fit ">
                <video className="w-full h-fit " controls>
                  <source src={course.video} />
                </video>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Course;
