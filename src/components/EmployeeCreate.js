import React, {Component} from 'react'
import { connect } from 'react-redux'
import { employeeUpdate} from '../actions'
import {View, Text} from 'react-native'
import {Card, Cardsection, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
            <Cardsection>
                <Input 
                label="Name" 
                placeholder="Sophia" 
                value={this.props.name}
                onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                />
            </Cardsection>

            <Cardsection>
                <Input 
                label="Phone" 
                placeholder="070-777 77 77" 
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                 />
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

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm
        return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)