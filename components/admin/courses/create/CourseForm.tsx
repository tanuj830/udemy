"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Delete, DeleteIcon } from "lucide-react";
import React from "react";
import { RiDeleteBack2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Other",
];
const CourseForm = () => {
  const [description, setDescription] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [price, setPrice] = React.useState("");
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold">Create Course</h1>
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
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-sm  font-medium pb-1">Level</p>
              <p className="text-xs text-muted-foreground">
                You are uploading course for which level of people.
              </p>
            </div>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme"
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang, ind) => (
                  <SelectItem value={lang} key={ind}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* <SelectItem value="light">English </SelectItem>
                <SelectItem value="light">Spanish </SelectItem>
                <SelectItem value="light">French </SelectItem>
                <SelectItem value="light"> German</SelectItem>
                <SelectItem value="light">Chinese </SelectItem>
                <SelectItem value="light">Japanese </SelectItem>
                <SelectItem value="light"> Hindi</SelectItem>
                <SelectItem value="light"> Other</SelectItem> */}
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
        <div className="bg-muted p-3 md:p-5 rounded-lg ">
          <div className="flex flex-col">
            <span className="text-sm  font-medium pb-1">Prerequisites</span>
            <Textarea placeholder="Description" />
          </div>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default CourseForm;
