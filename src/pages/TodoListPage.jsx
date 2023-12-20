import { AddTodoForm } from '../AddTodoForm';
import { TodoList } from '../TodoList';

export function TodoListPage() {
    const handleLogout = () => {};

    return (
        <>
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
                    <div>Hi, {'User'}</div>
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>
            <AddTodoForm />
            <TodoList />
        </>
    );
}
