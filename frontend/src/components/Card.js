import { useState } from "react";
import axios from "axios";

const Card = ({ task, deleteTask }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const getBorderColour = (difficulty) => {
    if (difficulty < 3) {
      return "border-green-500";
    } else if (difficulty < 5) {
      return "border-yellow-500";
    } else if (difficulty === 5) {
      return "border-red-500";
    } else {
      return "border-gray-500";
    }
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await axios.delete(`http://localhost:5000/tasks/${task._id}`);
      setTimeout(() => {
        deleteTask(task._id);
        setIsDeleting(false);
      }, 500);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div
      className={`bg-card shadow-md rounded-lg p-4 mb-4 flex justify-between items-center border-l-4 ${getBorderColour(
        task.difficulty
      )} hover:shadow-gray-400 hover:py-5 transition-all duration-100 ${
        isDeleting
          ? "opacity-0 translate-y-4 transition-all duration-1000"
          : "opacity-100"
      } `}
    >
      <div>
        <h3 className="text-lg font-medium text-textPrimary">{task.title}</h3>
        <p className="text-sm text-textSecondary">
          Difficulty: {task.difficulty}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => console.log("Edit task")}
          className="w-16 p-2 bg-yellow-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-yellow-600 transition duration-200"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="w-16 p-2 bg-red-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
