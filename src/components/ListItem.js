import React, {Component} from 'react'
import {Text} from 'react-native'
import {Card, CardSection} from './common'

class ListItem extends Component {
    render(){
        const {name} = this.props.employee
            return(
                <CardSection>
                    <Text>
                    {name}
                    </Text>
                </CardSection>
            )
    }
}

export default ListItem