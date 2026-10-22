import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';

import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { onBoardingStyle } from '../../styles/onBoardingStyle';
import Button from '../../components/ui/button';
import Swipe from '../../components/ui/swipe';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';
const OnBoardingSecond: React.FC = () => {
   const navigation=useNavigation()
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
         <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/onb2.png')}
            style={{
              width: 350,
              height: 350,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{flex:1}}>
             <View style={{flex:1}}>
            <Text style={onBoardingStyle.title}>Pokédex'ini güncel tut</Text>
        </View>
         <View style={{flex:1}}>
           <Text style={onBoardingStyle.description}>
            Kaydolun; profilinizi, favori Pokémon'larınızı, ayarlarınızı ve çok daha fazlasını internet bağlantısı olmasa bile uygulama içinde kayıtlı tutun.
            </Text>
        </View>
         <View style={{flex:1,justifyContent:"flex-end"}}>
          <Swipe screens={2} section={1}/>
          <Button
            status="Filled"
            onPress={()=>navigation.navigate(AppRoutes.ONBOARDINGTHIRD)}
            title='Hadi başlayalım!'/>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSecond;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
