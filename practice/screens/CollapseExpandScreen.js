import React, {Component} from 'react' 
import {View, Text, StyleSheet} from 'react-native'

class CollapseExpandScreen extends Component{
    static navigationOptions =({navigation})=>{
 return{
     title:'Collapse Expand Screen',
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
<View style={styles.txtView}>
<Text style={styles.txt}>This is a test screen for app testing.
If you want app development contact.
Sam Napoleon on 024511261 or 0200661625.
The first 10 people to come receive 50% discount
.I edge all of you to come because it going to fun.
Meet the expert who can help you develop mobile app with ease.
This mobile training is one of a kind.Make it a point to come.
The venue for the training will be icode hub.info@napoleonsam.org for more info.
</Text>

</View>

</View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#8e44ad',
    },
    textButton:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        padding:15
    },
    txt:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        alignItems:'center'
    },
    txtView:{
        flex:1,
        alignItems:'center',
        
    }
})

export default CollapseExpandScreen;