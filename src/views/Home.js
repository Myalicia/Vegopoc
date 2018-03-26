import React from 'react'
import { View, Text} from 'react-native'
import { Link } from 'react-router-native'

export default ()=> {
  return(
    <View>
     <Text> homepage</Text>
     <Link to="/Test"> 
        <Text> To test </Text>
     </Link>
    </View>
    
  )
}
