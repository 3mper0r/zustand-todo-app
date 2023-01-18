import React from 'react';
import useTodoStore from '../store/store';
import {FcFullTrash, FcCheckmark} from 'react-icons/all'

const AddTodoForm = () => {

    const todoList = useTodoStore((state) => state.todos)
    const addTodo = useTodoStore((state) => state.addTodo)
    const removeTodo = useTodoStore((state) => state.removeTodo)
    const toggleComplete = useTodoStore((state) => state.toggleComplete)
    
    function handleSubmit(e) {
        e.preventDefault()
        addTodo(e.target.title.value)
        e.target.reset()
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" required minLength={2}/>
            <button>Add Todo</button>
        </form>
        <ul className='todos-list'>
            {
            todoList.map((todo, i) => 
                <li className={`${todo.completed ? "strikethrough" : ""}`} key={i} onClickCapture={(e) => toggleComplete(todo.id)}>{todo.title} 
                    <FcCheckmark onAuxClick={(e) => toggleComplete(todo.id)}></FcCheckmark>
                    <FcFullTrash onClick={(e) => removeTodo(todo.id)}></FcFullTrash>
                </li>
            )    
            }
        </ul>
    </>
}

export default AddTodoForm
