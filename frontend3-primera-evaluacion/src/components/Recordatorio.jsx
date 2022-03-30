import React from "react";

const Recordatorios = ({ seleccionPrevia, selecciones }) => {
  return (
    <div className="recordatorio">
      <h3>Selección anterior: {seleccionPrevia}</h3>
      <h4>Historial de opciones elegidas: </h4>
      <ul>
        {selecciones.map((opcion, i) => (
          <li key={i}>{opcion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recordatorios;