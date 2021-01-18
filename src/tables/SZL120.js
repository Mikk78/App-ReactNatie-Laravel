import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

export const SZL120 = () =>{
  return(
    <View>
      <Text styl={styles.Text}>SZL120</Text>
    </View>
  )
}


const styles =StyleSheet.create({
  Text:{
    color:'black',
    fontSize:20,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    paddingBottom:10,
  },
})