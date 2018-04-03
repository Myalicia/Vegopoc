import React from 'react'
import { Text, View} from 'react-native'

const Title = (props)=> {
    return(
        <View style= {styles.viewStyle}>
            <Text style= {styles.titleStyle}>
            {props.title}
            </Text>
        </View>
    )
}

const styles = {
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'helvetica'
        
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 5,
        marginTop: 10
         
    }
}



export {Title}