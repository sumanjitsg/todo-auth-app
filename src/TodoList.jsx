import { Todo } from './Todo';
import { InitialTodos } from './data';

export function TodoList() {
    const todos = InitialTodos;

    return (
        <ul>
            {todos.map(item => (
                <Todo key={item.id} item={item} />
            ))}
        </ul>
    );
}
