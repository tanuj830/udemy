"use client";
import CourseForm from "@/components/admin/courses/create/CourseForm";
import { CourseName } from "@/components/admin/courses/create/CourseName";
import React from "react";

const CreateCourse = () => {
  const [title, setTitle] = React.useState("");
  return (
    <div className="flex justify-center items-center h-full">
      {/* course name */}
      {title.length <= 0 ? (
        <CourseName setTitle={setTitle} />
      ) : (
        <div className="w-full h-full">
          <CourseForm />
        </div>
      )}
    </div>
  );
};

export default CreateCourse;
