import * as React from 'react';
import { Alert as PipeAlert } from 'react-pipestyle';
import { Portal } from 'react-portal';

export interface Props {
  type: string;
  message: string;
}

const Alert = (props: Props) => {
  return (
    <Portal>
      <span className="alert">
        <PipeAlert type={props.type} message={props.message} />
      </span>
    </Portal>
  );
};

export default Alert;
