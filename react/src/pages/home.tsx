import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HouseList from "../components/HouseList";
import SearchBarHome from "../components/SearchbarHome";
import { House } from "../types";

interface FormState {
  houses: House;
}

export default function Home() {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-col items-center">
        <h2 className="text-5xl text-indigo-900 font-extrabold mt-28">
          Alquiler de pisos, compra y venta
        </h2>
        <p className="text-gray-700 font-bold text-lg mt-10">
          aquí es donde puedes encontrar un lugar de ensueño para ti a precios
          asequibles.
        </p>
      </div>
      <SearchBarHome />
    </div>
  );
}
