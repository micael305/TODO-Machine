import './TodoCounter.css';

function TodoCounter({completed, total }) { 
  return ( 
    completed === total ?
      <h1 className='TodoCounter'>Has completado todos tus TODOs 🥳</h1> 
    :
    <h1 className='TodoCounter'> 
      Haz completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export {TodoCounter}; 