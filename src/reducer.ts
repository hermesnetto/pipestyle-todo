import * as t from './actionTypes';
import {
  AddTodoAction,
  EditTodoAction,
  ToggleTabAction,
} from './actionCreators';

export type TodoStatus = 'ACTIVE' | 'DONE' | 'DELETED';

export interface Todo {
  id: string;
  name: string;
  status: TodoStatus;
}

export interface State {
  tab: TodoStatus;
  todos: Todo[];
}

export type Action = AddTodoAction | EditTodoAction | ToggleTabAction;

const initialState: State = {
  tab: 'ACTIVE',
  todos: [],
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case t.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case t.EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo: Todo) => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return action.payload;
        }),
      };
    }
    case t.TOGGLE_TAB:
      return {
        ...state,
        tab: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
