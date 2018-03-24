import * as React from 'react';
import { Tab as PipeTab } from 'react-pipestyle';
import { connect } from 'react-redux';
import { toggleTab, ToggleTabAction } from '../actionCreators';
import { TodoStatus, State } from '../reducer';

const { Item } = PipeTab;

type Dispatch = (toTab: ToggleTabAction) => void;

interface InjectedActions {
  toggleTab: (toTab: TodoStatus) => void;
}

interface InjectedProps {
  tab: TodoStatus;
}

type Props = InjectedActions & InjectedProps;

class Tab extends React.Component<Props> {
  render() {
    const { tab } = this.props;

    return (
      <PipeTab align="left" hasBorder={true}>
        <Item
          isActive={tab === 'ACTIVE'}
          onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            this.props.toggleTab('ACTIVE');
          }}
        >
          To Do
        </Item>
        <Item
          isActive={tab === 'DONE'}
          onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            this.props.toggleTab('DONE');
          }}
        >
          Done
        </Item>
      </PipeTab>
    );
  }
}

const mapStateToProps = (state: State): InjectedProps => ({
  tab: state.tab,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTab: (toTab: TodoStatus) => dispatch(toggleTab(toTab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
