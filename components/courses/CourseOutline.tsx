import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CourseOutlineInterface {
  content: [
    {
      title: string;
      disp: string;
    }
  ];
}
const CourseOutline = ({ content }: CourseOutlineInterface) => {
  return (
    <div className="my-10">
      <h6 className="text-md font-bold">Course Outline</h6>
      <div>
        {content?.map((c) => (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{c.title}</AccordionTrigger>
              <AccordionContent>
                <div
                  id="course_outline"
                  dangerouslySetInnerHTML={{ __html: c.disp }}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default CourseOutline;
