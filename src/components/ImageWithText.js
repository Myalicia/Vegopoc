import React, {Component} from 'react'
import { 
        Image, 
        Text, 
        View, 
        TouchableWithoutFeedback,
        ImageBackground
    } from 'react-native'
import {CardSection, Card} from './common'


class ImageWithText extends Component {
    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee})
    }

    render(){
        const {name, phone} = this.props.employee
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
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
        width:371,
        alignItems: 'flex-end',
       justifyContent:'flex-end',
       opacity: 0.9
    },
    textStyle: {
        fontSize: 25,
        fontFamily: 'times',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px #000000',
        padding: 5
    }
}

export default ImageWithText