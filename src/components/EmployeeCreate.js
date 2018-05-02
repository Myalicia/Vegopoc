import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions'
import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends Component {
    onButtonpress(){
        const {name, phone} = this.props
            this.props.employeeCreate({name, phone})
    }

   
    render() {
        return (
            <Card>
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

                <CardSection>
               
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonpress.bind(this)} >
                        create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone } = state.employeeForm;
  
    return { name, phone }
  }

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate)