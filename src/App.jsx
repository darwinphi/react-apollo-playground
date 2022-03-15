import { Characters } from "./pages/Characters";
import { Character } from "./pages/Character";
import { Search } from "./pages/Search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </main>
  );
}

export default App;
