import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/Home";

function Routers(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
