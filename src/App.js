import Header from "./Header";
import Nav from "./Nav";
import Anime from "./Anime";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header content="Entertainment List" />
      <Nav />
      <Routes>
        <Route path="" component="" />
        <Route path="/anime" element={<Anime />} />
      </Routes>
    </div>
  );
}

export default App;
