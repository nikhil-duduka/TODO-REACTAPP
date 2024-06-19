// todos = [{
//     title : "smtg" , description : smtg , completed false 
// }]


import React from 'react';

export const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <p>{todo.completed == true ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
};
