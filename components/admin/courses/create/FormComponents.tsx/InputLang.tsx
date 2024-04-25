import React from "react";
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
const InputLang = () => {
  return (
    <div className="bg-muted p-3 md:p-5 rounded-lg ">
      <div className="flex flex-col">
        <div className="mb-4">
          <p className="text-sm  font-medium pb-1">Languages</p>
          <p className="text-xs text-muted-foreground">
            Choose one language. In which language are teaching?
          </p>
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Languages" />
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
  );
};

export default InputLang;
