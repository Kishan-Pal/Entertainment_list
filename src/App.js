import Header from "./Header";
import Nav from "./Nav";
import Anime from "./Anime";
import Movies from "./Movies";
import WebSeries from "./WebSeries";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header content="Entertainment List" />
      <Nav />
      <Routes>
        <Route path="" Component="" />
        <Route path="/anime" element={<Anime />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/web-series" element={<WebSeries />} />
        <Route path="*" Component={Missing} />
      </Routes>
    </div>
  );
}

export default App;
