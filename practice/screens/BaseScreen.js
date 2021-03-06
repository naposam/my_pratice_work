import React,{Component} from 'react'
import {Platform, StyleSheet, Text,View,TouchableOpacity} from 'react-native'

class BaseScreen extends Component{
    static navigationOptions =({ navigation }) =>{
        return {
            title:'Base Screen',
            headerStyle:{
        backgroundColor:'#2980b9',
         height:60
            },
            headerTitleStyle:{
                color:'white'
            }
        }
    }
    moveToSliderFromRight =() =>{
        this.props.navigation.navigate('SlideFromRight')
    }

    moveToSliderFromBottom =() =>{
        this.props.navigation.navigate('SlideFromBottom',{transition: 'bottomTransition'})
    }
    moveToExpand =() =>{
        this.props.navigation.navigate('CollapseExpand')
    }
    
    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={this.moveToSliderFromRight}><Text style={styles.textButton}>SLIDE FROM RIGHT SCREEN</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.moveToSliderFromBottom }><Text style={styles.textButton}>SLIDE FROM BOTTOM SCREEN</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.moveToExpand}><Text style={styles.textButton}>EXPAND SCREEN</Text></TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        alignItems:'center',
        backgroundColor:'#f39c12'

    },
    textButton:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        padding:15
    }

})

export default BaseScreen;