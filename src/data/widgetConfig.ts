export type WidgetConfigType = "chart" | "nodata" | "bar";

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface BaseWidgetConfig {
  title: string;
  category: string;
  type: WidgetConfigType;
}

interface ChartWidgetConfig extends BaseWidgetConfig {
  type: "chart";
  total: number;
  data: ChartData[];
}

interface NoDataWidgetConfig extends BaseWidgetConfig {
  type: "nodata";
  message: string;
}

interface BarWidgetConfig extends BaseWidgetConfig {
  type: "bar";
  total: number;
  unitLabel: string;
  data: ChartData[];
}

export type WidgetConfig =
  | ChartWidgetConfig
  | NoDataWidgetConfig
  | BarWidgetConfig;

export const widgetConfig: Record<string, WidgetConfig> = {
  cloudAccounts: {
    title: "Cloud Accounts",
    category: "CSPM Executive Dashboard",
    type: "chart",
    total: 2,
    data: [
      { name: "Connected", value: 2, color: "#5c7cfa" },
      { name: "Not Connected", value: 2, color: "#ced4da" },
    ],
  },
  cloudRisk: {
    title: "Cloud Account Risk Assessment",
    category: "CSPM Executive Dashboard",
    type: "chart",
    total: 9659,
    data: [
      { name: "Failed", value: 1689, color: "#C92C2C" },
      { name: "Warning", value: 681, color: "#FFD43B" },
      { name: "Not available", value: 36, color: "#D3D3E2" },
      { name: "Passed", value: 7253, color: "#2F9E44" },
    ],
  },
  namespaceAlerts: {
    title: "Top 5 Namespace Specific Alerts",
    category: "CWPP Dashboard",
    type: "nodata",
    message: "No Graph data available!",
  },
  workloadAlerts: {
    title: "Workload Alerts",
    category: "CWPP Dashboard",
    type: "nodata",
    message: "No Graph data available!",
  },
  imageRisk: {
    title: "Image Risk Assessment",
    category: "Registry Scan",
    type: "bar",
    total: 1470,
    unitLabel: "Total Vulnerabilities",
    data: [
      { name: "Critical", value: 9, color: "#C92C2C" },
      { name: "High", value: 150, color: "#e03131" },
      { name: "Medium", value: 500, color: "#fab005" },
      { name: "Low", value: 811, color: "#ffe066" },
    ],
  },
  imageSecurity: {
    title: "Image Security Issues",
    category: "Registry Scan",
    type: "bar",
    total: 2,
    unitLabel: "Total Images",
    data: [
      { name: "Critical", value: 2, color: "#7f1d1d" },
      { name: "High", value: 2, color: "#dc2626" },
      { name: "Medium", value: 1, color: "#f97316" },
      { name: "Low", value: 1, color: "#facc15" },
      { name: "Unknown", value: 1, color: "#9ca3af" },
    ],
  },
};
