import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import firebase from 'firebase'
import AuthFrom from '../components/AuthenticationForm'
import NavigationLink from '../components/NavigationLink'
export default function LogInScreen({ navigation }) {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handelSignIn = (email, password) => {
        setError('');
        setIsLoading(true);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("User signed in successfully")
                setIsLoading(false)
            })
            .catch((err) => {
                setError("Something went wrong. Make sure you are signed up");
                setIsLoading(false);
            })
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setError('');
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView>
            <AuthFrom
                navigation={navigation}
                formName="Sign In"
                text="Sing In"
                error={error}
                submit={(email, password) => handelSignIn(email, password)}
                isLoading={isLoading}
                setIsLoading={(bool) => setIsLoading(bool)}
            />
            <NavigationLink
                navigation={navigation}
                text="Not signed up  yet ! Sign Up instead"
                navigationRoute="SignUp"
            />
        </SafeAreaView>
    )
}
