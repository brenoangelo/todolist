import React from 'react'

export default function BodyTodo(props){
    return (
        <div className="todo-container">
            {props.children}
        </div>
    )
}