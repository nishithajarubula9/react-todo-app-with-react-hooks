import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo, text, todos, setTodos, filteredTodos  }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map(todo => (
                <Todo 
                setTodos={setTodos}
                todos={todos}
                todo={todo}
                key={todo.id} 
                text={todo.text}
                 />
                
            ))}
            </ul>

        </div>
    )
}


export default TodoList;
// React is smart at only rendering out only the necessary things that it needs to render out
// so in this case we have a list of todo's so if we want to delete something react doesnot exactly know how to re-render the list, so by giving it an id  or a unique key to it
 // it knows exactly what to remove and what to keep. so everytime you are gonna have a list of something in react you are gonna add special key to it thats why we did the id thing.
  
