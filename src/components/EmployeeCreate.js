import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonpress(){
        const {name, phone, ingredients, instructions} = this.props
            this.props.employeeCreate({name, phone, ingredients, instructions})
    }

   
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
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
    const { name, phone, ingredients, instructions } = state.employeeForm;
  
    return { name, phone, ingredients, instructions }
  }

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate)