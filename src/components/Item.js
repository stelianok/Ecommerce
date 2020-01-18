import React, {Component} from 'react';
import {Text,View, Image, StyleSheet} from 'react-native';

class Item extends Component {
  render(){
    return(
      <View style = {{backgroundColor: '#171715'}}>
        <View style = {styles.container}>
          <Image  style = {styles.img} source = {{uri: this.props.item.foto}}/>


          <View style = {{flexDirection: 'column',alignItems: 'flex-start',flex: 1}}> 
            <Text style = {styles.title}> {this.props.item.titulo} </Text>
            <Text style = {styles.price}> R${this.props.item.valor} </Text>
            <Text style = {styles.text}>Local:  {this.props.item.local_anuncio} </Text>
            <Text style = {styles.text}>Data de Publicação:  {this.props.item.data_publicacao} </Text>

          </View>
        </View>
      </View>
    );
  }  
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: '#171715',
    flex: 1,
    alignItems: 'center',
    borderColor: 'beige',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 5,
    paddingVertical:  5,

    
    marginVertical: 5,
    flexDirection: 'row',
  },
  img: {
    height: 165,
    width: 165,
    resizeMode: 'stretch',
    borderRadius: 5,

    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'beige',
    
    

  
  },
  price: {
    fontSize: 20,
    backgroundColor: '#4EC273',
    color: 'beige',
    paddingVertical: 5,
    paddingHorizontal: 5,

    borderRadius: 5,

    marginHorizontal: 5,
  },
  text: {
    fontSize: 18,
    color: 'beige'
  }
});
export default Item;