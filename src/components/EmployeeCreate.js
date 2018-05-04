import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions/EmployeeActions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonpress(){
        const {name, phone} = this.props
            this.props.employeeCreate({name, phone})
    }

   
    render() {
        return (
            <Card>
                <EmployeeForm {...this.propd} />
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