import React from 'react';
import { StyleSheet, Image } from 'react-native';
import AppRoutes from '../../utils/routes';

const TabBarIcon: React.FC<Props> = ({ name,focused }) => {
  switch (name) {
    case AppRoutes.POKEDEX:
      return <Image style={styles.image} source={focused?require("../../assets//icons/pokedex-active.png"):require("../../assets//icons/pokedex-pasive.png")}/>;
      case AppRoutes.REGIONS:
      return <Image style={styles.image} source={focused?require("../../assets//icons/regions-active.png"):require("../../assets//icons/regions-pasive.png")}/>;
      case AppRoutes.FAVORITES:
      return <Image style={styles.image} source={focused?require("../../assets//icons/favorites-active.png"):require("../../assets//icons/favorites-pasive.png")}/>;
      case AppRoutes.PROFILE:
      return <Image style={styles.image} source={focused?require("../../assets//icons/profile-active.png"):require("../../assets//icons/profile-pasive.png")}/>;
  }
};

const styles = StyleSheet.create({
  image: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

export default TabBarIcon;