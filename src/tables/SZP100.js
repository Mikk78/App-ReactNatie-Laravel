import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

export const SZP100 = () =>{
  return(
    <View>
      <Text styl={styles.Text}>SZP100</Text>
    </View>
  )
}


const styles =StyleSheet.create({
  Text:{
    color:'black',
    fontSize:20,
    height:70,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:'white',
    paddingBottom:10,
  },
})