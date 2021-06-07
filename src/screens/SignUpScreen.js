import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import firebase from 'firebase'
import AuthFrom from '../components/AuthenticationForm'
import NavigationLink from '../components/NavigationLink'
export default function SignUpScreen({ navigation }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handelSignUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                navigation.navigate('SignIn');
                setIsLoading(false);
            })
            .catch((err) => {
                setError("Something went wrong. Try again !");
                setIsLoading(false);
            })
    };

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
                formName="Sign Up"
                text="Sing Up"
                error={error}
                submit={(email, password) => handelSignUp(email, password)}
                isLoading={isLoading}
                setIsLoading={(bool) => setIsLoading(bool)}
            />
            <NavigationLink
                text="Already Signed Up. Login Instead?"
                navigation={navigation}
                navigationRoute="SignIn"
            />
        </SafeAreaView>
    )
}
