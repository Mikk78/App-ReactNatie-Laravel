import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
//import tables
import {SZL80} from "./src/tables/SZL80";
import {SZL120} from "./src/tables/SZL120";
import {SZL105} from "./src/tables/SZL105";
import {SZL140} from "./src/tables/SZL140";
import {SZL160} from "./src/tables/SZL160";
import {SZB100} from "./src/tables/SZB100";
import {SZP100} from "./src/tables/SZP100";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Szafki">
        <Drawer.Screen name="SZL80" component={SZL80}/>
        <Drawer.Screen name="SZL120" component={SZL120}/>
        <Drawer.Screen name="SZP100" component={SZP100}/>
        <Drawer.Screen name="SZB100" component={SZB100}/>
        <Drawer.Screen name="SZL140" component={SZL140}/>
        <Drawer.Screen name="SZL160" component={SZL160}/>
        <Drawer.Screen name="SZL105" component={SZL105}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}