import { useState } from "react";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-slate-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-slate-700 hover:text-stone-950"
        onClick={handleClick}
      >
        add task
      </button>
    </div>
  );
}
