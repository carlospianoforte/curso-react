import React from "react";
import {TodoCounter} from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import todo from "./images/todo.png"
import "./styles/App.css"


function AppUI({

    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

}) 

{
    return(

        <>
    
    <div className="App">
      <img className="App-image" src={todo} alt="logo" />
    
    <TodoCounter 
      total={totalTodos}
      completed={completedTodos}

    
    />
    
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    
    /> 

   <TodoList>
      {searchedTodos.map(todo=>(
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}

        />
      ))}
    </TodoList> 

    <CreateTodoButton />
    </div>
    
    </>


    )
}

export {AppUI}