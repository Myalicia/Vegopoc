import React, {Component} from 'react'
import { CardSection, Input} from './common'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import {View, Text} from 'react-native'

class EmployeeForm extends Component {
    render(){
        return(
        <View>
        <CardSection>
             <Input
                label="Name"
                placeholder="sofia"
                value = {this.props.name}
                onChangeText = {value => this.props.employeeUpdate({ prop: 'name', value })}
            />
        </CardSection>
        <CardSection>
            <Input
                label="Phone"
                placeholder="070 777 77 77"
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({prop: 'phone',value})}
            />
        </CardSection>
        </View>
       )     

    }
}

const mapStateToProps = (state) => {
    const {name, phone} = state.employeeForm
        return {name, phone}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm)