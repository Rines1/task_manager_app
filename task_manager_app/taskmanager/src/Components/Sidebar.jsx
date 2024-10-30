import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks, faUser, faEnvelope, faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-50 p-4 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
          N
        </div>
        <span className="ml-3 text-xl font-semibold">Nuegas</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="flex items-center text-gray-700 font-medium p-2 rounded-lg hover:bg-purple-100">
            <FontAwesomeIcon icon={faHome} className="h-6 w-6 mr-3 text-purple-500" />
            Overview
          </li>
          <li className="flex items-center text-gray-700 font-medium p-2 rounded-lg hover:bg-purple-100">
            <FontAwesomeIcon icon={faTasks} className="h-6 w-6 mr-3 text-purple-500" />
            Task
          </li>
          <li className="flex items-center text-gray-700 font-medium p-2 rounded-lg hover:bg-purple-100">
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 mr-3 text-purple-500" />
            Mentors
          </li>
          <li className="flex items-center text-gray-700 font-medium p-2 rounded-lg hover:bg-purple-100">
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 mr-3 text-purple-500" />
            Message
          </li>
          <li className="flex items-center text-gray-700 font-medium p-2 rounded-lg hover:bg-purple-100">
            <FontAwesomeIcon icon={faCog} className="h-6 w-6 mr-3 text-purple-500" />
            Settings
          </li>
        </ul>
      </nav>

      {/* Help Center */}
      <div className="mt-auto bg-purple-100 p-4 rounded-lg flex items-center">
        <FontAwesomeIcon icon={faQuestionCircle} className="h-6 w-6 text-purple-500 mr-3" />
        <div>
          <p className="text-sm font-medium text-gray-700">Help Center</p>
          <p className="text-xs text-gray-500">Go to Help Center</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;