import { Characters } from "./pages/Characters";
import { Character } from "./pages/Character";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </main>
  );
}

export default App;
