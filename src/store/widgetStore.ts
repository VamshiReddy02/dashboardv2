import { create } from "zustand";

export type WidgetType =
  | "cloudAccounts"
  | "cloudRisk"
  | "namespaceAlerts"
  | "workloadAlerts"
  | "imageRisk"
  | "imageSecurity"
  | (string & {}); 

export interface Widget {
  id: number;
  type: WidgetType;
  category: string;
}

interface WidgetStore {
  widgets: Widget[];
  addWidget: (type: WidgetType, category: string) => void;
  removeWidget: (id: number) => void;
}

let idCounter = 7;

export const useWidgetStore = create<WidgetStore>((set) => ({
  widgets: [
    { id: 1, type: "cloudAccounts", category: "CSPM Executive Dashboard" },
    { id: 2, type: "cloudRisk", category: "CSPM Executive Dashboard" },
    { id: 3, type: "namespaceAlerts", category: "CWPP Dashboard" },
    { id: 4, type: "workloadAlerts", category: "CWPP Dashboard" },
    { id: 5, type: "imageRisk", category: "Registry Scan" },
    { id: 6, type: "imageSecurity", category: "Registry Scan" },
  ],
  addWidget: (type: WidgetType, category: string) =>
    set((state) => ({
      widgets: [...state.widgets, { id: idCounter++, type, category }],
    })),
  removeWidget: (id: number) =>
    set((state) => ({
      widgets: state.widgets.filter((w) => w.id !== id),
    })),
}));
