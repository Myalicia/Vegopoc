import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Card, Cardsection, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
            <Cardsection>
                <Input label="Name" placeholder="Sophia"/>
            </Cardsection>

            <Cardsection>
                <Input label="Phone" placeholder="070-777 77 77" />
            </Cardsection>

            <Cardsection>
            </Cardsection>

            <Cardsection>
                <Button>
                    Create
                 </Button>
            </Cardsection>
            </Card>
            
        )
    }

}
export default EmployeeCreate