import React from "react";
export default function Title(props) {
  return (
    <h1 className="text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
      {props.title}
    </h1>
  );
}
