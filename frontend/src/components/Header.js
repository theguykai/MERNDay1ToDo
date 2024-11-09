import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <header className="bg-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        {isLoggedIn ? (
          <div className="space-x-4">
            <button className="p-2 bg-primary text-white rounded">
              Profile
            </button>
            <button className="p-2 bg-secondary text-white rounded">
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <button className="p-2 bg-primary text-white rounded">Login</button>
            <button className="p-2 bg-secondary text-white rounded">
              Sign Up
            </button>
          </div>
        )}
      </header>
    </div>
  );
};
export default Header;
