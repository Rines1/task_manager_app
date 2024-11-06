import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [timeFormat, setTimeFormat] = useState('24Hours');
  const [language, setLanguage] = useState('english');
  const [timezone, setTimezone] = useState('utc');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'notification', label: 'Notification' },
  ];

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
  };

  const handleNotificationSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-3xl p-4 mx-auto md:p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <button className="p-2 bg-gray-100 rounded-full">
          <img
            src="https://picsum.photos/32"
            alt="profile"
            className="rounded-full"
          />
        </button>
      </div>

      <div className="mb-8 border-b">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative pb-4 px-2 focus:outline-none ${
                activeTab === tab.id
                  ? 'text-indigo-600'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'general' && (
        <form className="space-y-8" onSubmit={handleGeneralSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="english">English (Default)</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
              <ChevronDown className="absolute w-4 h-4 text-gray-500 right-2 top-3" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Timezone
            </label>
            <div className="relative">
              <select
                className="w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
              >
                <option value="utc">UTC (Default)</option>
                <option value="est">EST (UTC-5)</option>
                <option value="pst">PST (UTC-8)</option>
              </select>
              <ChevronDown className="absolute w-4 h-4 text-gray-500 right-2 top-3" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Time Format
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setTimeFormat('24Hours')}
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  timeFormat === '24Hours'
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                24 Hours
              </button>
              <button
                type="button"
                onClick={() => setTimeFormat('12Hours')}
                className={`px-4 py-2 rounded-lg border focus:outline-none ${
                  timeFormat === '12Hours'
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                12 Hours
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-2 text-white bg-indigo-600 rounded-lg md:w-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </form>
      )}

      {activeTab === 'notification' && (
        <form className="space-y-8" onSubmit={handleNotificationSubmit}>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="emailNotifications"
                className="ml-2 text-sm text-gray-700"
              >
                Receive Email Notifications
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pushNotifications"
                checked={pushNotifications}
                onChange={(e) => setPushNotifications(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="pushNotifications"
                className="ml-2 text-sm text-gray-700"
              >
                Receive Push Notifications
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-2 text-white bg-indigo-600 rounded-lg md:w-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}
