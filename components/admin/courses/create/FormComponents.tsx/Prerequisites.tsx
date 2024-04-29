import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { FileWarning, Plus } from "lucide-react";
import React from "react";

type Modal = {
  title: string;
  disp: string;
};

const Prerequisites = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [prerequisites, setPrerequisites] = React.useState([] as any);
  const [modal, setModal] = React.useState({} as Modal);
  const [title, settitle] = React.useState("");
  const [disp, setdisp] = React.useState("");
  const { toast } = useToast();

  const ShowAddPreqModal = () => {
    setShowModal(true);
  };
  const addReq = (e: any) => 
    e.preventDefault();
    console.log("tanujjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    if (title.length > 0 && disp.length > 0) {
      const obj = {
        title: title,
        disp: disp,
      };
      setPrerequisites(obj);
      toast({
        variant: "default",
        title: "Success",

        description: "One prerequisites added.",
      });
      console.log(prerequisites);
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",

        description: "Both fields are mandatory to fill",
      });
    }
  };

  return (
    <>
      <div className="bg-muted p-3 md:p-5 rounded-lg ">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm  font-medium pb-1">Prerequisites</span>
            <div>
              <span
                onClick={ShowAddPreqModal}
                className="text-sm flex items-center gap-2"
              >
                <Plus className="w-5" /> Prerequisite
              </span>
            </div>
          </div>
          {/* modal */}
          {showModal ? (
            <div>
              {/* previous added prequisites */}
              {/* {
                <div>
                  {prerequisites?.map((p, ind) => (
                    <div key={ind}>
                      {p.title}
                      {p.disp}
                    </div>
                  ))}
                </div>
              } */}

              <Input
                placeholder="Title"
                className=""
                onChange={(e) => settitle(e.target.value)}
              />
              <Textarea
                placeholder="Description"
                onChange={(e) => setdisp(e.target.value)}
              />
              <Button
                className="w-fit flex text-sm items-center gap-1"
                size={"sm"}
                onClick={(e) => addReq(e)}
              >
                <Plus className="w-4" />
                Add
              </Button>
            </div>
          ) : (
            <small className="text-muted-foreground">Nothing to show</small>
          )}
          {/* <Textarea placeholder="Description" /> */}
        </div>
      </div>
    </>
  );
};

export default Prerequisites;
