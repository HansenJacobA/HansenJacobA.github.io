import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ColorBox({ colorName, hexCode }) {

    const colorStyle = {
        backgroundColor: hexCode,
    };

    const textStyle = {
        color:
            parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
                ? '#333'
                : '#fff',
    };

    return (
        <View style={[styles.container, colorStyle]}>
            <Text style={[styles.text, textStyle]}>
                {colorName} {hexCode}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    text: {
        fontWeight: 'bold',
        color: '#fff',
    },
});