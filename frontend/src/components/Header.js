const Header = () => {
  return (
    <div>
      <header className="bg-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="space-x-4">
          <button className="p-2 bg-primary text-white rounded">Profile</button>
          <button className="p-2 bg-secondary text-white rounded">
            Logout
          </button>
        </div>
      </header>
    </div>
  );
};
export default Header;
