import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { onBoardingStyle } from '../../styles/onBoardingStyle';
import Button from '../../components/ui/button';
import Swipe from '../../components/ui/swipe';
import AppRoutes from '../../utils/routes';
const OnBoardingFirst: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/onb1.png')}
            style={{
              width: 350,
              height: 350,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text style={onBoardingStyle.title}>
              Tüm Pokémonlar Tek Bir Yerde.Uygulamadan Tamamı
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={onBoardingStyle.description}>
              {' '}
              Nintendo tarafından yaratılan, tüm nesillerden Pokémon'ların yer
              aldığı kapsamlı bir listeye erişin.
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Swipe screens={2} section={0} />
            <Button
           status="Filled"
            onPress={()=> navigation.navigate(AppRoutes.ONBOARDINGSECOND)}
            title='Devam Et'/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingFirst;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
