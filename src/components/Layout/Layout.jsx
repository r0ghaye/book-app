import React from "react";

function Layout({ children }) {
  return (
    <div>
      <header className="flex justify-between items-center bg-amber-600 py-5 px-4 rounded-lg">
        <h1 className="text-3xl font-black">Book App</h1>
        <p>
          <a href="https://botostart.ir/" className="text-green-700 font-black">
            Botostart
          </a>{" "}
          | React.js Full Course
        </p>
      </header>
      {children}
      <footer className="p-6 bg-amber-600 rounded-lg text-center mt-20">
        <p>Developed by Helma with❤️</p>
      </footer>
    </div>
  );
}

export default Layout;