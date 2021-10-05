import React from "react";
import { TodoIcon } from "./TodoIcon";



function CompleteIcon (props){

    const {completed, completeTodo} = props

    const onComplete = ()=>{
        completeTodo()
    }
    
    return(
        <TodoIcon
            type="check"
            color={completed? '#4caf50':'gray'}
            onClick={onComplete}
        />
    )
}

export {CompleteIcon}