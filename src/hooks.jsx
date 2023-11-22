import { useContext } from 'react';
import {
    TodoListContext,
    TodoListDispatchContext,
} from './contexts/TodoListContext';

export const useTodoList = () => useContext(TodoListContext);
export const useTodoListDispatch = () => useContext(TodoListDispatchContext);
