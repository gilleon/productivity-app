import React from "react";
import logo from "../../assets/no-projects.png";
import Button from "../inputs/Button";

export default function DefaultPage({ onAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="object-contain w-16 mx-auto"
        src={logo}
        alt="empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500">No Project Selected</h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
