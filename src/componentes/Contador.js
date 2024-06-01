import React from "react"; // Importa la biblioteca React

// Importa el archivo de estilos para el componente Contador desde la ruta '../hojas-de-estilo/Contador.css'
import "../hojas-de-estilo/Contador.css";

// Define el componente Contador que recibe la prop numClics
function Contador({ numClics }) {
  return (
    <div className="contador">
      {" "}
      {/* Crea un div con la clase 'contador' */}
      {numClics} {/* Muestra el número de clics pasado como prop */}
    </div>
  );
}

export default Contador; // Exporta el componente Contador como el componente predeterminado de este módulo
