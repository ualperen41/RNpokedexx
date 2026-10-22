import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {pokedexList} from "../../store/pokedexList"
import PokedexItem from '../../components/pokedex/pokedexItem'
const Pokedex = () => {
  return (
    <SafeAreaView >
      <FlatList
      data={pokedexList}
      renderItem={({item}) => <PokedexItem pokemon={item}/>}/>
    </SafeAreaView>
  )
}

export default Pokedex

const styles = StyleSheet.create({
  
})