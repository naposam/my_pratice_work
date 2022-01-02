import React, {Component} from 'react' 
import {View, Text, StyleSheet} from 'react-native'

class SliderFromBottom extends Component{
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
<View>
<Text style={styles.txt}>This just a demo</Text>
</View>
</View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#008080',
    },
    textButton:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        padding:15
    },
    txt:{
        color:'white'
    }
})

export default SliderFromBottom;