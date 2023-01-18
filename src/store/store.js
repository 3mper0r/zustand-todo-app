import create from 'zustand'
import 'array.prototype.move'

const useTodoStore = create((set, get) => ({
    todos: [],
    addTodo: (title) => {
        const todo = {
            id: Math.ceil(Math.random() * 1000),
            title,
            completed: false
        }

        set({ todos: [todo, ...get().todos] })
    },
    removeTodo: (todoId) => {
        const filtered = get().todos.filter((newtodo) => newtodo.id !== todoId)
        set({ todos: filtered})
    },
    toggleComplete: (todoId) => {
        const todosCopy = JSON.parse(JSON.stringify(get().todos))
        const filtered = todosCopy.find(todo => todo.id === todoId)
        filtered.completed = !filtered.completed
        if (filtered.completed) {

            //todosCopy.push(todosCopy.shift())
            todosCopy.move(0, -1)
            
        }
        set({ todos: todosCopy})
    }
}))

export default useTodoStore