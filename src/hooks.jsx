import { useContext } from 'react';
import {
    TodoListContext,
    TodoListDispatchContext,
} from './contexts/TodoListContext';
import { AuthContext } from './contexts/AuthContext';

export const useTodoList = () => useContext(TodoListContext);
export const useTodoListDispatch = () => useContext(TodoListDispatchContext);
export const useAuth = () => useContext(AuthContext);
