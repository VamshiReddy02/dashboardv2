import Dashboard from "./components/Dashboard";
import WidgetSlideover from "./components/WidgetSlideover";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 text-xl font-bold">
        CNAPP Dashboard
      </header>
      <Dashboard />
      <WidgetSlideover />
    </div>
  );
}

export default App;
