
import Sidebar from './Components/Sidebar'
import Settings from './Pages/Settings';
import Dashboard from './Pages/Home';

function App() {

  return (
    <> <div className="flex h-screen">
      <Sidebar/>
      <Settings/>
     
      </div>
      <Dashboard/>
      
    </>
  );
}

export default App
