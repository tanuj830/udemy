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
    <div>
      {typeof content != undefined ? (
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
      ) : null}
    </div>
  );
};

export default CourseOutline;
