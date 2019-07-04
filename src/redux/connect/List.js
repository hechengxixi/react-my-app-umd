import {connect} from 'react-redux';
import {addItem, removeItem} from '../actions/list';
import CList from '../../components/List';

export default connect(
    state=>({
        itemList: state.list // itemList--> CList的props； state--> store.getState()
    }),
    dispatch=>({
        onAddItem(){
            dispatch(addItem(new Date().toString()));
        },
        onRemoveItem(id){
             dispatch(removeItem(id));
        }
    })
)(CList);