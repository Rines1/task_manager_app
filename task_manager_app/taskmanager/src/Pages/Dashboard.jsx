import React from 'react';
import { FaRegUserCircle, FaTasks,FaStar ,FaCalendarAlt,} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import profile from '../../src/assets/profile.jpg';
const activityData = [
  { day: 'Mon', tasks: 20 },
  { day: 'Tue', tasks: 30 },
  { day: 'Wed', tasks: 50 },
  { day: 'Thu', tasks: 40 },
  { day: 'Fri', tasks: 70 },
  { day: 'Sat', tasks: 90 },
  { day: 'Sun', tasks: 60 },
];

function MainContent() {
  return (
    <div className="p-8 bg-gray-50 flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Hi, Skylar Dias</h1>
          <p className="text-gray-500">Let’s finish your task today!</p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden">
      
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          
        </div>
      </div>

      <div className="flex space-x-6">
        <div className="bg-gray-900 text-white p-6 rounded-lg w-1/3">
          <h2 className="text-lg font-semibold mb-2">Running Task</h2>
          <div className="text-4xl font-bold">65</div>
          <p className="text-gray-400">45% of 100 Task</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Activity</h2>
            <p className="text-sm text-gray-500">This Week</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={activityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="tasks" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly Mentors</h2>
        <div className="flex space-x-4">
          <div className="bg-white shadow rounded-lg p-4 w-1/2 flex items-center justify-between">
            <div className="flex items-center">
              <img src={profile} alt="Mentor 1" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-gray-800 font-semibold">Curious George</h3>
                <p className="text-gray-500 text-sm">UI/UX Design</p>
                <div className="flex items-center text-gray-400 text-sm mt-2 space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaTasks className="text-gray-500" />
                    <span>40 Tasks</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-500" />
                    <span>4.7 (750 Reviews)</span>
                  </div>
                  </div>
              </div>
            </div>
            <Link to="#" className="text-blue-600 text-sm">+ Follow</Link>
          </div>
          <div className="bg-white shadow rounded-lg p-4 w-1/2 flex items-center justify-between">
            <div className="flex items-center">
              <img src={profile} alt="Mentor 1" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-gray-800 font-semibold">Curious George</h3>
                <p className="text-gray-500 text-sm">UI/UX Design</p>
                <div className="flex items-center text-gray-400 text-sm mt-2 space-x-4">
                  <div className="flex items-center space-x-1">
                    <FaTasks className="text-gray-500" />
                    <span>40 Tasks</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-500" />
                    <span>4.7 (750 Reviews)</span>
                  </div>
                  </div>
              </div>
            </div>
            <Link to="#" className="text-gray-600 text-sm ">Followed</Link>
          </div>
        </div>
      </div>
      <div className="p-8 bg-gray-50 flex-1 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Task</h2>
        <div className="flex space-x-4">
          <div className="bg-white shadow rounded-lg p-4 w-1/2">
            <img
              src={profile}
              alt="Task 1"
              className="w-full h-32 rounded-lg mb-4 object-cover"
            />
            <h3 className="text-gray-800 font-semibold">Creating Mobile App Design</h3>
            <p className="text-gray-500 text-sm">UI/UX Design</p>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Progress</span>
                <span className="text-blue-600 font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className="text-gray-500" />
                <span>3 Days Left</span>
              </div>
              <div className="flex -space-x-2">
                <img src={profile} alt="Profile 1" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={profile} alt="Profile 2" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={profile} alt="Profile 3" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={profile} alt="Profile 4" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4 w-1/2">
            <img
              src={profile}
              alt="Task 2"
              className="w-full h-32 rounded-lg mb-4 object-cover"
            />
            <h3 className="text-gray-800 font-semibold">Creating Perfect Website</h3>
            <p className="text-gray-500 text-sm">Web Developer</p>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Progress</span>
                <span className="text-blue-600 font-semibold">85%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className="text-gray-500" />
                <span>4 Days Left</span>
              </div>
              <div className="flex -space-x-2">
                <img src={profile} alt="Profile 1" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={profile} alt="Profile 2" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={profile} alt="Profile 3" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={profile} alt="Profile 4" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MainContent;