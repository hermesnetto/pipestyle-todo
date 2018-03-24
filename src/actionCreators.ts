import { Todo, TodoStatus } from './reducer';
import * as t from './actionTypes';

const generateRandomId = (): string =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

export interface AddTodoAction {
  type: t.AddTodo;
  payload: Todo;
}

export interface EditTodoAction {
  type: t.EditTodo;
  payload: Todo;
}

export interface ToggleTabAction {
  type: t.ToggleTab;
  payload: TodoStatus;
}

export const addTodo = (name: string): AddTodoAction => ({
  type: t.ADD_TODO,
  payload: {
    name,
    id: generateRandomId(),
    status: 'ACTIVE',
  },
});

export const editTodo = (todo: Todo): EditTodoAction => ({
  type: t.EDIT_TODO,
  payload: todo,
});

export const toggleTab = (toTab: TodoStatus): ToggleTabAction => ({
  type: t.TOGGLE_TAB,
  payload: toTab,
});
