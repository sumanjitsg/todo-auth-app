import { AddTodoForm } from '../AddTodoForm';
import { TodoList } from '../TodoList';
import { TodoListProvider } from '../contexts/TodoListContext';

export function TodoListPage() {
    return (
        <TodoListProvider>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem',
                }}
            >
                <h1>TODO</h1>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                    }}
                >
                    <div>Hi, {}</div>
                    <button onClick={() => {}} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>
            <AddTodoForm />
            <TodoList />
        </TodoListProvider>
    );
}
