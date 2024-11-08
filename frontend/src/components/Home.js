import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Create from "./Create";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tasks");
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <div className="flex h-screen">
        <Navbar />

        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow p-6 bg-background">
            <h1 className="text-3xl font-bold text-textPrimary">
              Welcome to the To-Do App
            </h1>
            <p className="text-textSecondary mt-4">
              Here’s your overview for today:
            </p>
            {tasks.map((task) => (
              <Card
                key={task.id}
                title={task.title}
                difficulty={task.difficulty}
              />
            ))}
            <Create />
          </main>
        </div>
      </div>
    </div>
  );
};
export default Home;
