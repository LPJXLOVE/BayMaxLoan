/**
 * Created by LPJXLOVE on 2017/10/12.
 */
import React, {Component} from "react";
import { FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import LoadListItem from "./../component/LoadListItem";




export default class LoanTabPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            result:[
                {key: 0,partner:'菠萝贷',loanLimit:'1000-3000',tag:'1小时放款', rate:'0.5%',loanDate:"1月"},
                {key: 1,partner:'你我贷',loanLimit:'2000-3000',tag:'1小时放款', rate:'0.5%',loanDate:"1月"},
                {key: 2,partner:'拍拍贷',loanLimit:'5000-30000',tag:'1小时放款', rate:'0.5%',loanDate:"1月"},
                {key: 3,partner:'省呗',loanLimit:'1000-3000',tag:'1小时放款', rate:'0.5%',loanDate:"1月"},
                {key: 4,partner:'极速借钱',loanLimit:'1000-3000',tag:'1小时放款', rate:'0.5%',loanDate:"1月"},
                {key: 5,partner:'魔借',loanLimit:'1000-3000',tag:'1小时放款', rate:'0.5%',loanDate:"1月"},
                {key: 6,partner:'易融贷',loanLimit:'1000-3000',tag:'1小时放款', rate:'0.5%',loanDate:"1月"},
                {key: 7,partner:'借了么',loanLimit:'1000-3000',tag:'1小时放款', rate:'0.5%',loanDate:"9月"},
            ]
        }
    }
    static navigationOptions = {
        title : "BayMay",
        headerPressColorAndroid :true,
        headerTintColor : "#08a0ff",
        headerTitleStyle: {
            //居中显示
            alignSelf : 'center',
        },
    };
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.result}
                    renderItem={({item,index}) =>   <TouchableOpacity key={index} activeOpacity={1} onPress={()=>navigate('LoanDetail', { name: item.partner })}>
                        <LoadListItem partner={item.partner} loanLimit={item.loanLimit}
                                      tag ={item.tag} rate ={item.rate} loanDate={item.loanDate}/>
                    </TouchableOpacity>}
                />

            </View>

        );
    }
    componentDidMount() {
        fetch('http://39.108.208.2/main_service/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },

            body: 'funid=11&platform=android'
        })
            .then((response)=> response.json())
            .then((result)=>{
                this.setState({
                    result: result.result.data
                });
            })
            .catch((error)=>{
                alert(error)
            })
    }

}




const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});