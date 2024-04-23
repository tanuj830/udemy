import React from "react";
import { columns } from "../../../../components/admin/courses/Columns";
import { DataTableDemo } from "@/components/admin/courses/DataTable";
// import { DataTable } from "@/components/admin/courses/DataTable";
// import { payments } from "../../../../components/admin/courses/data";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Array<Payment> = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

const AllCourses = () => {
  return (
    <div className="w-full p-5">
      <div className="w-full">
        <DataTableDemo />
        {/* <DataTable data={data} columns={columns} /> */}
      </div>
    </div>
  );
};

export default AllCourses;
