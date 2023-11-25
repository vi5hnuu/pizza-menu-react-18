import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { pizzaList } from "./data/data";

function App() {
  return (
    <>
      <header
        className="text-warm-gold lg:text-6xl md:text-4xl 
      text-3xl
      uppercase text-center"
      >
        - Fast react pizza co. -
      </header>
      <Menu pizzas={pizzaList} />
      <footer className="text-center mt-16 flex flex-col justify-center items-center gap-4">
        <p>We're open untill 22:00. Come visit us or order online.</p>
        <button className="bg-warm-gold rounded-md px-4 py-2 hover:scale-[1.01] hover:-translate-y-0.5 transition-all">
          Order Now
        </button>
      </footer>
    </>
  );
}

export default App;
