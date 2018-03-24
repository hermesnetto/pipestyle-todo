import * as React from 'react';
import { BaseField, TextField } from 'react-pipestyle';
import { connect } from 'react-redux';
import { addTodo } from '../actionCreators';
import { Action } from '../reducer';

type Dispatch = (action: Action) => void;

interface Props {
  addTodo: (name: string) => void;
}

interface State {
  value: string;
}

class Form extends React.Component<Props, State> {
  state: State = {
    value: '',
  };

  handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { value } = this.state;

    if (value.length) {
      this.props.addTodo(value);
      this.setState({ value: '' });
    }
  };

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <BaseField>
          <TextField
            placeholder="Type the task name and press ENTER"
            onChange={this.handleChange}
            value={value}
          />
        </BaseField>
      </form>
    );
  }
}

const mapStateToProps = (): {} => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (name: string) => dispatch(addTodo(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
