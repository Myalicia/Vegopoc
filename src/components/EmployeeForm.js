import React, {Component} from 'react'
import { CardSection, Input} from './common'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import {View} from 'react-native'

class EmployeeForm extends Component {
    render(){
        return(
        <View>
        <CardSection>
             <Input
                label="Recepie"
                placeholder="Veggieburger"
                value = {this.props.name}
                onChangeText = {value => this.props.employeeUpdate({ prop: 'name', value })}
            />
        </CardSection>

        <CardSection>
            <Input
                label="Image uri"
                placeholder="https://www.vegourmet.se/wp-content/uploads/2018/02/javligt-gott-burgare-web-1024x630.jpg)"
                value={this.props.phone}
                onChangeText={value => this.props.employeeUpdate({prop: 'phone',value})}
            />
        </CardSection>
            
        <CardSection>
        <Input
                label="Ingredients"
                placeholder="ingredients"
                value={this.props.ingredients}
                onChangeText={value => this.props.employeeUpdate({prop: 'ingredients',value})}
            />
        </CardSection>

        <CardSection>
        <Input
                label="Instructions"
                placeholder="instructions"
                value={this.props.instructions}
                onChangeText={value => this.props.employeeUpdate({prop: 'instructions',value})}
            />
        </CardSection>
        </View>
       )     

    }
}

const mapStateToProps = (state) => {
    const {name, phone, ingredients, instructions} = state.employeeForm
        return {name, phone, ingredients, instructions}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm)

