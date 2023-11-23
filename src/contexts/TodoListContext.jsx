import { createContext, useReducer } from 'react';

import { InitialTodos } from '../data';
import { todoListReducer } from './todoListReducer';

export const TodoListContext = createContext(null);
export const TodoListDispatchContext = createContext(() => {});

export function TodoListProvider({ children }) {
    const [todoList, dispatch] = useReducer(todoListReducer, InitialTodos);

    return (
        <TodoListContext.Provider value={todoList}>
            <TodoListDispatchContext.Provider value={dispatch}>
                {children}
            </TodoListDispatchContext.Provider>
        </TodoListContext.Provider>
    );
}
