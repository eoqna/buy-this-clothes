import { BrowserRouter } from "react-router-dom";
import Navigations from "./navigation/Navigations";
import useAppStore from "./store/useAppStore";
import Modal from "./components/Modal";

const App = () => {
  const { modal } = useAppStore();
  
  return (
    <BrowserRouter>
      {modal.open && <Modal />}
      <Navigations />
    </BrowserRouter>
  );
};

export default App;
