const Navbar = () => {
  return (
    <div className="flex h-full">
      <nav className="bg-gray-800 text-white w-64 p-4 flex flex-col">
        <h1 className="text-lg font-bold mb-6">To Do</h1>
        <a href="#" className="mb-4 hover:bg-gray-700 p-2 rounded">
          Home
        </a>
        <a href="#" className="mb-4 hover:bg-gray-700 p-2 rounded">
          Stats
        </a>
      </nav>
    </div>
  );
};
export default Navbar;
