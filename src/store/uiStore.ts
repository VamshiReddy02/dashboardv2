import { create } from "zustand";
import type { WidgetType } from "./widgetStore";

interface UIState {
  open: boolean;
  selectedCategory: string | null;
  selectedWidgets: WidgetType[];
  openPanel: (category: string) => void;
  closePanel: () => void;
  toggleWidget: (type: WidgetType) => void;
  reset: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  open: false,
  selectedCategory: null,
  selectedWidgets: [],
  openPanel: (category) => set({ open: true, selectedCategory: category }),
  closePanel: () => set({ open: false }),
  toggleWidget: (type) =>
    set((state) => {
      const exists = state.selectedWidgets.includes(type);
      return {
        selectedWidgets: exists
          ? state.selectedWidgets.filter((t) => t !== type)
          : [...state.selectedWidgets, type],
      };
    }),
  reset: () => set({ open: false, selectedCategory: null, selectedWidgets: [] }),
}));
