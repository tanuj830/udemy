"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Delete, DeleteIcon } from "lucide-react";
import React from "react";
import { RiDeleteBack2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import InputLang from "./FormComponents.tsx/InputLang";
import Prerequisites from "./FormComponents.tsx/Prerequisites";

const CourseForm = () => {
  const [description, setDescription] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [price, setPrice] = React.useState("");
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold">Create 
        </div>
        <div className="flex items-center gap-2">
          <Button size={"sm"} className="">
            Publish
          </Button>
          <Button size={"sm"} variant={"destructive"} className="">
            Delete
          </Button>
        </div>
      </div>

      {/* form */}
      <form action="" className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <span className="text-sm  font-medium pb-1">
              Course Description
            </span>
            <Textarea placeholder="Description" />
          </div>
        </div>
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <span className="text-sm  font-medium pb-1">Author</span>
            <Textarea placeholder="Author" />
          </div>
        </div>
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <span className="text-sm  font-medium pb-1">Price</span>
            <Textarea placeholder="Description" />
          </div>
        </div>
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <span className="text-sm  font-medium pb-1">Image</span>
            <Textarea placeholder="Description" />
          </div>
        </div>
        <InputLang />
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <span className="text-sm  font-medium pb-1">Tags</span>
            <Textarea placeholder="Description" />
          </div>
        </div>
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <span className="text-sm  font-medium pb-1">Language</span>
            <Textarea placeholder="Description" />
          </div>
        </div>
        <Prerequisites />
      </form>
      <div></div>
    </div>
  );
};

export default CourseForm;
