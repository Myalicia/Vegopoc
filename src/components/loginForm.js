import React, { Component }from 'react'
import connect from 'react-redux'
import emailChanged from '../actions'
import { Card, CardSection, Button, Input } from './common'


class LoginForm extends Component {

    onEmailChange(text){

    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label= "email"
                    placeholder= "email@email.com"
                    onChangeText = {this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    secureTextEntry
                    label="password"
                    placeholder="password"
                    />
                </CardSection>

                <CardSection>
                    <Button>
                    login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}


export default connect(null, {emailChanged})(LoginForm)