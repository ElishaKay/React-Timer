import {createStore} from 'redux';
import reducer from './reducers';
import {getTasks} from './data';

const initialState = {};

const store = createStore(reducer,
	initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({type: 'RECEIVE_DATA', payload: getTasks()});

export default store;
