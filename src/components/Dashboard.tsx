import { useWidgetStore } from "../store/widgetStore"
import { widgetConfig } from "../data/widgetConfig"
import CloudRiskWidget from "./CloudRiskWidget"
import NoDataWidget from "./NoDataWidget"
import AddWidgetCard from "./AddWidgetCard"

const getWidgetComponent = (type: string, id: number) => {
  const config = widgetConfig[type];
  if (!config) return null;

  if (config.type === "nodata") {
    return (
      <NoDataWidget key={id} id={id} title={config.title} message={config.message} />
    );
  }

  return (
    <CloudRiskWidget key={id} id={id} title={config.title} data={config.data} />
  );
};

const Dashboard = () => {
  const widgets = useWidgetStore((state) => state.widgets);

  const grouped = widgets.reduce((acc, widget) => {
    const config = widgetConfig[widget.type];
    const cat = config.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(widget);
    return acc;
  }, {} as Record<string, typeof widgets>);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">CNAPP Dashboard</h1>

      {Object.entries(grouped).map(([category, widgets]) => (
        <div key={category}>
          <h2 className="text-xl font-semibold mb-3">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {widgets.map((w) => getWidgetComponent(w.type, w.id))}
            <AddWidgetCard category={category} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
