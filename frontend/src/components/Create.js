import { useState } from "react";
import axios from "axios";

const Create = ({ addTask }) => {
  const [canCreate, setCanCreate] = useState(true);
  const [formState, setFormState] = useState({
    title: "",
    difficulty: "",
  });

  const handleNewTask = () => {
    setCanCreate(!canCreate);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
    console.log(formState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.title || !formState.difficulty) {
      alert("Please fill out all fields");
      return;
    }
    setCanCreate(true);
    try {
      const newTask = await axios.post(
        "http://localhost:5000/tasks",
        formState
      );
      addTask(newTask.data);
      setFormState({
        title: "",
        difficulty: "",
      });
      console.log("Task added");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {canCreate ? (
        <button
          className="p-2 mb-4 border-2 rounded-lg border-gray-200 shadow-md hover:shadow-lg hover:shadow-gray-400 shadow-gray-300 transition duration-200"
          onClick={handleNewTask}
        >
          + New Task
        </button>
      ) : (
        <form className="bg-card p-4 mb-4 flex">
          <div className="p-2 shadow-md shadow-gray-300">
            <label htmlFor="task">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formState.title}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 shadow-md shadow-gray-300">
            <label htmlFor="difficulty">Difficulty:</label>
            <input
              type="number"
              min={1}
              max={5}
              value={formState.difficulty}
              onChange={handleChange}
              name="difficulty"
              id="difficulty"
            />
          </div>

          <button
            className="p-2 shadow-md shadow-gray-300"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </form>
      )}
    </div>
  );
};
export default Create;
