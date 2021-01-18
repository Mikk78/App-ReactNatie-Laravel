import React from 'react'
import { Button, View,Text, FlatList, StyleSheet,} from 'react-native'

export const Navbar = () =>{
  return(
    <View style={styles.navbar}>
      <Text styl={styles.navbarText}>Stolarnia</Text>
    </View>
  )
}


const styles =StyleSheet.create({
  navbar:{
    height:70,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:'white',
    paddingBottom:10,
    fontSize:9,
  },
  navbarText:{
    color:'black',
    fontSize:9,
  },
})