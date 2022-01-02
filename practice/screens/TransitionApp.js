import React, { Component } from "react"

import {Animated, Easing} from 'react-native'
import BaseScreen from './BaseScreen'
import SlideFromRightScreen from './SlideFromRightScreen'
import CollapseExpandScreen from './CollapseExpandScreen'
import SliderFromBottom from './SlideFromBottom'
 import {createStackNavigator, createAppContainer} from 'react-navigation'

 let SlideFromRight = (index, position, width)=>{
     const translateX = position.interpolate({
        inputRange: [index -1, index],
        outputRange: [width, 0],
     })

     return {transform: [{translateX}]}
    
 } 
const FadeTransition =(index, position)=>{
 const sceneRange = [index - 1, index];
 const outputOpacity=[0,1];
 const transition = position.interpolate({
     inputRange:sceneRange,
     outputRange: outputOpacity
 })
 return{
     opacity:transition
 }
}

const BottmTransition=(index, position, height)=>{
  const sceneRange = [index - 1, index] ;
  const outputHeight =[height, 0] 
  const transition= position.interpolate({
      inputRange: sceneRange,
      outputRange: outputHeight
  })
  return {
    transform:[{translateY: transition}]
  }
}
 const NavigationConfig =()=>{
     return{
         screenInterpolator:(sceneProps)=>{
             const position = sceneProps.position;
             const scene = sceneProps.scene;
             const index = scene.index;
             const height = sceneProps.layout.initHeight;
            //  return FadeTransition(index, position)
            return BottmTransition(index, position, height)



         }
     }
 }

 let SlideFromBottom = (index, position, height)=>{
    const translateY = position.interpolate({
       inputRange: [index -1, index],
       outputRange: [height, 0],
    })

    return {transform: [{translateY}]}
   
} 
 const TransitionConfiguration =()=>{
     return{
        transitionSpec: {
             duration:750,
             easing: Easing.out(Easing.poly(4)),
             timing: Animated.timing,
             useNativeDriver:true
         },
         screenInterpolator:(screenProps)=>{
             const{layout,position, scene}= screenProps;
             const width = layout.initWidth;
             const height = layout.initHeight;
             const {index, route} = scene
             const params = route.parms || {}
             const transition = params.transition || 'default'

             return {
                 default: SlideFromRight(index, position, width),
                 bottomTransition: BottmTransition(index, position, height)
             }[transition];

         }
     }
 }

 const RootStack = createStackNavigator({
     SlideFromRight: {screen: SlideFromRightScreen},
     SlideFromBottom: {screen: SliderFromBottom},
     Base:{screen: BaseScreen},
     CollapseExpand:{screen: CollapseExpandScreen}
 },{
     initialRouteName: 'Base',
     headerMode: 'screen',
    transitionConfig: NavigationConfig,
    transitionConfig: TransitionConfiguration,
   

 })

 const AppContainer = createAppContainer(RootStack);

 export default class TransitionApp extends Component{
     render(){
         return<AppContainer/>
     }
 }