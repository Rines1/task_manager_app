import React, { useState } from 'react';

const Settings = () => {
  const [language, setLanguage] = useState('English (Default)');
  const [timezone, setTimezone] = useState('GMT');
  const [timeFormat, setTimeFormat] = useState('24 Hours');

  return (
    <div className="w-full bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-2/3 max-w-3xl rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>
        
        <div className="border-b mb-6">
          <div className="flex space-x-8 pb-4">
            <button className="text-blue-500 border-b-2 border-blue-500 pb-2">General</button>
            <button className="text-gray-500">Notification</button>
          </div>
        </div>

        {/* Grid layout for form fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Language Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option>English (Default)</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>

          {/* Timezone Selection */} <br />
          <div>
            <label className="block text-sm font-medium text-gray-700">Timezone</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option>GMT</option>
              <option>UTC</option>
              <option>PST</option>
              <option>EST</option>
            </select>
          </div>

          {/* Time Format Selection */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Time Format</label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="timeFormat"
                  value="24 Hours"
                  checked={timeFormat === '24 Hours'}
                  onChange={(e) => setTimeFormat(e.target.value)}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm">24 Hours</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="timeFormat"
                  value="12 Hours"
                  checked={timeFormat === '12 Hours'}
                  onChange={(e) => setTimeFormat(e.target.value)}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm">12 Hours</span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-6">
          <button className="w-100px px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
