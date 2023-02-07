import { useState, useEffect, useRef } from 'react';

import { ITodo } from '../types/data';
import { TodoList } from './TodoList';

const App: React.FC = () => {
	const [value, setValue] = useState('')
	const [todos, setTodos] = useState<ITodo[]>([])

	const inputRef = useRef<HTMLInputElement>(null)

	const handeleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value)
	}

	const handeleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === "Enter") addTodo()
	}

	const addTodo = () => {
		if (value) {
			setTodos([...todos, {
				id: Date.now(),
				title: value,
				complate: false
			}])
			setValue('')
		}
	}

	useEffect(() => {
		if (inputRef.current) inputRef.current.focus()
	})

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number): void => {
		setTodos(todos.map(todo => {
			if (todo.id !== id) return todo

			return {
				...todo,
				complate: !todo.complate
			}
		}))
	}

	return (
		<div className="flex flex-col items-center justify-center mt-10">
			<div className="">
				<input value={value} onChange={handeleChange} ref={inputRef} onKeyDown={handeleKeyDown} type="text" className='border border-gray-500' />
				<button onClick={addTodo} className="border border-gray-500" >add</button>
			</div>
			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
		</div>
	);
}

export default App;