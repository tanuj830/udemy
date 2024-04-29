"use client";
import CourseForm from "@/components/admin/courses/create/CourseForm";
import { CourseName } from "@/components/admin/courses/create/CourseName";
import { redirect } from "next/navigation";
import React from "react";

const CreateCourse = () => {
  const [title, setTitle] = React.useState("");
  if (title.length > 0) {
    redirect("create/" + title);
  }
  return (
    <div className="flex justify-center items-center h-full">
      <CourseName setTitle={setTitle} />
    </div>
  );
};

export default CreateCourse;
