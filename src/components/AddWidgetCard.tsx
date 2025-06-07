import { useUIStore } from "../store/uiStore";

const AddWidgetCard = ({ category }: { category: string }) => {
  const openPanel = useUIStore((s) => s.openPanel);

  return (
    <div
      onClick={() => openPanel(category)}
      className="bg-white border border-20 border-violet-50 rounded-xl p-4 flex items-center justify-center min-h-[180px] cursor-pointer hover:bg-gray-50"
    >
      <button className="px-2 py-1 text-neutral-400 border border-gray-300 rounded-md flex items-center gap-1">
        <span className="text-xl">＋</span>
        Add Widget
      </button>
    </div>
  );
};

export default AddWidgetCard;
