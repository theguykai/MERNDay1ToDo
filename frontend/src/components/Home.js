import Navbar from "./Navbar";
import Header from "./Header";
import Create from "./Create";

const Home = () => {
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
            <Create />
          </main>
        </div>
      </div>
    </div>
  );
};
export default Home;
