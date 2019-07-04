import React, {Component} from 'react';
// import * as ant from 'antd'; // 如果没有使用ant 不会打包
import { Button, DatePicker } from 'antd'; // 打包时会自动tree shaking  Button打包后179kb ; Button+DatePicker打包后236.5kb
import 'antd/dist/antd.css';

export default class AntdComp extends Component{
    render (){
        return (
            <div>
               <DatePicker />
               <Button></Button>
            </div>
        )
    }
}