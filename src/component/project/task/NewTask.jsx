import React, { useState } from "react";
import Button from "../../inputs/Button";
import Input from "../input";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleAddTask() {
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
}
