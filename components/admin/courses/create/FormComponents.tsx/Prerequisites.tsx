import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import React from "react";

const Prerequisites = () => {
  return (
    <div className="bg-muted p-3 md:p-5 rounded-lg ">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm  font-medium pb-1">Prerequisites</span>
          <div>
            <Button size={"sm"} className="text-sm flex items-center gap-2">
              <Plus className="w-5" /> Prerequisite
            </Button>
          </div>
        </div>
        <Textarea placeholder="Description" />
      </div>
    </div>
  );
};

export default Prerequisites;
