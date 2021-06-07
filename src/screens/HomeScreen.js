import React from 'react'
import {View,Text,SafeAreaView,Button} from 'react-native'
import firebase from 'firebase'
export default function HomeScreen() {
    return (
       <SafeAreaView>
           <Text>this is home screen</Text>
            <Button title="signOut" onPress={()=>firebase.auth().signOut()}/>
       </SafeAreaView>
    )
}
