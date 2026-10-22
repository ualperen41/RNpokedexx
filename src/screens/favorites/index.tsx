import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { RouteType } from '../routes/RouteType';
import AppColors from '../../theme/colors';
import Button from '../../components/ui/button';
import AppRoutes from '../../utils/routes';
import { useAppSelector, useCurrentFavorites } from '../../redux/hooks';
import { pokedexList } from '../../store/pokedexList';
import PokedexItem from '../../components/pokedex/pokedexItem';

type Props = RouteType<'index'>;

const Favorites: React.FC<Props> = ({ navigation, route }) => {
  const currentUser = useAppSelector(state => state.auth.currentUser);
  const favoriteIds = useCurrentFavorites();

  // Giris yapilmissa kullanicinin favorilerini goster
  if (currentUser) {
    const favoritePokemons = pokedexList.filter(p => favoriteIds.includes(p.id));
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={favoritePokemons}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <PokedexItem pokemon={item} />}
          contentContainerStyle={favoritePokemons.length === 0 ? { flex: 1 } : undefined}
          ListEmptyComponent={
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../assets/images/avatar.png')}
                style={styles.image}
              />
              <Text style={styles.title}>Henüz favori Pokémon'un yok.</Text>
              <Text style={styles.descripton}>
                Pokemonlar sayfasındaki kalp ikonuna dokunarak favorilerine ekleyebilirsin.
              </Text>
            </View>
          }
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.image}
        />
        <Text style={styles.title}>
          {' '}
          Bunu yapmak için bir hesaba giriş yapmanız gerekiyor.{' '}
        </Text>
        <Text style={styles.descripton}>
          {' '}
          Bu özelliğe erişmek için giriş yapmanız veya bir hesap oluşturmanız
          gerekiyor. Hemen yapın!{' '}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button onPress={()=>navigation.navigate(AppRoutes.LOGIN)} title="Giriş Yap" status="Filled" />
        <Button onPress={()=>navigation.navigate(AppRoutes.REGISTER)} title="Kayıt Ol" status="Border" />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  descripton: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: '60%',
    height: 300,
    alignSelf: 'center',
  },
});

export default Favorites;