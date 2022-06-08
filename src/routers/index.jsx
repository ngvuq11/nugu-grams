import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../features/Auth";
import Earth from "../features/Earth";
import Home from "../features/Home";
import HomePage from "../features/Home/pages/HomePage";

function Routers(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/hihi" element={<Earth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
