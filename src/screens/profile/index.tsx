import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteType } from '../routes/RouteType';
import AppColors from '../../theme/colors';
import Button from '../../components/ui/button';
import AppRoutes from '../../utils/routes';
import { useAppDispatch, useAppSelector, useCurrentFavorites } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';

type Props = RouteType<'index'>;

const Profile: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.auth.currentUser);
  const favorites = useCurrentFavorites();

  // Giris yapilmissa profil bilgilerini goster
  if (currentUser) {
    return (
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.title}>{currentUser.name}</Text>
          <Text style={styles.email}>{currentUser.email}</Text>
        </View>

        <Text style={styles.sectionTitle}>Hesap Bilgileri</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Ad Soyad</Text>
          <Text style={styles.infoValue}>{currentUser.name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>E-mail</Text>
          <Text style={styles.infoValue}>{currentUser.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Şifre</Text>
          <Text style={styles.infoValue}>{'•'.repeat(currentUser.password.length)}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Favori Pokémon</Text>
          <Text style={styles.infoValue}>{favorites.length}</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <Button onPress={() => dispatch(logout())} title="Çıkış Yap" status="Filled" />
        </View>
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
          source={require('../../assets/images/onb3.png')}
          style={styles.image}
        />
        <Text style={styles.title}>
          {' '}
          Profil bilgisini görmek için giriş yap.{' '}
        </Text>
        <Text style={styles.descripton}>
          {' '}
          Bu özelliğe erişmek için giriş yapmanız veya bir hesap oluşturmanız
          gerekiyor. Hemen yapın!{' '}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button 
  onPress={() => navigation.getParent()?.navigate(AppRoutes.LOGIN)} 
  title="Giriş Yap" 
  status="Filled" 
/>
<Button 
  onPress={() => navigation.getParent()?.navigate(AppRoutes.REGISTER)} 
  title="Kayıt Ol" 
  status="Border" 
/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  profileHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  email: {
    fontSize: 16,
    color: AppColors.Normal,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.Flying2,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 16,
    color: AppColors.Normal,
  },
});

export default Profile;