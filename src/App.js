import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derviados', completed: true }
];

function App() { 
  const[todos, setTodos] = React.useState(defaultTodos);
  const[searchValue, setSearchValue] = React.useState('');

  //Estados derivados
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todos) => {
      const todoText = todos.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  console.log(searchValue);

  return ( 
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
         <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} 
          completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App; 
