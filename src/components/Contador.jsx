import React from 'react'

export default function Contador(props){
    let tarefas = []
    if(props.tarefas !== null){
        tarefas = props.tarefas
    }

    let tarefasPendentes = tarefas.filter((tarefas)=>{
        return tarefas.concluida !== true
    })

    let tarefasFinalizadas = tarefas.filter((tarefas)=>{
        return tarefas.concluida == true
    })


    let quantPend = tarefasPendentes.length
    let quantFin = tarefasFinalizadas.length
    return(
        <div className="painel_contador">
            <h3>{quantPend} tarefas pendentes</h3>
            <h3>{quantFin} tarefas finalizadas</h3>  
        </div>
    )
}