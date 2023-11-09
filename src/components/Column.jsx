import { useEffect, useState } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import classNames from "classnames";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );

  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div
      className={classNames("column", { drop: drop })}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={() => {
        setDrop(false);
        setDraggedTask(null);
        moveTask(draggedTask, state);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>

      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
              autoFocus
            />
            <div className="btn-section">
              <button
                onClick={() => {
                  addTask(text, state);
                  setText("");
                  setOpen(false);
                }}
              >
                Submit
              </button>
              <button
                className="btn-close"
                onClick={() => {
                  setText("");
                  setOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;

function RefTest() {
  const ref = useRef();

  useEffect(() => {
    useStore.subscribe(
      (store) => store.tasks,
      (tasks) => {
        ref.current = tasks;
      }
    );
  }, []);

  return ref.current;
}
