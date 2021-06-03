import React from 'react'

import BodyTodo from './components/layout/BodyTodo'
import Menu from './components/layout/Menu'
export default () => (
    <div className="app">

        <header>
            <div className="container">
                <Menu />
            </div>   
        </header>
 
        <div className="container">
            <BodyTodo>
                <h1>Preciso fazer...</h1>
            </BodyTodo>
        </div>
        
    </div>
)