import React, {Component} from 'react';

export default class List extends Component{
    render (){
        const props = this.props;
        const listNodes = this.props.itemList ? 
            this.props.itemList.map((item)=>(<div key={item.id}>{item.name} <button onClick={(e)=>props.onRemoveItem(item.id)}>删除</button></div>)) :
            '';
        return (
            <div>
                {listNodes}
                <button onClick={(e)=>props.onAddItem('new')}>新增</button>
            </div>
        )
    }
}