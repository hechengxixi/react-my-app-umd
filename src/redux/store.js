import {createStore, combineReducers, applyMiddleware} from 'redux';
import appList from './reducers/list';

const logger = store=> next=> action=>{
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    next(action);
    console.log(`store logger: type-- ${action.type} ; state-- ${JSON.stringify(store.getState())}`);
    console.groupEnd();
}

// store.getState()中的字段名与combineReducers参数对象字段名一致
const storeFactory = (initialState={'list':[{id:1, name:'init1'}]})=>
    applyMiddleware(logger)(createStore)(
        combineReducers({list:appList}),
        initialState
    );

export default storeFactory;