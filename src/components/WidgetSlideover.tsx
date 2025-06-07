import { widgetConfig } from "../data/widgetConfig";
import { useUIStore } from "../store/uiStore";
import { useWidgetStore } from "../store/widgetStore";
import clsx from "clsx";
import { useState } from "react";

const categories = ["CSPM", "CWPP", "Registry Scan"];


const WidgetSlideover = () => {
  const {
    open,
    selectedCategory,
    closePanel,
    reset,
    setCategory,
  } = useUIStore();

  const addWidget = useWidgetStore((s) => s.addWidget);

  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

const handleConfirm = () => {
  if (!title || !info || !selectedCategory) return;

  const newType = `${title.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;

  const categoryMap: Record<string, string> = {
    CSPM: "CSPM Executive Dashboard",
    CWPP: "CWPP Dashboard",
    "Registry Scan": "Registry Scan",
  };

  const mappedCategory = categoryMap[selectedCategory];

  addWidget(newType, mappedCategory);

  widgetConfig[newType] = {
    title,
    category: mappedCategory,
    type: "nodata",
    message: info,
  };

  reset();
  setTitle("");
  setInfo("");
};


  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex",
        open ? "visible" : "invisible pointer-events-none"
      )}
    >
      <div
        className={clsx(
          "fixed inset-0 transition-opacity duration-300",
          open ? "bg-opacity-30" : "bg-transparent"
        )}
        onClick={closePanel}
      />

      <div
        className={clsx(
          "ml-auto bg-white w-full max-w-md h-full shadow-xl z-50 flex flex-col transform transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="px-5 py-2 bg-blue-950 text-white border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Add Widget</h2>
          <button onClick={closePanel} className="text-xl font-bold">
            ×
          </button>
        </div>

        <div className="p-4 flex flex-col h-full">
          <p className="text-sm text-gray-500 mb-3">
            Personalize your dashboard by adding a custom widget
          </p>

          <div className="flex gap-4 border-b mb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
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

          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            <input
              type="text"
              placeholder="Widget Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="p-4 mt-auto flex justify-end gap-2">
            <button
              onClick={reset}
              className="border px-4 py-1 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="bg-blue-950 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetSlideover;
