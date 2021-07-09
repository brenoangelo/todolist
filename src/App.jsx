import React, { useState, useEffect } from 'react'

import Contador from './components/Contador'
import Content from './components/Content'
import Input from './components/Input'
import BodyTodo from './components/layout/BodyTodo'


export default function App(){

    const [tarefas, setTarefas] = useState([])
    
    useEffect(() => {
        let tarefaString = localStorage.getItem('tarefas')
        if (tarefaString !== undefined && tarefaString !== null) {
            setTarefas(JSON.parse(tarefaString))
        }
    }, [])

    function addTarefa(tarefa) {
        let tarefasCopy
        if(tarefas !== null && tarefas !== undefined){
             tarefasCopy = Array.from(tarefas)
        }
        if (tarefa === "") {
            alert('Informe sua tarefa :)')
            return false
        }
        let novaTarefa = { id: new Date().getTime(), nome: tarefa, concluida: false }
        tarefasCopy.push(novaTarefa)
        localStorage.setItem('tarefas', JSON.stringify(tarefasCopy))
        setTarefas(tarefasCopy)

    }

    function concluirTarefa(tarefa, index) {
        let tarefasCopy = Array.from(tarefas)
        tarefa.concluida === false ?
            tarefasCopy.splice(index, 1, { ...tarefa, concluida: true }) :
            tarefasCopy.splice(index, 1, { ...tarefa, concluida: false })
        localStorage.setItem('tarefas', JSON.stringify(tarefasCopy))
        setTarefas(tarefasCopy)

    }

    function removerTarefa(id) {
        let tarefasCopy = Array.from(tarefas)
        let tarefasFilt = tarefasCopy.filter((el) => {
            return el.id !== id
        })
        localStorage.setItem('tarefas', JSON.stringify(tarefasFilt))
        setTarefas(tarefasFilt)
    }


    return (
        <div className="app">
 
            <div className="container">
                <BodyTodo>
                    <Contador tarefas={tarefas}/>
                </BodyTodo>
                
                <BodyTodo>
                    
                    <h1>To-do</h1>
                    
                    <div className="header">
                        <Input addTarefa={addTarefa}/>
                    </div>

                    <Content listaTarefas={tarefas} 
                        removerTarefa={removerTarefa} 
                        concluirTarefa={concluirTarefa}
                    />
                </BodyTodo>
            </div>


            <footer>
                <div class="container">
                    <h4>Desenvolvido por <a href="https://github.com/brenoangelo" 
                    target="_blank">
                        <i class="fab fa-github"></i> Breno Angelo</a>
                    </h4>
                </div>
            </footer>
        </div>
    )
}
