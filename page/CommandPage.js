/**
 * Created by LPJXLOVE on 2017/11/13.
 */
import React, {Component} from 'react';
import {
    Image,
    View,
    StyleSheet, Text,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class CommandPage extends Component {
    constructor() {
        super();
        this.state = {
            isLogin : false,
            swiperShow:false,
        }
    }

    static navigationOptions = {
        header: null,
    };

    render() {
        if (this.state.swiperShow){
            return (
                <View style={style.container}>
                    <Swiper
                        style={style.top_container}
                        horizontal={true}
                        autoplay={true}
                        loop = {true}
                        paginationStyle={{bottom: 5}}>
                        <Image style={style.avatar_container} source={{uri:'http://pic.58pic.com/58pic/13/56/79/00g58PICSnV_1024.jpg'}}/>
                        <Image style={style.avatarTwo_container} source={{uri:'http://articleimage.tooopen.com/image/20141010/20141010173714_2242.jpg'}}/>
                        <Image style={style.avatarTwo_container} source={{uri:'http://pic.58pic.com/58pic/14/90/64/45k58PICteb_1024.jpg'}}/>
                    </Swiper>
                </View>
            );
        }else {
            return(
                <View style={style.container}>
                    <Text></Text>
                </View>
            )
        }


    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }
}



const style = StyleSheet.create({
    container: {
        height: 150,
    },
    top_container: {
        //backgroundColor: '#08a0ff',
    },
    avatar_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    avatarTwo_container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#08a0ff',
        flex: 1,
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
