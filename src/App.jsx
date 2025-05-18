import "./App.css";
import Hero from "./Sections/Hero";
import Boxes from "./Sections/Boxes";
import About from "./Sections/About";
import Call from "./Sections/Call";

function App() {
  return (
    <div className="app-sections">
      <Hero />
      <Boxes />
      <Call />
      <About />
    </div>
  );
}

export default App;
