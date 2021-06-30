import React from 'react'

export default (props) => {


    return (
        <div className="content">

            <ul>
                {props.listaTarefas()}
            </ul>


        </div>
    )
}