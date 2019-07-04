import TYPES from './types';

export const addItem = (name)=>({
    type: TYPES.ADD_ITEM, 
    data:{
        id: new Date().getTime(),
        name: name
        }
    });
export const removeItem = (id)=>({type: TYPES.REMOVE_ITEM, id: id});
