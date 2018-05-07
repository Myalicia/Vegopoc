import React, {Component} from 'react'
import _ from 'lodash'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'
import {employeeUpdate} from '../actions'
import {Card, CardSection,Button} from './common'

class EmployeeEdit extends Component {
    componentWillMount(){
        _.each(this.props.employee, (prop, value) => {
            this.props.employeeUpdate({ prop, value })
          })
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
          this.props.employeeUpdate({ prop, value });
        });
      }
    
   
    onButtonPress(){
        const { name, phone } = this.props;
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
                
            </Card>
        )

    }
}
const mapStateToProps = (state) => {
    const {name, phone} = state.employeeForm

    return {name, phone}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeEdit)