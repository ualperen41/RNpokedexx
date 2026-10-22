import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { regions } from '../../store/regions'
import RegionCard from '../../components/regions/regionCard'

type Props = RouteType<"index">

const Regions:React.FC<Props> = ({navigation,route}) => {
  return (
    <View style={styles.container}>
        <FlatList
        data={regions}
        renderItem={({item})=><RegionCard region={item}/>}
        />
        </View>
  )
}

export default Regions

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  }
})