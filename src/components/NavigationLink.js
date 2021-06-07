import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
export default function NavigationLink({text,navigation,navigationRoute}) {
    return (
        <TouchableOpacity style={styles.btnStyles} onPress={() => navigation.navigate(navigationRoute)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'grey',
        alignSelf: 'center',
        marginTop:20,
        fontSize:15
    }
});
