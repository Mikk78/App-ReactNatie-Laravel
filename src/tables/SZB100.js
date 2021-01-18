import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import  { Component } from 'react';
import { Table, TableWrapper,Col, Cols, Cell } from 'react-native-table-component';
import {Navbar} from "../Navbar";


export class ExampleFive extends Component {



  constructor(props) {
    super(props);
      const elementText = (value) => (
          <View style={styles.btn}>
            <Text style={styles.btnText}>Wymiar</Text>
          </View>);
    const elementButton = (value) => (
        <TouchableOpacity onPress={() => this._alertIndex(value)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>button</Text>
          </View>
        </TouchableOpacity>
    );

    this.state = {
      tableTitle: ['Title', 'Title2', 'Title3', 'Title10', 'Title9', 'Title8', 'Title7', 'Title5'],
      tableData: [
        [elementText('1'), 'a', 'b', 'c', 'd', 'd', 'd', 'd', 'd'],
        [elementButton('2'), '1', '2', '3', '4', 'd', 'd', 'd', 'd'],
        [elementButton('3'), 'a', 'b', 'c', 'd', 'd', 'd', 'd', 'd'],
        [elementButton('3'), 'a', 'b', 'c', 'd', 'd', 'd', 'd', 'd'],
      ]
    }
  }

  _alertIndex(value) {
    Alert.alert(`This is column ${value}`);
  }

  render() {
    const state = this.state;
    return (
    <View style={styles.container}>
      <ScrollView>
        <Table style={{flexDirection: 'row'}} borderStyle={{borderWidth: 1}}>
        {/* Left Wrapper */}
        <TableWrapper style={{width: 100}}>
          <Cell data="SZB100" style={styles.singleHead}/>
          <TableWrapper style={{flexDirection: 'row'}}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[40, 40, 40, 40]} textStyle={styles.titleText}/>
          </TableWrapper>
        </TableWrapper>
        {/* Right Wrapper */}
        <TableWrapper style={{flex:1}}>
          <Cols data={state.tableData} heightArr={[40, 40, 40, 40, 40]} textStyle={styles.text}/>
        </TableWrapper>
      </Table>
      </ScrollView>
    </View>
    )
  }
}

export default ExampleFive

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
  Text:{
    color:'black',
    fontSize:20,
    height:70,
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:'white',
    paddingBottom:10,
  },
  container: { flex: 1, padding: 10, paddingTop: 30, backgroundColor: '#fff'},
  singleHead: { width: 100, height: 40, backgroundColor: '#c8e1ff', textAlign:'center' },
  head: { flex: 1, backgroundColor: '#c8e1ff' },
  title: { flex: 1, backgroundColor: '#f6f8fa'},
  titleText: {   padding: 10,marginRight: 6, textAlign:'center' },
  text: { padding: 10, textAlign: 'center' },
  btn: { backgroundColor: '#c8e1ff', borderRadius: 2 },
  btnText: { textAlign: 'center' },
})