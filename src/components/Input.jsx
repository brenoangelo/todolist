import React, { useState } from 'react'

export default function Input(props) {

    const [text, setText] = useState("")

    return (
        <>
            <div className="input">
                <input type="text" placeholder="Sua tarefa aqui..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                    maxLength={17}
                />

            </div>

            <div className="ButtonAdd"
                onClick={() => {
                    props.addTarefa(text)
                    setText("")
                }
                }>
                <i className="fas fa-plus"></i>
            </div>
        </>
    )

}