import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

export default function ColorPalette({ route }) {
    const { paletteName, colors } = route.params;
    return (
        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => (
                <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});