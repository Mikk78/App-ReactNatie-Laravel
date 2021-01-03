import * as React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import {Navbar} from "../Navbar";

export function SZL80({navigation}) {
  return (
    <View>
      <Navbar/>
      <FlatList style={styles.tableTitle}
                data={[
                  {key: 'SZL-80'},
                  {key: ''},
                  {key: 'Magazyn'},
                  {key: 'Stolarnia'},
                  {key: 'Pakowanie'},
                  {key: 'Razem'},
                ]}
                renderItem={({item}) => <Text style={styles.itemTitle}>{item.keyTitle}</Text>}
      />
      <View style={styles.containerTable}>
        <View style={styles.nameList}>
          <FlatList
            data={[
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
        <View style={styles.containerInput}>
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
    </View>


  );
}


const styles = StyleSheet.create({
  tableTitle: {

  },

  itemTitle:{
    flexDirection:'row',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 12,
    height: 40,
    width: 90,
},
  keyTitle:{
},

  containerTable: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 10,
  },
  item: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 12,
    height: 40,
    width: 90,
  },

  nameList: {
    flexDirection: 'row',
  },

  containerInput: {
    justifyContent: 'center',

  },
  input: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    fontSize: 12,
    height: 40,
    width: 120,
  }
});

