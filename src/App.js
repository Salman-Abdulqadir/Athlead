import React from "react";

// importing pages and components
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import Athlete from "./pages/Athlete";
import Racer from "./pages/racer";
import GoodTimes from "./pages/goodtimes";

//import touter
import { Routes, Route, useLocation } from "react-router-dom";

// importing global styles
import GlobalStyle from "./components/GlobalStyle";

//animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<AboutUs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/work" element={<OurWork />}></Route>
          <Route path="/work/athlete" element={<Athlete />}></Route>
          <Route path="/work/racer" element={<Racer />}></Route>
          <Route path="/work/good-times" element={<GoodTimes />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
