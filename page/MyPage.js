/**
 * Created by LPJXLOVE on 2017/11/13.
 */
import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet, Text,
} from 'react-native';

export default class MyPage extends Component {
    constructor() {
        super();
        this.state = {
            isLogin : false,
        }
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={style.container}>
                <View style={style.top_container}>
                    <Image style={style.avatar_container} source={require('./../img/avatar_login.png')}>
                    </Image>
                    <Text style={style.name_container}>立即登录</Text>
                    <Image style={style.navigator_image} source={require('./../img/in.png')}>
                    </Image>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    top_container: {
        display: 'flex',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#08a0ff'
    },
    avatar_container: {
        marginLeft: 16,
        width: 50,
        height:50,
    },
    name_container: {
       alignContent: 'center',
        color: '#ffffff',
        marginLeft: 24,
    },
    navigator_image:{
        marginRight:16,
        marginLeft:210,
        width:16,
        height:16,
    }

});
