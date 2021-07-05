import React from 'react'

export default function BodyTodo(props){
    return (
        <div className="todo-container">
            <h1>To-do</h1>
            {props.children}
        </div>
    )
}