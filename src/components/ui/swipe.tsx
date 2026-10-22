import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SwipeProps } from '../../models/ui/swipeProps'
import AppColors from '../../theme/colors'

const Swipe:React.FC<SwipeProps> = ({screens, section}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: screens }).map((_, index) => {
        return (
          <View
            key={index}
            style={
              index == section ? styles.activeSection : styles.passiveSection
            }
          />
        );
      })}
    </View>
  );
}

export default Swipe

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:15
    },
    activeSection:{
        width:28,
        height:9,
        backgroundColor:AppColors.Azul,
        borderRadius:100,
        marginHorizontal:5
    },
     passiveSection:{
        width:9,
        height:9,
        backgroundColor:AppColors.Flying2,
        borderRadius:100,
        marginHorizontal:5
    },
})