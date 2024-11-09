import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [formState, setFormState] = useState({
    title: "",
    difficulty: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
    console.log(formState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = await axios.post(
        "http://localhost:5000/tasks",
        formState
      );
      console.log("Task added");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="task">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formState.title}
          onChange={handleChange}
        />
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
        <button onClick={handleSubmit}>Add Task</button>
      </form>
    </div>
  );
};
export default Create;
