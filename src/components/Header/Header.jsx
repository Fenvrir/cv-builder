import React from "react";
import "./Header.scss";
import { PrinterIcon } from "@heroicons/react/solid";

const Header = ({onClick}) => {
  return (
    <header className="Header">
      <div className="container">
        <div className="flex justify-between items-center mt-3">
          <div className=" text-2xl font-bold ml-2">
            <span>CV Builder</span>
          </div>
          <button
            type="button"
            onClick={() => onClick()}
            className="inline-flex px-4 py-2 border border-gray-300 rounded-md shadow-md text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PrinterIcon
              className="-ml-1 mr-2 h-5 w-5 text-gray-600"
              aria-hidden="true"
            />
            Print
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
