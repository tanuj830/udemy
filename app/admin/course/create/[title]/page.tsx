import CourseForm from "@/components/admin/courses/create/CourseForm";
import { Loader2 } from "lucide-react";
import React, { Suspense } from "react";

const Course = () => {
  return (
    <>
      <div className="w-full h-full">
        <Suspense
          fallback={
            <span className="p-5 flex gap-2 items-center">
              <Loader2 className="w-5 animate-spin" />{" "}
              <span>Creating Course </span>
            </span>
          }
        >
          <CourseForm />
        </Suspense>
      </div>
    </>
  );
};

export default Course;
