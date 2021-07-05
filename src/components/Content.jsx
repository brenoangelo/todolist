import React from 'react'

export default (props) => {

    props.listaTarefas.sort((a,b)=>{
        
        if(a.id < b.id){
            return 1
        }

        if(a.id > b.id){
            return -1
        }
    })


    const listaTarefas = props.listaTarefas.map((tarefa, index) => {
        return (
            <li key={tarefa.id} 
                className={tarefa.concluida === true ? "concluida" : ""}>

                <i className="far fa-check-circle"
                    onClick={() => props.concluirTarefa(tarefa, index)}></i> 
                    <span>{tarefa.nome}</span>
                <i className="far fa-trash-alt trash"
                    style={{ display: tarefa.concluida === true ? "block" : "none" }}
                    onClick={() => props.removerTarefa(tarefa.id)}></i>

            </li>
        )
    })
    
    return (
        <div className="content">

            <ul>
                {listaTarefas}
            </ul>

        </div>
    )
}