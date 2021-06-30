import React, { useState, useEffect } from 'react'


export default props => {

    const [tarefas, setTarefas] = useState([])
    const [text, setText] = useState("")

    function addTarefa(tarefa){
        const tarefasCopy = Array.from(tarefas) 
        const novaTarefa = {id: tarefas.length, nome: tarefa, concluida: false}
        tarefasCopy.push(novaTarefa)
        setTarefas(tarefasCopy)
        console.log(tarefas)
        setText("")
    }


    function concluirTarefa(tarefa,index) {
        const tarefasCopy = Array.from(tarefas)
        tarefa.concluida === false ?
            tarefasCopy.splice(index, 1, {...tarefa,concluida:true}) :
            tarefasCopy.splice(index, 1, {...tarefa,concluida:false})
        setTarefas(tarefasCopy)
  
    }

    function removerTarefa(tarefa, index) {
        const tarefasCopy = Array.from(tarefas)
        tarefasCopy.splice(index, 1)
        setTarefas(tarefasCopy)
    }

    

    const listTarefas = tarefas.map((tarefa, index)=>{
        return (
            <li key={tarefa.id} className={tarefa.concluida === true ? "concluida" : ""}>
                <i className="far fa-check-circle"
                    onClick={() => concluirTarefa(tarefa,index)}></i> <span>{tarefa.nome}</span>
                <i className="far fa-trash-alt trash"
                    style={{display: tarefa.concluida === true ?"block" : "none"}}
                    onClick={() => removerTarefa(index)}></i>
            </li>
        )
    })




    return (
        <div className="todo-container">
            <h1>To-do</h1>
            <div className="header">

                <div className="input">
                    <input type="text" placeholder="Sua tarefa aqui..."
                        value={text} onChange={e => setText(e.target.value)} />
                </div>
                
                <div className="ButtonAdd" onClick={() => addTarefa(text)}>
                    <i className="fas fa-plus"></i>
                </div>

            </div>

           <div className="content">
                <ul>{listTarefas}</ul>
           </div>


        </div>
    )
}