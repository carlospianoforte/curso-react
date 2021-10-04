import React from 'react';
import "./styles/TodoItem.css"
//import campana from "./images/campana.png"
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {
 
     
  return (
    <li className="TodoItem">
      

      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

          
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
       
        
      
    </li>
  );
}

export { TodoItem };