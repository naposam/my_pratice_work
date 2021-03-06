import React, {Component} from 'react' 
import {View, Text, StyleSheet} from 'react-native'

class SlideFromRightScreen extends Component{
    static navigationOptions =({navigation})=>{
 return{
     title:'Slide Screen ',
     headerStyle:{
         backgroundColor:'#2980b9',
         height:60,
     },
     headerTitleStyle:{
         color:'white'
     },
     headerBackTitleStyle:{
         color:'white'
     }
 }
    }
    render(){
        return(
<View style={styles.container}>
<Text onPress={()=>{this.props.navigation.goBack()}} style={styles.textButton}>SCREEN</Text>
</View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#000080',
    },
    textButton:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        padding:15
    }
})

export default SlideFromRightScreen;