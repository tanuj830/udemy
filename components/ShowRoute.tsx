import Link from "next/link";
import React from "react";

interface ShowRouteProps {
  path: Array<string>;
}

const ShowRoute = ({ path }: ShowRouteProps) => {
  return (
    <span className="text-muted-foreground text-xs bg-muted px-2 py-1 rounded-full flex items-center gap-1 w-fit">
      <Link href="/" className=" underline-offset-2">
        home
      </Link>
      {path.map((p, ind) => (
        <Link href="/courses" className="lowercase">
          {" > "}
          {p}
        </Link>
      ))}
    </span>
  );
};

export default ShowRoute;
