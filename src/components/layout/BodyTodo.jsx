import react from 'react'
import ButtonAdd from './ButtonAdd'
import Content from './Content'
export default props => (
    <div className="todo-container">
        <div className="header">
            <h1>To-do</h1>
            <ButtonAdd />
        </div>
        
        <Content />

    </div>
)