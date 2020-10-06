import React from 'react';


  const Todo =({text, todos, todo, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // filtering the state out and trying to find the element to whatever it matches that we clicked on and if it matches it gets rid of it


    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){//if the clicked id is same as the state id then return an object with whatever  property item have and modify the completed property
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;// if the condition is not matched then return whatever it was before
            })
        );
    };
    // if(el.id == todo.id) then its going to get rid of the todo
   console.log(todo.completed)
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler}  className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
             
            
        </div>
    );

}

export default Todo;
// to delete
//we need to add an event 