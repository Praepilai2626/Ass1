/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, ScrollView } from 'react-native';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Dutu2.db' ,createFromLocation : 1});

 
export default class Scan extends React.Component {

}