function TodoList(props) { 
  return (
    <ul>
      {props.children} 
      {/* props.children: React convierte todo lo que esta dentro de nuesto componente
      en la propiedad children */}
    </ul>
  );
}

export {TodoList}; //Exportar un objeto que dentro tenga el componente a exportar