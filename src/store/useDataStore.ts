import { create } from "zustand";

interface DataState {
  basket: Props.ClothInfo[];
  setBasket: (data: Props.ClothInfo[]) => void;
};

const useDataStore = create<DataState>()((set) => ({
  basket: [],
  setBasket: (data) => set({ basket: data }),
}));

export default useDataStore;