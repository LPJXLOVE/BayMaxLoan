/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
} from 'react-native';
import {
    TabBarBottom,
    TabNavigator,
    StackNavigator,
} from 'react-navigation';

import LoadListItem from "./component/LoadListItem";
import LoanTabPage from "./page/LoanTabPage";
import TabBarItem from "./component/TabBarItem";
import LoanItemDetailPage from "./page/LoanItemDetailPage";
import MyPage from "./page/MyPage";
import CommandPage from "./page/CommandPage";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            //<Tab/>
            <Main/>
            //<CommandPage/>
        );
    }
}




const Tab = TabNavigator({
        Home: {
            screen: CommandPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '推荐',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/recommend.png')}
                        selectedImage={require('./img/recommend.png')}
                    />
                )
            })
        },
        LoanItem: {
            screen: LoanTabPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '全部贷款',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/all.png')}
                        selectedImage={require('./img/all.png')}
                    />
                )
            })
        },

        Mine: {
            screen: MyPage,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/user.png')}
                        selectedImage={require('./img/user.png')}
                    />
                )
            }),
        },
    },

    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#08a0ff',
            inactiveTintColor: '#979797',
            style: {backgroundColor: '#ffffff',},
            labelStyle: {
                fontSize: 12, // 文字大小
            },
        }


    });

const Main = StackNavigator({
    Main: {screen: Tab},
    LoanDetail: {screen: LoanItemDetailPage},
    //My: {screen: MyPage}
});


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
