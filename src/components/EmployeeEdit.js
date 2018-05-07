import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate, employeeSave} from '../actions'
import {Card, CardSection,Button, Confirm} from './common'

class EmployeeEdit extends Component {
    state = {showModal: false}
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
          this.props.employeeUpdate({ prop, value })
        })
      }
    
   
    onButtonPress(){
        const { name, phone } = this.props;
        this.props.employeeSave({ name, phone, uid: this.props.employee.uid })
    }

    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={ () => this.setState({showModal: !this.state.showModal}) }>
                        Delete
                    </Button>
                 </CardSection>
                <Confirm visible ={this.state.showModal}>
                    Do you want to delete this employee?
                </Confirm>
            </Card>
        )

    }
}
const mapStateToProps = (state) => {
    const {name, phone} = state.employeeForm

    return {name, phone}
}

export default connect(mapStateToProps,{employeeUpdate, employeeSave})(EmployeeEdit)