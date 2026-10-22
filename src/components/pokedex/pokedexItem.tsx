import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Heart } from 'iconsax-react-nativejs';
import { PokedexListItemProps } from '../../models/ui/pokedexItemProps';
import AppColors from '../../theme/colors';
import { pokemonImages } from '../../store/mappingImages';
import { typeIcons } from '../../store/typeIcons';
import { useAppDispatch, useAppSelector, useCurrentFavorites } from '../../redux/hooks';
import { toggleFavorite } from '../../redux/slices/favoritesSlice';

// Tip adina gore renk (theme/colors.ts icindeki enum'dan)
const getTypeColor = (type: string): string =>
  AppColors[type as keyof typeof AppColors] ?? AppColors.Normal;

// Tip ikonunu, verilen renkle boyanmis SVG olarak dondurur
const getTypeIcon = (type: string, color: string): string | undefined =>
  typeIcons[type]?.replace(/{{color}}/g, color);

const PokedexItem: React.FC<PokedexListItemProps> = ({ pokemon }) => {
    const image = pokemonImages[pokemon.id];
    const mainColor = getTypeColor(pokemon.types[0]);
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(state => state.auth.currentUser);
    const isFavorite = useCurrentFavorites().includes(pokemon.id);

    // Favoriye ekle / cikar (giris yapilmamissa uyari ver)
    const onFavoritePress = () => {
      if (!currentUser) {
        Alert.alert('Giriş gerekli', 'Favorilere eklemek için giriş yapmalısın.');
        return;
      }
      dispatch(toggleFavorite({ userId: currentUser.id, pokemonId: pokemon.id }));
    };
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: `${mainColor}26` }]}>
      <View style={styles.infoContainer}>
        <Text style={styles.number}> Nº{pokemon.id} </Text>
        <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.types}>
          {
            pokemon?.types?.map((item,index) => {
                const typeColor = getTypeColor(item);
                const icon = getTypeIcon(item, typeColor);
                return (
                <View
                  key={index}
                  style={[styles.type, { backgroundColor: typeColor }]}>
                    <View style={styles.typeIcon}>
                      {icon && <SvgXml xml={icon} width={12} height={12} />}
                    </View>
                    <Text style={styles.typeName}>{item}</Text>
                </View>
                );
            })
        }
      </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={[styles.box, { backgroundColor: mainColor }]}>
          <View style={styles.boxIcon}>
            <SvgXml
              xml={getTypeIcon(pokemon.types[0], AppColors.White) ?? ''}
              width={80}
              height={80}
              opacity={0.35}
            />
          </View>
          <Image
            source={image}
            style={styles.pokemon}
          />
          <TouchableOpacity
            onPress={onFavoritePress}
            style={styles.favoriteButton}
            hitSlop={10}>
            <Heart
              size={20}
              color={isFavorite ? AppColors.Fighting : AppColors.White}
              variant={isFavorite ? 'Bold' : 'Linear'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokedexItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: AppColors.LightGreen,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: AppColors.Grama,
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  boxIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  number: {
    fontSize: 14,
    fontWeight: '500',
  },
  pokemon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
   type: {
    flexDirection: 'row',
    backgroundColor: AppColors.Grama,
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  types: {
    flexDirection: 'row',
    marginTop: 10,
  },
  typeIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
    borderRadius: 10,
    backgroundColor: AppColors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeName: { fontSize: 14, fontWeight: '700', color: AppColors.White },
  favoriteButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
