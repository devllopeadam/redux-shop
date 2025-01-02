import { createStore } from 'redux';
import rootReducer from './reducers'; // Adjust the path as necessary

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;