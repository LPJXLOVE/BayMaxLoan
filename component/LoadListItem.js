/**
 * Created by LPJXLOVE on 2017/10/10.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ToastAndroid,
} from 'react-native'
export default class LoadListItem extends Component {
    constructor(){
        super();
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.topLayout}>
                    <Image source={{uri:'http://img.xmiles.cn/loan/2017_03/20170331225005_781_149097171546925.tmp'}} style={styles.topLayoutImg}/>
                    <Text style={styles.topLayoutText}>{this.props.partner}</Text>
                </View>
                <View style={{height:0.5, backgroundColor: '#cccccc'}}/>
                <View style={styles.second_container}>
                    <View style={{flexDirection: 'row',flex:1,justifyContent:'center'}}>
                    <View style={styles.loanLimitContainer}>
                        <Text style={{color: '#ff5a27',marginBottom:4,fontSize:20}}>{this.props.loanLimit}</Text>
                        <Text style={{fontSize:10}}>额度范围（元）</Text>
                    </View>
                    <View style={{width:0.5,backgroundColor:'#cccccc',marginLeft:12,marginRight:12}}/>
                    </View>

                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={styles.loanTagText}>{this.props.tag}</Text>
                        <Text style={styles.loanTagText}>月费率{this.props.rate}</Text>
                        <Text style={styles.loanTagText}>贷款期限{this.props.loanDate}</Text>
                    </View>
                    <View style={{flex:1, alignItems:'center'}}>
                        <View style={{ borderColor:'#ff5a27',borderWidth:0.5,paddingLeft:10,paddingRight:10,borderRadius:4}}>
                            <Text style={{fontSize:15,color:'#ff5a27',}}>申请贷款</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:8, backgroundColor: '#cccccc'}}/>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width:384,
        paddingTop:8,

    },
    topLayout: {
        marginRight:12,
        marginLeft:12,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    topLayoutImg: {
        height: 20,
        width: 20
    },
    topLayoutText: {
        fontSize: 18,
        marginLeft: 8,
        color: 'black',
    },
    second_container: {
        marginRight:12,
        marginLeft:12,
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loanLimitContainer: {
        flexDirection: 'column',
    },
    loanTagText:{
        fontSize:10
    }

});