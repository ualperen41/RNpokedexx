import React from 'react';
import { Text, SafeAreaView, View, Image } from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { onBoardingStyle } from '../../styles/onBoardingStyle';
import Button from '../../components/ui/button';
import Swipe from '../../components/ui/swipe';
import AppRoutes from '../../utils/routes';

const OnBoardingThird: React.FC = ({navigation}) => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/onb3.png')}
            style={{
              width: 350,
              height: 350,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={onBoardingStyle.title}>
              Bu maceraya hazır mısınız?
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={onBoardingStyle.description}>
            Sadece bir hesap oluşturun ve bugün Pokémon dünyasını keşfetmeye başlayın!
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "space-between"}}>
            <Button onPress={() => navigation.navigate(AppRoutes.REGISTER)} title='Hesap Oluştur' status="Filled"/>
            <Button onPress={() => navigation.navigate(AppRoutes.LOGIN)} title='Zaten Hesabım Var' status="Outline"/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingThird;