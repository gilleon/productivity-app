import React from "react";

export default function Input({ label, textArea, ...props }) {
  const classes =
    "w-full rounded-sm p-1 border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase tex-stone-500">
        {label}
      </label>
      {textArea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
