import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducer';

import Tab from './Tab';
import List from './List';
import Form from './Form';

const store = createStore(reducer);

export interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <header className="header">
            <section className="wrapper">
              <Form />
            </section>
          </header>
          <section className="wrapper">
            <div className="box">
              <Tab />
              <br />
              <List />
            </div>
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
