import React, { useState, useEffect, useCallback } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

export default function Home({ navigation, route }) {

    const [colorPalettes, setColorPalettes] = useState([]);

    const [isRefreshing, setIsRefreshing] = useState(false);

    const newColorPalette = route.params ? route.params.newColorPalette : undefined;

    const handleFetchPalettes = useCallback(async () => {
        const response = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
        if (response.ok) {
            const palettes = await response.json();
            setColorPalettes(palettes);
        }
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await handleFetchPalettes();
        setIsRefreshing(false);
    }, []);

    useEffect(() => {
        handleFetchPalettes();
    }, []);

    useEffect(() => {
        if (newColorPalette) {
            setColorPalettes(palettes => [newColorPalette, ...palettes]);
        }
    }, [newColorPalette]);

    return (
        <FlatList
            style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => navigation.navigate('ColorPalette', item)}
                    colorPalette={item}
                />
            )}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            ListHeaderComponent=
            {
                <TouchableOpacity onPress={() => { navigation.navigate('ColorPaletteModal'); }}>
                    <Text style={styles.modal}>Add a color scheme</Text>
                </TouchableOpacity>
            }
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: '#fff',
    },
    modal: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'teal',
        marginTop: 10,
        marginBottom: 20,
    }
});
