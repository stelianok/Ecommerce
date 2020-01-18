import React, {Component} from 'react';
import {View, Text,StyleSheet } from 'react-native';
import ListaItens from './src/components/ListaItens';
export default class App extends Component {
  render(){
    
    return(
      <ListaItens/>
    );
  }
}