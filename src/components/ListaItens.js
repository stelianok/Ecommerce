import React, {Component} from 'react';
import { View,Text,ScrollView } from 'react-native';
import axios from 'axios';
import Item from './Item';
class ListaItens extends Component {

  // faus.com.br/recursos/c/dmain/api/itens.html
  componentWillMount(){

    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => {this.setState({ListaItens: response.data})})
      .catch(() => {console.log('Erro ao recuperar os dados'); });
  }
  constructor(props) {
    super(props)
  
    this.state = {
       ListaItens: []
    }
  }
  

  render(){
    return(
      <ScrollView>
         {this.state.ListaItens.map(item => (<Item key = {item.titulo} item = {item} />))}
      </ScrollView>
    );
  }
}
export default ListaItens;