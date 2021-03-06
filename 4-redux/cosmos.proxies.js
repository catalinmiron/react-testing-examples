// highlight{7-9}
import { createStore } from 'redux';
import createReduxProxy from 'react-cosmos-redux-proxy';
import { counterReducer } from './reducer';

export default [
  createReduxProxy({
    createStore: mockState => createStore(counterReducer, mockState)
  })
];
