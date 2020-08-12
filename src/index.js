import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer'


const reducer = combineReducers({
  items: todoReducer,
  //profile : profileReducer 
  //[
    // { id: 1, title: "Watch a movie on Netflix" },
    // { id: 2, title: "Practice React code" },
    // { id: 3, title: "Don't sleep" },
  //]
})
const store = createStore(reducer,[])
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


