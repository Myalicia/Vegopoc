import React, {Component} from 'react'
import {View,Text} from 'react-native'
import ImageWithText from './ImageWithText'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import _ from 'lodash'
import EmployeeForm from './EmployeeForm'
import EmployeeEdit from './EmployeeEdit';

class EmployeeDetail extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
          this.props.employeeUpdate({ prop, value })
        })
      }

    render(){
        const {name, phone} = this.props.employee
        return(
            <View>
                <Text style={styles.textStyle}>
                    EmployeeDetail {name}

                </Text>
                
            
                
            
            </View>
        )

    }
}
const styles = {
    textStyle:{
        fontFamily='BrandonGrotesque'
    }
}

const mapStateToProps = (state) => {
    const {name, phone, ingredients, instructions} = state.employeeForm

    return {name, phone, ingredients, instructions}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeDetail)