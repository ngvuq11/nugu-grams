import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function Home(props) {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/posts" element={<PostPage />} />
    </Routes>
  );
}

export default Home;
