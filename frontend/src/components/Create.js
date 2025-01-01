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
          className="p-2 mb-4 border-2 rounded-lg border-gray-400 shadow-md hover:shadow-md hover:border-primary shadow-gray-300 transition duration-200"
          onClick={handleNewTask}
        >
          + New Task
        </button>
      ) : (
        <form className="bg-background py-4 pr-4 mb-4 flex text-center">
          <div className="p-2 mr-4 border-gray-300 border-2 rounded-lg shadow-md shadow-gray-300 flex justify-evenly items-center">
            <label htmlFor="task">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formState.title}
              placeholder="e.g. Empty bins"
              onChange={handleChange}
              className="p-1 bg-background"
            />
          </div>
          <div className="w-48 p-2 border-gray-300 border-2 rounded-lg shadow-md shadow-gray-300 flex items-center">
            <label htmlFor="difficulty" className="mr-2">
              Difficulty:{" "}
            </label>
            <input
              type="number"
              min={1}
              max={5}
              value={formState.difficulty}
              placeholder="1-5"
              onChange={handleChange}
              name="difficulty"
              id="difficulty"
              className="p-1 bg-background"
            />
          </div>

          <button
            className="px-2 mx-6 rounded-lg border-2 border-primary text-textPrimary shadow-gray-300 shadow-md hover:shadow-md hover:shadow-primary duration-100 flex justify-evenly items-center"
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
