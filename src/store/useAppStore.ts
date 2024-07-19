import { create } from "zustand";

interface ModalState {
  open: boolean;
  content?: () => React.ReactNode;
};

interface DataState {
  modal: ModalState;
  openModal: (data: ModalState) => void;
  isLogin: boolean;
  setIsLogin: (data: boolean) => void;
};

const defaultModalState: ModalState = {
  open: false,
  content: () => "",
};

const useAppStore = create<DataState>()((set) => ({
  modal: defaultModalState,
  openModal: (data) => set({ modal: data }),
  isLogin: false,
  setIsLogin: (data) => set({ isLogin: data }),
}));

export default useAppStore;