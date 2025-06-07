import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import WidgetSlideover from "./components/WidgetSlideover";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Dashboard />
      <WidgetSlideover />
    </div>
  );
}

export default App;
