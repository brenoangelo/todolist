import React, { useState } from 'react'

export default props => {

    const [text, setText] = useState("")

    return (
        <>
            <div className="input">
                <input type="text" placeholder="Sua tarefa aqui..."
                    value={text} onChange={e => setText(e.target.value)} />
            </div>
            
            <div className="ButtonAdd" onClick={() => props.addTarefa(text)}>
                <i className="fas fa-plus"></i>
            </div>
        </>
    )
}