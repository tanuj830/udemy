import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { BadgeX, Delete, DeleteIcon, FileWarning, Plus } from "lucide-react";
import React from "react";
import { GrBucket } from "react-icons/gr";

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
  const addReq = (e: any) => {
    e.preventDefault();
    if (title.length > 0 && disp.length > 0) {
      const obj = {
        title: title,
        disp: disp,
      };
      let tempArray = prerequisites;
      tempArray.push(obj);
      setPrerequisites(tempArray);

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
            <div className="flex items-center ">
              <span
                onClick={ShowAddPreqModal}
                className="text-sm flex items-center gap-1"
              >
                <Plus className="w-5 h-4 " /> Prerequisite
              </span>
            </div>
          </div>

          {/* Added prerequisties */}
          <div>
            {prerequisites.length > 0 ? (
              <div className="flex flex-col gap-3 mb-6">
                {prerequisites.map(
                  (
                    pre: {
                      title: string;

                      disp: string;
                    },
                    ind: React.Key | null | undefined
                  ) => (
                    <div className="bg-primary/5 flex cursor-pointer">
                      <div
                        className=" flex flex-col gap-1 p-3 rounded-md w-full"
                        key={ind}
                      >
                        <span className="text-sm font-medium">{pre.title}</span>
                        <span className="text-xs">{pre.disp}</span>
                      </div>
                      <div className="w-12 p-3 flex justify-center items-center border-l border-primary/10 shadow-sm">
                        <span>
                          <BadgeX className="w-5 h-5 text-destructive " />
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : null}
          </div>
          {/* modal */}
          {showModal ? (
            <div className="flex flex-col gap-2">
              <div>
                <Input
                  placeholder="Title"
                  className=""
                  onChange={(e) => settitle(e.target.value)}
                />
              </div>
              <d>
                <Textarea
                  placeholder="Description"
                  onChange={(e) => setdisp(e.target.value)}
                />
              </d
              <div>
                <Button
                  className="w-fit flex text-sm items-center gap-1"
                  size={"sm"}
                  onClick={(e) => addReq(e)}
                >
                  <Plus className="w-4" />
                  Add
                </Button>
              </div>
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
