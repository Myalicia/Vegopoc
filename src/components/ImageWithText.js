import React, {Component} from 'react'
import { 
        Image, 
        Text, 
        View, 
        TouchableWithoutFeedback,
        ImageBackground
    } from 'react-native'
import {CardSection, Card} from './common'
import {Actions} from 'react-native-router-flux'



class ImageWithText extends Component {
    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee})
    }

    render(){
        const {name, phone, ingredients,instructions} = this.props.employee
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>
            <CardSection>
                <View style={styles.container}>
                    <ImageBackground 
                    style={styles.imageStyle}
                    resizeMode='cover'
                    source={{uri:phone}}
                            >
                            
                        <Text style={styles.textStyle}>
                            {name}
                        </Text>
                    </ImageBackground>
                </View>
            </CardSection>
            </View>
            </TouchableWithoutFeedback>
        )
    }



}

const styles = {
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
      },
    imageStyle: {
        flexGrow:1,
        height:353,
        width:377,
        alignItems: 'flex-end',
       justifyContent:'flex-end',
       opacity: 0.9
    },
    textStyle: {
        fontSize: 29,
        fontFamily: 'palatino',
        color: 'rgb(239,236,233)',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px #000000',
        padding: 15
        
    }
}

export default ImageWithText