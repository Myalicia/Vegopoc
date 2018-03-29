import React from 'react'
import { Text, View} from 'react-native'

const Title = (props)=> {
    return(
        <View>
            <Text style= {styles.titleStyle}>
            {props.title}
            </Text>
        </View>
    )
}

const styles = {
    titleStyle: {
        fontSize: 15
    }
}



export {Title}