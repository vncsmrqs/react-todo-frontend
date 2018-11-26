import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default class Todo extends Component {

    handleAdd() {
        console.log('ADD')
        return 0
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={ this.handleAdd }/>
                <TodoList />
            </div>
        )
    }
}
