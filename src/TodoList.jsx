import { Todo } from './Todo';
import { useTodoList } from './hooks';

export function TodoList() {
    const todos = useTodoList();

    return (
        <ul>
            {todos.map(item => (
                <Todo key={item.id} item={item} />
            ))}
        </ul>
    );
}
