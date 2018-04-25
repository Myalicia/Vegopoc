import React, {Component} from 'react'
import { ScrollView, View } from 'react-native'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {Header, Card} from './components/common'
import RecepieItem from './components/RecepieItem';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/loginForm'


class App extends Component {
    componentWillMount () {
        const config = {   
            apiKey: 'AIzaSyDTVbhoeqbhlTy9EcXzJXWkylzX39I44X4',
            authDomain: 'vegotest-ef9a7.firebaseapp.com',
            databaseURL: 'https://vegotest-ef9a7.firebaseio.com',
            projectId: 'vegotest-ef9a7',
            storageBucket: 'vegotest-ef9a7.appspot.com',
            messagingSenderId: '894754942143'
          }
     firebase.initializeApp(config)
    }
    render (){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return(
            <Provider store={store}>
                <View>
                     <Header headerText={'Welcome'}/>
                    <LoginForm />
                </View>
           </Provider>
        )
    }
    

}
export default App