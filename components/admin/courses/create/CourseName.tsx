"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import React from "react";
import { LoaderCircle } from "lucide-react";

interface CourseName {
  setTitle: Function;
}

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function CourseName({ setTitle }: CourseName) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });
  const [loader, setLoader] = React.useState(false);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoader(true);
    setTitle(data.title);
    setTimeout(() => {
      setLoader(false);
    }, 700);

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }: any) => (
            <FormItem>
              <div className="flex flex-col mb-8">
                <span className="font-semibold text-lg">Name your course</span>{" "}
                <span className=" text-xs text-muted-foreground">
                  What would you like to name your course? Good course name
                  attracts users.
                </span>
              </div>
              <FormLabel>Course title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Eg. Javascript for absolute beginners..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-start gap-3">
          <Link href="/admin/course/all">Cancel</Link>
          {loader ? (
            <Button type="submit" className="flex gap-2 items-center">
              <LoaderCircle className="animate-spin w-5" />
              <span>Submit</span>
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </div>
      </form>
    </Form>
  );
}
