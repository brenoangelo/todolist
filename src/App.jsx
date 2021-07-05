import React, { useState, useEffect } from 'react'

import Content from './components/Content'
import Input from './components/Input'
import BodyTodo from './components/layout/BodyTodo'

export default () => {

    const [tarefas, setTarefas] = useState([])
    let tarefasCopy = Array.from(tarefas)
    useEffect(() => {
        const tarefaString = localStorage.getItem('tarefas')
        if (tarefaString !== undefined) {
            setTarefas(JSON.parse(tarefaString))
        }
    }, [])

    function addTarefa(tarefa) {
        
        if (tarefa == "") {
            alert('Informe sua tarefa :)')
            return false
        }
        const novaTarefa = { id: new Date().getTime(), nome: tarefa, concluida: false }
        tarefasCopy.push(novaTarefa)
        localStorage.setItem('tarefas', JSON.stringify(tarefasCopy))
        setTarefas(tarefasCopy)

    }

    function concluirTarefa(tarefa, index) {
        const tarefasCopy = Array.from(tarefas)
        tarefa.concluida === false ?
            tarefasCopy.splice(index, 1, { ...tarefa, concluida: true }) :
            tarefasCopy.splice(index, 1, { ...tarefa, concluida: false })
        localStorage.setItem('tarefas', JSON.stringify(tarefasCopy))
        setTarefas(tarefasCopy)

    }

    function removerTarefa(id) {
        const tarefasCopy = Array.from(tarefas)
        const tarefasFilt = tarefasCopy.filter((el) => {
            return el.id !== id
        })
        localStorage.setItem('tarefas', JSON.stringify(tarefasFilt))
        setTarefas(tarefasFilt)
    }


    return (
        <div className="app">
 
            <div className="container">
                <BodyTodo>
                    <div className="header">
                        <Input addTarefa={addTarefa}/>
                    </div>

                    <Content listaTarefas={tarefas} 
                        removerTarefa={removerTarefa} 
                        concluirTarefa={concluirTarefa}
                    />
                </BodyTodo>
            </div>
        
        </div>
    )
}
