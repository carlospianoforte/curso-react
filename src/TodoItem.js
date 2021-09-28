import React from 'react';
import "./styles/TodoItem.css"
//import campana from "./images/campana.png"
import x from "./images/x.png"

function TodoItem(props) {

 
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >
        v
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>

      
        {/* <img className="TodoItem-campana" src={campana} alt="alerta" /> */}
        <img 
          className="Icon Icon-delete TodoItem-campana" 
          src={x} 
          alt="alerta" 
          onClick={props.onDelete}
          />
        
      
    </li>
  );
}

export { TodoItem };