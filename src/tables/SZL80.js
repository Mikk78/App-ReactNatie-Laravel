
import * as React from 'react';
import {Button, ScrollView,View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import {Navbar} from "../Navbar";



export function SZL80({navigation}) {
  return (
    <View>
      <Navbar/>
      <Text style={styles.titleText}>SZL80</Text>
      <ScrollView horizontal={true}>
        <View style={styles.containerTable}>
          <View style={styles.nameList}>
            <FlatList
              data={[
                {key: 'Nazwa elementu'},
                {key: 'Bok lewy'},
                {key: 'Bok prawy'},
                {key: 'Przegroda'},
                {key: 'Wieniec dolny'},
                {key: 'Wieniec górny'},
                {key: 'HDF plecy'},
                {key: 'HDF surowa'},
                {key: 'HDF surowa2'},
                {key: 'Front'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
          <View style={styles.wymiarlist}>
            <FlatList
              data={[
                {key: 'Wymiary'},
                {key: '300x230'},
                {key: '300x230.'},
                {key: '263x210'},
                {key: '763x230'},
                {key: '763x217'},
                {key: '762x289'},
                {key: '372x205'},
                {key: '350x95'},
                {key: '798x308'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.input}>Ilość na Stolarni</Text>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.input}>Ilość na Magazynie</Text>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.input}>Ilość na Pakowaniu</Text>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
          </View>
          <View style={styles.containerInput}>
            <Text style={styles.input}>Razem</Text>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
            <TextInput style={styles.input} placeholder="ilość"/>
          </View>
        </View>
      </ScrollView>

    </View>

  );
}


const styles = StyleSheet.create({

  titleText:{
    alignItems:'center',
    justifyContent:'flex-end',
    fontSize: 40,
  },

  containerTable: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 10,
  },

  nameList: {
    flexDirection: 'row',
  },

  item: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 19,
    height: 50,
    width: 150,
  },



  containerInput: {
    justifyContent: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 19,
    height: 50,
    width: 170,
  }
});

