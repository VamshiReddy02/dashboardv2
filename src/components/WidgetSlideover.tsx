import { useUIStore } from "../store/uiStore";
import { widgetConfig } from "../data/widgetConfig";
import { useWidgetStore } from "../store/widgetStore";
import clsx from "clsx";

const categories = ["CSPM", "CWPP", "Registry Scan"];

const WidgetSlideover = () => {
  const {
    open,
    selectedCategory,
    selectedWidgets,
    toggleWidget,
    closePanel,
    reset,
  } = useUIStore();

  const addWidget = useWidgetStore((s) => s.addWidget);

  const handleConfirm = () => {
    selectedWidgets.forEach((type) => {
      const config = widgetConfig[type];
      if (config) {
        addWidget(type, config.category);
      }
    });
    reset();
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex",
        open ? "visible" : "invisible pointer-events-none"
      )}
    >
      {/* Background overlay */}
      <div
        className={clsx(
          "fixed inset-0 transition-opacity duration-300",
          open ? "bg-opacity-30" : "bg-transparent"
        )}
        onClick={closePanel}
      />

      {/* Slide panel */}
      <div
        className={clsx(
          "ml-auto bg-white w-full max-w-md h-full shadow-xl z-50 flex flex-col transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-semibold text-lg">Add Widget</h2>
          <button onClick={closePanel} className="text-xl font-bold">
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-3">
            Personalize your dashboard by adding the following widget
          </p>

          {/* Tabs */}
          <div className="flex gap-4 border-b mb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={clsx(
                  "pb-2",
                  cat === selectedCategory
                    ? "border-b-2 border-blue-600 font-medium text-blue-700"
                    : "text-gray-400"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Widget list */}
          <div className="space-y-2 max-h-[60vh] overflow-y-auto">
            {Object.entries(widgetConfig)
              .filter(([_, cfg]) => cfg.category === selectedCategory)
              .map(([key, cfg]) => (
                <label
                  key={key}
                  className="flex items-center gap-3 p-2 border rounded cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedWidgets.includes(key as any)}
                    onChange={() => toggleWidget(key as any)}
                  />
                  <span>{cfg.title}</span>
                </label>
              ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 mt-auto flex justify-end gap-2 border-t">
          <button
            onClick={reset}
            className="border px-4 py-1 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetSlideover;
