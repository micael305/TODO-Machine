import './TodoCounter.css';

function TodoCounter({completed, total }) { 
  return ( //h1 puede tener un style que recibe un objeto con los estilos
    <h1> 
      Haz completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export {TodoCounter}; 