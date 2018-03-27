import React from 'react'
import { View, Text} from 'react-native'
import { Link } from 'react-router-native'

import Header from 'Todo_app/src/components/Header'

export default ()=> {
  return(
    <View>
     <Text> homepage</Text>
     <Link to="/Test" > 
        <Text> To test </Text>
     </Link>
    </View>
    
  )
}
