import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Changed BrowserRouter to HashRouter to work with github pages
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/details/:id" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<PokemonList />} />
      </Routes>
      <About />
      <Footer />
    </div>
  );
}

export default App;
