import React, {useState} from 'react';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Do Cleanup",
    },
    {
      text: "Master React"
    },
    {
      text: "Finish React Freshup Course"
    }
  ]);
  
  function removeTodo(id){
    const newTodos = [...todos].filter((todo, innerId) => {
      return innerId !== id;
    });
    setTodos(newTodos);
  }
  
  if (todos.length === 0){
    return (
      <p className="text-center">No todos here!</p>
    );
  } else {
    return(
      <div className="container mx-auto">
        <h1 className="text-4xl text-center">My Todos</h1>
        <hr className="block max-w-sm mx-auto m-2 border-2 border-gray-400" />
        {todos.map((todo, id) => {
          return <Todo text={todo.text} id={id} key={id} removeHandler={removeTodo} />
        })}
      </div>
    );
  }
  
};

export default App;