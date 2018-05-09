import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate, employeeSave, employeeDelete} from '../actions'
import {Card, CardSection,Button, Confirm} from './common'

class EmployeeEdit extends Component {
    state = {showModal: false}
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
          this.props.employeeUpdate({ prop, value })
        })
      }
    
   
    onButtonPress(){
        const { name, phone, ingredients, instructions } = this.props;
        this.props.employeeSave({ name, phone, ingredients, instructions, uid: this.props.employee.uid })
    }

    onAccept(){
        const { uid } = this.props.employee
        this.props.employeeDelete({ uid: this.props.employee.uid })

    }

    onDecline(){
        this.setState({showModal: false})
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
                <Confirm 
                visible ={this.state.showModal}
                onAccept={this.onAccept.bind(this)}
                onDecline={this.onDecline.bind(this)}
                >
                    Do you want to delete this employee?
                </Confirm>
            </Card>
        )

    }
}
const mapStateToProps = (state) => {
    const {name, phone, ingredients, instructions} = state.employeeForm

    return {name, phone, ingredients, instructions}
}

export default connect(mapStateToProps,{employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit)