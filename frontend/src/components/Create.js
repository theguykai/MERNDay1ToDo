import { useState } from "react";

const Create = () => {
  const [formState, setFormState] = useState({
    task: "",
    difficulty: "",
  });

  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    console.log(formState);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="task">Task:</label>
        <input type="text" name="task" onChange={handleChange} />
        <label htmlFor="difficulty">Difficulty:</label>
        <input
          type="number"
          min={1}
          max={5}
          onChange={handleChange}
          name="difficulty"
        />
        <button onClick={handleSubmit}>Add Task</button>
      </form>
    </div>
  );
};
export default Create;
