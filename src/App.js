import React, {Component} from 'react'
import { View } from 'react-native'
import {Header, Card} from './components/common'
import RecepieItem from './components/RecepieItem';


class App extends Component {
    render (){
        return(
           <View>
            <Header headerText={'Recept'}/>
            <RecepieItem> </RecepieItem>
            <RecepieItem> </RecepieItem>
            <RecepieItem> </RecepieItem>
            <RecepieItem> </RecepieItem>
        
               
           </View>
        )
    }
    

}
export default App