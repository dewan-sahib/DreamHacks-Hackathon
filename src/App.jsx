import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './Sections/Nav';    // your navbar
import Hero from "./Sections/Hero";
import Boxes from "./Sections/Boxes";
import About from "./Sections/About";
import Call from "./Sections/Call";
import ChatBox from "./Sections/chatbox"; // your chatbox

function Home() {
  return (
    <div className="app-sections">
      <Hero />
      <Boxes />
      <Call />
      <About />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Nav />  {/* navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    </Router>
  );
}

export default App;
