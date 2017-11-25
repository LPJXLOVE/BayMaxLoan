/**
 * Created by LPJXLOVE on 2017/10/12.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
export default class TabBarItem extends Component{

    render() {
        return(
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }
                   style={ { tintColor:this.props.tintColor,width:18,height:18 } }
            />
        )
    }


}