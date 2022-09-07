import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import {Home} from "./component/Home.js";
import {ShoppingPage} from "./component/ShoppingPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route  index element={<Home />} />
        <Route path="component/ShoppingPage" element={<ShoppingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;