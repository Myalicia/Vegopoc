import React, {Component} from 'react'
import {View,Text, Image, ScrollView} from 'react-native'
import ImageWithText from './ImageWithText'
import {Actions} from 'react-native-router-flux'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import _ from 'lodash'
import EmployeeForm from './EmployeeForm'


class EmployeeDetail extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
          this.props.employeeUpdate({ prop, value })
        })
      }

    render(){
        const {name, phone, ingredients, instructions} = this.props.employee
        return(
            <ScrollView>
                <View>
                <Image 
                    source={{uri:phone}}
                    style={styles.imageStyle}
                />
                <Text style={styles.textStyle}>
                    {name.toUpperCase()}
                </Text>
                </View>

                <View style={styles.containerStyle}>

                <Text style={styles.ingredientStyle}>
                    {ingredients}
                </Text>
                <Text style={styles.ingredientStyle}>
                    {instructions}
                 </Text>
                 </View>
                
            
                
            
            
            </ScrollView>
        )

    }
}
const styles = {
    textStyle:{
        fontFamily:'Brandon Grotesque',
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    imageStyle: {
        flexGrow:1,
        height:353,
        width:377,
        alignItems: 'flex-end',
       justifyContent:'flex-end',
       opacity: 0.9
    },
    ingredientStyle:{
        fontFamily:'Brandon Grotesque',
        fontSize: 20
    },
    containerStyle:{
        marginLeft: 25,
        marginRight: 10
    }
}

const mapStateToProps = (state) => {
    const {name, phone, ingredients, instructions} = state.employeeForm

    return {name, phone, ingredients, instructions}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeDetail)