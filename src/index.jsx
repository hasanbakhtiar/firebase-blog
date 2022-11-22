import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from './actions/blogaction';
const store = configureStore();



const result = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})
