import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { RouteType } from '../routes/RouteType'
import Input from '../../components/ui/input'
import AppColors from '../../theme/colors'
import Button from '../../components/ui/button'
import AppRoutes from '../../utils/routes'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { clearError, login } from '../../redux/slices/authSlice'

type Props = RouteType<'Login'>

const Login: React.FC<Props> = ({ navigation, route }) => {
    const dispatch = useAppDispatch()
    const { currentUser, error } = useAppSelector(state => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Ekran acildiginda eski hatayi temizle
    useEffect(() => {
        dispatch(clearError())
    }, [dispatch])

    // Giris basarili olunca tab menuye don
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
            {error && <Text style={styles.error}>{error}</Text>}
            <TouchableOpacity onPress={()=>navigation.navigate(AppRoutes.REGISTER)}>
                <Text style={styles.link}>Hesabın yok mu? Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
<View style={{flex:1}}>
    <Button onPress={()=>dispatch(login({email,password}))} title='Giriş Yap' status='Filled'/>
</View>
        </View>
    )
}

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

export default Login