import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

export const SZL105 = () =>{
  return(
    <View>
      <Text styl={styles.TextTitle}>SZL105</Text>
    </View>
  )
}


const styles =StyleSheet.create({
  TextTitle:{
    color:'black',
    fontSize:20,
    height:70,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:'white',
    paddingBottom:10,
  },
})