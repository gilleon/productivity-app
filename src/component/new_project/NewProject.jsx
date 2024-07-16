import React, { useRef } from "react";
import Input from "./input";
import Modal from "../inputs/Modal";

export default function NewProject({ onAdd }) {
  // use ref to collect the data in the input elements
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enterDescription = description.current.value;
    const enterDuedate = dueDate.current.value;

    //add some validation
    if (
      enteredTitle.trim() === "" ||
      enterDescription.trim() === "" ||
      enterDuedate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enterDescription,
      dueDate: enterDuedate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid input</h2>
        <p>Check your values entered and try again</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea="textarea" />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
