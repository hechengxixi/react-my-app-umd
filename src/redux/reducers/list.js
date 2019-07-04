import TYPES from '../actions/types';

export default  (state={}, action)=>{
    switch(action.type){
        case TYPES.ADD_ITEM: 
            return state.concat(action.data);
        case TYPES.REMOVE_ITEM:
            return state.filter((s)=>(s.id !== action.id));
        default:
            return state;
    }
}