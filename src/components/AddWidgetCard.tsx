import { useUIStore } from "../store/uiStore";

const AddWidgetCard = ({ category }: { category: string }) => {
  const openPanel = useUIStore((s) => s.openPanel);

  return (
    <div
      onClick={() => openPanel(category)}
      className="bg-white border border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center min-h-[180px] cursor-pointer hover:bg-gray-50"
    >
      <button className="text-blue-600 font-medium flex items-center gap-1">
        <span className="text-xl">＋</span>
        Add Widget
      </button>
    </div>
  );
};

export default AddWidgetCard;
