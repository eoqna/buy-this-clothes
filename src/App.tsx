import { BrowserRouter } from "react-router-dom";
import Navigations from "./navigation/Navigations";

const App = () => {
  return (
    <BrowserRouter>
      <Navigations />
    </BrowserRouter>
  );
};

export default App;
