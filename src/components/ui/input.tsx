import React from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'
import { RouteType } from '../routes/RouteType'
import AppColors from '../../theme/colors'

type Props = RouteType<'input'>

const Input: React.FC<Props> = (props) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}  {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        padding:10,
        margin:10,
        borderRadius:10,
        paddingVertical:15,
        borderColor:AppColors.Dark
    },
    input:{fontSize:21}
})

export default Input