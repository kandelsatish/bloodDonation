import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
export default function Spinner({ size }) {
    return (
        <View style={styles.spinner}>
            <ActivityIndicator size={size || 'large'} color={'#8a0303'} />
        </View>
    )
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

