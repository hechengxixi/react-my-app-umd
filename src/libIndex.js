import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import storeFactory from './redux/store';
const store = storeFactory();

// ReactDOM.render(
//             <Provider store={store}>
//                 <App />
//             </Provider>,
//             document.getElementById('root'));

export class Comp{
    constructor(props){
        Object.assign(this, props);
    }

    placeAt(el){
        if(typeof el === 'string'){
            el = document.getElementById(el);
        }

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            el);
    }
}

// 不是constructor， 不能使用new
// export function constructor(props){
//     Object.assign(this, props);
// }

// export function placeAt(el){
//         if(typeof el === 'string'){
//             el = document.getElementById(el);
//         }

//         ReactDOM.render(
//             <Provider store={store}>
//                 <App />
//             </Provider>,
//             el);
// }

// commomdjs
// class Comp{
//     constructor(props){
//         Object.assign(this, props);
//     }

//     placeAt(el){
//         if(typeof el === 'string'){
//             el = document.getElementById(el);
//         }

//         ReactDOM.render(
//             <Provider store={store}>
//                 <App />
//             </Provider>,
//             el);
//     }
// }
// // error module.exports is readonly
// module.exports = Comp;
