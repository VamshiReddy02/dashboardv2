import { useWidgetStore } from "../store/widgetStore"

const AddWidgetMenu = () => {
  const addWidget = useWidgetStore((state) => state.addWidget)

  return (
    <div className="flex gap-2 flex-wrap p-4">
      <button onClick={() => addWidget("cloudAccounts", "CSPM Executive Dashboard")} className="bg-blue-600 text-white px-3 py-1 rounded">
        + Cloud Accounts
      </button>
      <button onClick={() => addWidget("cloudRisk", "CSPM Executive Dashboard")} className="bg-blue-600 text-white px-3 py-1 rounded">
        + Cloud Risk
      </button>
      <button onClick={() => addWidget("namespaceAlerts", "CWPP Dashboard")} className="bg-blue-600 text-white px-3 py-1 rounded">
        + Namespace Alerts
      </button>
      <button onClick={() => addWidget("imageRisk", "Registry Scan")} className="bg-blue-600 text-white px-3 py-1 rounded">
        + Image Risk
      </button>
    </div>
  )
}

export default AddWidgetMenu
