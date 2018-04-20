import React, { Component }from 'react'
import { Card, CardSection, Button, Input } from './common'


class LoginForm extends Component {
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


export default LoginForm