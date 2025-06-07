import { useWidgetStore } from "../store/widgetStore";
import { widgetConfig } from "../data/widgetConfig";

import CloudRiskWidget from "./CloudRiskWidget";
import HorizontalBarWidget from "./HorizontalBarWidget";
import NoDataWidget from "./NoDataWidget";
import AddWidgetCard from "./AddWidgetCard";
import { Clock, EllipsisVertical, RefreshCcw } from "lucide-react";
import { useUIStore } from "../store/uiStore";

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
  const openPanel = useUIStore((state) => state.openPanel);

const grouped = widgets.reduce((acc, widget) => {
  const config = widgetConfig[widget.type];
  const category = config?.category ?? widget.category;

  if (!acc[category]) acc[category] = [];
  acc[category].push(widget);
  return acc;
}, {} as Record<string, typeof widgets>);



  return (
    <div className="mt-5">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold">CNAPP Dashboard</h1>

        <div className="flex items-center gap-2">
          <button
            onClick={() => openPanel("CSPM Executive Dashboard")}
            className="flex items-center gap-4 border text-neutral-500 border-gray-300 px-3 py-1 rounded-md text-sm bg-white hover:bg-gray-50"
          >
            Add Widget <span className="text-lg">+</span>
          </button>

          <button className="px-1 py-1 text-neutral-500 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <RefreshCcw />
          </button>

          <button className="p-1 text-neutral-500 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <EllipsisVertical />
          </button>

          <button className="flex items-center gap-2 border border-blue-800 px-3 py-1 rounded-md text-sm text-blue-800 font-semibold bg-white hover:bg-blue-50">
            <Clock /> Last 2 days <span className="text-xs">▼</span>
          </button>
        </div>
      </div>
      <div className=" mt-2 space-y-1 bg-blue-50 px-5">
        {Object.entries(grouped).map(([category, widgets]) => (
          <div key={category} className="relative">
            <h2 className="text-sm font-semibold absolute z-10 -top-1 left-5">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {widgets.map((w) => getWidgetComponent(w.type, w.id))}
              <AddWidgetCard category={category} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
