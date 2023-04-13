import { useState } from "react";
import "./App.scss";
import { Header } from "./components";
import ProgressBarList from "./components/ProgressBarList";

function App() {
  const [progressBars] = useState<{ name: string; defaultValue: number }[]>([
    { name: "Progress1", defaultValue: 50 },
    { name: "Progress2", defaultValue: 80 },
    { name: "Progress3", defaultValue: 10 },
  ]);
  return (
    <div className="App">
      <Header />
      <ProgressBarList progressBars={progressBars} />
    </div>
  );
}

export default App;
