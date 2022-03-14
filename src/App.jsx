import { useState } from "react";
import { Characters } from "./pages/Characters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Characters />
    </main>
  );
}

export default App;
