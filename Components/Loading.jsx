import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


const Loading = ({props}) => {
  return (
    <View style={{
        flex:1, justifyContent:'center', alignItems:'center',padding:20
    }}>
      <ActivityIndicator size={'large'} animating={true} color={'orange'} />
    </View>
  )
}

export default Loading