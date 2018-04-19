import React, {Component} from 'react'
import { ScrollView } from 'react-native'
import {Header, Card} from './components/common'
import RecepieItem from './components/RecepieItem';
import firebase from 'firebase'


class App extends Component {
    componentWillMount () {
     firebase.initializeApp({   
            apiKey: 'AIzaSyDTVbhoeqbhlTy9EcXzJXWkylzX39I44X4',
            authDomain: 'vegotest-ef9a7.firebaseapp.com',
            databaseURL: 'https://vegotest-ef9a7.firebaseio.com',
            projectId: 'vegotest-ef9a7',
            storageBucket: 'vegotest-ef9a7.appspot.com',
            messagingSenderId: '894754942143'
          }
     )}
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