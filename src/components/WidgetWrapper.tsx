import { useWidgetStore } from "../store/widgetStore"

const WidgetWrapper = ({ id, title, children }: { id: number, title: string, children: React.ReactNode }) => {
  const removeWidget = useWidgetStore((state) => state.removeWidget)

  return (
      <div className="bg-white p-4 border border-violet-50 border-20 rounded-xl relative w-full min-h-[230px]">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
          onClick={() => removeWidget(id)}
        >
          ✕
        </button>
        <h3 className="font-semibold text-lg">{title}</h3>
        {children}
      </div>
  )
}

export default WidgetWrapper
