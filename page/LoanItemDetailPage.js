/**
 * Created by LPJXLOVE on 2017/10/13.
 */
import React,{Component} from 'react';
import {
    View,
    Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
export default class LoanItemDetailPage extends Component{
    static navigationOptions =({navigation}) => ({
        title: navigation.state.params.name,
    });
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigate('Profile', { name: 'Jane' })
                }
            />
        );
    }
}
