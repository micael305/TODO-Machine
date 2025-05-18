function TodoCounter({completed, total }) { 
  return (
    <h1>
      Haz completado {completed} de {total} TODOs
    </h1>
  );
}

export {TodoCounter}; //Exportar un objeto que dentro tenga el componente a exportar