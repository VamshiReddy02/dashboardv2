import { useWidgetStore } from "../store/widgetStore";
import { widgetConfig } from "../data/widgetConfig";

import CloudRiskWidget from "./CloudRiskWidget";
import HorizontalBarWidget from "./HorizontalBarWidget";
import NoDataWidget from "./NoDataWidget";
import AddWidgetCard from "./AddWidgetCard";

const getWidgetComponent = (type: string, id: number) => {
  const config = widgetConfig[type];

  if (!config) return null;

  switch (config.type) {
    case "chart":
      return (
        <CloudRiskWidget
          key={id}
          id={id}
          title={config.title}
          data={config.data}
        />
      );
    case "bar":
      return (
        <HorizontalBarWidget
          key={id}
          id={id}
          title={config.title}
          total={config.total}
          data={config.data}
          unitLabel={config.unitLabel}
        />
      );
    case "nodata":
      return (
        <NoDataWidget
          key={id}
          id={id}
          title={config.title}
          message={config.message}
        />
      );
    default:
      return null;
  }
};

const Dashboard = () => {
  const widgets = useWidgetStore((state) => state.widgets);

  // Group widgets by their category
  const grouped = widgets.reduce((acc, widget) => {
    const config = widgetConfig[widget.type];
    const cat = config.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(widget);
    return acc;
  }, {} as Record<string, typeof widgets>);

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([category, widgets]) => (
        <div key={category}>
          <h2 className="text-lg font-semibold mb-3">{category}</h2>
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
