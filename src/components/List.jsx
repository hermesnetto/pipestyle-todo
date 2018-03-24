import * as React from 'react';
import { List as PipeList, Checkbox, Icon } from 'react-pipestyle';
import { connect } from 'react-redux';
import { State as AppState, Todo } from '../reducer';
import { editTodo, EditTodoAction } from '../actionCreators';
import Alert from './Alert';

const { Item } = PipeList;

type Dispatch = (action: EditTodoAction) => void;

interface InjectedActions {
  finishTodo: (todo: Todo) => EditTodoAction;
}

interface InjectedProps {
  todos: Todo[];
}

export type Props = InjectedActions & InjectedProps;

export interface State {
  isAlertActive: boolean;
  alertMessage: string;
}

class List extends React.Component<Props, State> {
  state: State = {
    isAlertActive: false,
    alertMessage: '',
  };

  finishTodo = (todo: Todo): void => {
    setTimeout(() => {
      this.setState({
        isAlertActive: false,
        alertMessage: '',
      });
    }, 2000);
    this.setState({
      isAlertActive: true,
      alertMessage: `Task "${todo.name}" finished`,
    });
    this.props.finishTodo({ ...todo, status: 'DONE' });
  };

  render() {
    const { todos } = this.props;
    const { isAlertActive, alertMessage } = this.state;

    return (
      <div>
        {isAlertActive && <Alert type="success" message={alertMessage} />}
        <PipeList>
          {(todos.length &&
            todos.map((todo: Todo) => (
              <Item
                key={todo.id}
                className="pp-display-flex"
                actions={[
                  {
                    href: '#',
                    icon: 'pp-ico-edit',
                    title: 'click here to edit this todo',
                    className: 'pp-color-gray',
                  },
                  {
                    href: '#',
                    icon: 'pp-ico-trash',
                    title: 'click here to delete this todo',
                    className: 'pp-color-gray',
                  },
                ]}
              >
                <span className="pp-flex">
                  {todo.status === 'ACTIVE' && (
                    <Checkbox onChange={() => this.finishTodo(todo)} />
                  )}
                  {todo.name}
                </span>
              </Item>
            ))) || <p>Nothing to see here</p>}
        </PipeList>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): InjectedProps => ({
  todos: state.todos.filter((todo: Todo) => todo.status === state.tab),
});

const mapDispatchToProps = (dispatch: Dispatch): InjectedActions => ({
  finishTodo: (todo: Todo) => dispatch(editTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
