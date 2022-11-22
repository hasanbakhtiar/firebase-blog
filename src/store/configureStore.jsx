// import { blogReducer } from "../reducers/blogreducer";
// import { createStore, combineReducers } from "redux";

// // Store Start
// const configureStore = () => {
//   const store = createStore(
//     combineReducers({
//         br:blogReducer
//     })
//   );
//   return store;
// };
// export default configureStore;

// Store End

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { blogReducer } from "../reducers/blogreducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            br: blogReducer
        }),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
export default configureStore;

