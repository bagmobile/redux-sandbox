import {createStore} from "redux";
import {reducer} from "./reducer";
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {Provider} from "react-redux";


const store = createStore(reducer);
/*const {dispatch} = store;*/

/*const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
}

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const plusDispatch = bindActionCreator(plus, dispatch);*/

/*const {inc, plus, dec} = bindActionCreators(actions, dispatch);*/

/*store.subscribe(() => {
    console.log(`Store is changed ${store.getState()}`);
    document.getElementById('counter').innerText = store.getState();
})*/

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

/*document.getElementById('add').addEventListener('click', inc);
document.getElementById('sub').addEventListener('click', dec);
document.getElementById('plus').addEventListener('click', () => plus(5, 4,5));*/
