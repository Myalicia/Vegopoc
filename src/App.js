import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import {Header, Card} from './components/common'
import RecepieItem from './components/RecepieItem';


class App extends Component {
    render (){
        return(
           <ScrollView>
            <Header headerText={'Recept'}/>
            <RecepieItem> </RecepieItem>
            <RecepieItem> </RecepieItem>
            <RecepieItem> </RecepieItem>
            <RecepieItem> </RecepieItem>
        
               
           </ScrollView>
        )
    }
    

}
export default App