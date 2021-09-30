import React from "react";
import {TodoCounter} from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import todo from "./images/todo.png"
import "./styles/App.css"


function AppUI() {

  const {
    error,
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);


  return(

      <>
      
      
        <img className="App-image" src={todo} alt="logo" />
      
      <TodoCounter/>
      
      <TodoSearch
      
      
      /> 

        <TodoList>

          {error&& <p>error</p>}
          {loading && <p>cargando...</p>}
          {(!loading && !searchedTodos.length ) && <p>crear primer Todo</p>}


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


        {!!openModal&&(
              <Modal>
                  <TodoForm/>
              </Modal>
        )}




      <CreateTodoButton
        setOpenModal={setOpenModal} 
      />
      
      
      </>


  )
}

export {AppUI}