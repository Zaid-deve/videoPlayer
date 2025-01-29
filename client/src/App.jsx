import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Search from "./components/Search"
import Video from "./components/Video"
import Error from "./components/Error"
import Videos from "./components/Videos"


export default function App() {
  return (
    <div className="h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/video/:url/:direct?" element={<Video />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/error/:error" element={<Error />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  )
}