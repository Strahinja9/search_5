import AllVideos from "./Components/AllVideos.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home.jsx";
import Video from "./Components/Video.jsx";

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/1" element={<Home />} />
                <Route path="/video/:id" element={<Video />} />
            </Routes>

        </BrowserRouter>
    </>
  )
}

export default App
