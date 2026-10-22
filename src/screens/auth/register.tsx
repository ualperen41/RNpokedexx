import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import AppRoutes from '../../utils/routes'
import AppColors from '../../theme/colors'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { clearError, register } from '../../redux/slices/authSlice'

const Register = ({navigation,route}) => {
  const dispatch = useAppDispatch()
  const { currentUser, error } = useAppSelector(state => state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  // Ekran acildiginda eski hatayi temizle
  useEffect(() => {
    dispatch(clearError())
  }, [dispatch])

  // Kayit basarili olunca (otomatik giris yapilir) tab menuye don
  useEffect(() => {
    if (currentUser) navigation.navigate(AppRoutes.TABMENU)
  }, [currentUser, navigation])

  return (
    <View style={styles.container}>
      <View style={{marginVertical:20}}>
        <Text style={styles.title}>Lütfen bilgilerinizi giriniz</Text>
        <Text style={styles.description}>Hadi Başlayalım !</Text>

      </View>
      <View style={{flex:5}}>
            <Input placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address"/>
            <Input placeholder="Şifre" value={password} onChangeText={setPassword} secureTextEntry/>
            <Input placeholder="Ad Soyad" value={name} onChangeText={setName}/>
            {error && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity onPress={()=>navigation.navigate(AppRoutes.LOGIN)}>
              <Text style={styles.link}>Zaten hesabın var mı? Giriş Yap</Text>
            </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
    <Button onPress={()=>dispatch(register({name,email,password}))} title='Kayıt Ol' status='Filled'/>
</View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:AppColors.White,
        paddingHorizontal:10
    },
    title:{fontSize:26,textAlign:"center",marginVertical:10},
    description:{fontSize:26,textAlign:"center",fontWeight:"bold"},
    error:{color:AppColors.Fighting,textAlign:"center",marginVertical:5,fontSize:15},
    link:{color:AppColors.Azul,textAlign:"center",marginVertical:10,fontSize:16,fontWeight:"600"}
})