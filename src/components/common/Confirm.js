import React from 'react'
import {CardSection} from './CardSection'
import {Button} from './Button'
import { Text, View, Modal} from 'react-native'

const Confirm = ({children, visible, onAccept, onDecline}) => {
    const {containerStyle, textStyle, cardSectionStyle} = styles
    return(
        <Modal
        visible={visible}
        transparent
        animationType="Slide"
        onRequestClose= { () => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                    {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>

                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    )

}
const styles = {

    textStyle: {
        flex: 1,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 18


    },
    containerStyle:{
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'

    },
    cardSectionStyle: {
        justifyContent: 'center'
    }

}

export {Confirm}