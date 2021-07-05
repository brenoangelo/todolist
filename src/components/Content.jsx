import React from 'react'

export default function Content(props){

    function maisAtual(a, b){

        if (a.id < b.id) {
            return 1
        }

        if (a.id > b.id) {
            return -1
        }
    }

    let listaTarefas

    if(props.listaTarefas !== null && props.listaTarefas !== undefined){
        listaTarefas = props.listaTarefas
        
        listaTarefas.sort(maisAtual)
    }else{
        listaTarefas = []
    }

    const listaTarefasLI = listaTarefas.map((tarefa, index) => {
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
                {listaTarefasLI}
            </ul>

        </div>
    )
}