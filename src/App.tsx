import { BrowserRouter } from "react-router-dom";
import Navigations from "./navigation/Navigations";
import useAppStore from "./store/useAppStore";
import Modal from "./components/Modal";
import Header from "./components/Header";

const App = () => {
  const { modal } = useAppStore();
  
  return (
    <BrowserRouter>
      <Header />
      {modal.open && <Modal />}
      <Navigations />
    </BrowserRouter>
  );
};

export default App;
