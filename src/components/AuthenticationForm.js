import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import Spinner from './Spinner'
export default function AuthenticationForm({ navigation, formName, text, submit, error,isLoading }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setEmail('');
            setPassword('');
        });
        return unsubscribe;
    }, [navigation]);

    const renderButton = () => {
        if (isLoading) {
            return <Spinner size="large" />
        }
        return (
            <TouchableOpacity
                style={styles.btnStyles}
                onPress={() => submit(email, password)}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>{text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.form}>
            <Text style={{ alignSelf: 'center', margin: 30, fontWeight: 'bold', fontSize: 20 }}>{formName}</Text>
            <TextInput
                label="Email"
                mode="outlined"
                theme={{ colors: { primary: '#8a0303', underlineColor: 'transparent' } }}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                label="Password"
                mode="outlined"
                theme={{ colors: { primary: '#8a0303', underlineColor: 'transparent' } }}
                style={{ marginTop: 30 }}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
             {renderButton()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    form: {
        width: '90%',
        margin: 20,
        marginTop: 60
    },
    btnStyles: {
        marginTop: 30,
        backgroundColor: '#8a0303',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        marginTop: 10
    }
})
