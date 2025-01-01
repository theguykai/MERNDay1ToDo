import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Create from "./Create";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tasksError, setTasksError] = useState(null);
  const [canCreate, setCanCreate] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tasks");
        setTasks(res.data);
        setIsLoading(false);
        setTasksError(null);
      } catch (err) {
        setIsLoading(false);
        setTasksError(err);
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
  };

  return (
    <div>
      <div className="flex h-screen">
        <Navbar />

        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex flex-col justify-center gap-5 flex-grow p-6 bg-background">
            

            {/* <p className="text-textSecondary mt-4">
              Here’s your overview for today:
            </p> */}
            <section>
              {isLoading && (
                <p className="text-textSecondary mt-4">Loading Tasks...</p>
              )}
              {tasks.length === 0 && !tasksError && !isLoading && (
                <p className="text-textSecondary mt-4">No tasks available</p>
              )}
              {tasksError && (
                <p className="text-textSecondary mt-4">
                  An error occurred while fetching tasks
                </p>
              )}
              <Create addTask={addTask} />
              <div className="flex flex-col w-1/2 gap-4">
                {tasks.map((task) => (
                  <Card key={task._id} task={task} deleteTask={deleteTask} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
export default Home;
