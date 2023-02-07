import { ITodo } from "../types/data"

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void
	toggleTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
	const { id, title, complate, toggleTodo, removeTodo } = props

	return (
		<div className="flex gap-5 ">
			<input type="checkbox" checked={complate} onChange={() => toggleTodo(id)} />
			{title}
			<button onClick={() => removeTodo(id)}>remove</button>
		</div>
	)
}

export { TodoItem }