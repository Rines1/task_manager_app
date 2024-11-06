import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const API_ENDPOINTS = {
  MENTORS: 'https://dummyjson.com/users?limit=4',
  UPCOMING: 'https://dummyjson.com/posts?limit=2',
  TODOS: 'https://dummyjson.com/todos?limit=30',
};

export default function Dashboard() {
  const [mentors, setMentors] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [mentorsRes, upcomingRes, todosRes] = await Promise.all([
          fetch(API_ENDPOINTS.MENTORS),
          fetch(API_ENDPOINTS.UPCOMING),
          fetch(API_ENDPOINTS.TODOS),
        ]);

        const mentorsData = await mentorsRes.json();
        const upcomingData = await upcomingRes.json();
        const todosData = await todosRes.json();

        const transformedMentors = mentorsData.users.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          role: user.company.title,
          tasks: Math.floor(Math.random() * 50) + 20,
          rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
          reviews: Math.floor(Math.random() * 200) + 100,
          followed: Math.random() > 0.5,
          image: `https://picsum.photos/seed/mentor${user.id}/100/100`,
        }));

        const transformedUpcoming = upcomingData.posts.map((post) => ({
          id: post.id,
          title: post.title.length > 30 ? post.title.substring(0, 27) + '...' : post.title,
          type: post.tags[0] || 'Task',
          progress: Math.floor(Math.random() * 40) + 60,
          daysLeft: Math.floor(Math.random() * 7) + 1,
          team: Array(4).fill('').map((_, i) => `https://picsum.photos/seed/team${i}/32/32`),
          image: `https://picsum.photos/seed/upcoming${post.id}/320/160`,
          description: post.body,
        }));

        const transformedTodos = todosData.todos.slice(0, 30).map((todo) => ({
          id: todo.id,
          todo: todo.todo,
          completed: todo.completed,
          userId: todo.userId,
        }));

        setMentors(transformedMentors);
        setTasks(transformedTodos.slice(0, 5));
        setUpcomingTasks(transformedUpcoming);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const calendarDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDate = new Date();
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4 mx-auto max-w-7xl bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700">Welcome Back!</h1>
          <p className="text-sm text-gray-600">Here's what's happening with your tasks today.</p>
        </div>
        <img
          src="https://picsum.photos/seed/profile/40/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-6 text-white bg-indigo-600 shadow-md rounded-2xl">
              <span className="text-sm">Tasks Completed</span>
              <div className="flex items-end justify-between mt-2">
                <span className="text-4xl font-bold">{completedTasks}</span>
                <span className="text-xl">/ {totalTasks}</span>
              </div>
              <div className="mt-4">
                <div className="w-full h-2 bg-indigo-400 rounded-full">
                  <div
                    className="h-2 bg-white rounded-full"
                    style={{ width: `${completionRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white shadow-md rounded-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Weekly Activity</h3>
                <span className="px-2 py-1 text-sm bg-gray-100 rounded-full">
                  {completedTasks} Tasks
                </span>
              </div>
              <div className="h-32 mt-4">
                <div className="w-full h-full bg-gray-100 rounded-lg"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {calendarDays.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Mentors Section */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-indigo-700">Your Mentors</h2>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              {mentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex items-center justify-between p-4 transition-shadow bg-white shadow rounded-2xl hover:shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{mentor.name}</h3>
                      <p className="text-xs text-gray-500">{mentor.role}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{mentor.tasks} Tasks</span>
                        <span>★ {mentor.rating}</span>
                        <span>({mentor.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      mentor.followed
                        ? 'bg-gray-200 text-gray-600'
                        : 'bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {mentor.followed ? 'Following' : 'Follow'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Projects Section */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-indigo-700">Upcoming Projects</h2>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="overflow-hidden transition-shadow bg-white shadow rounded-2xl hover:shadow-lg"
                >
                  <img src={task.image} alt={task.title} className="w-full h-40" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{task.title}</h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{task.daysLeft} days left</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
