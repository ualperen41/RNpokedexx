import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import { RegionCardProps } from '../../models/ui/regionCardProps';
import AppColors from '../../theme/colors';

const RegionCard: React.FC<RegionCardProps> = ({ region }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <ImageBackground
        imageStyle={styles.imageStyle}
        style={styles.image}
        source={require('../../assets/images/backImage.png')}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.region}>{region.bolge}</Text>
          <Text style={styles.generation}>{region.nesil} NESİL</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.generationImage}
            source={require('../../assets/images/generation.png')}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 20,
    resizeMode: 'contain',
    flexDirection: 'row',
  },
  imageStyle: {
    borderRadius: 20,
  },
  infoContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,

  },
  imageContainer: {
    backgroundColor: 'rgba(0,0,0,0.58)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
        borderBottomRightRadius:20,
    borderTopRightRadius:20
  },
  region: { color: AppColors.White, fontSize: 28, fontWeight: '800' },
  generation: { fontSize: 21, color: AppColors.Flying2, fontWeight: '500' },
  generationImage: {
    width: '90%',
    height: 100,
    resizeMode: 'contain',
  },
});

export default RegionCard;