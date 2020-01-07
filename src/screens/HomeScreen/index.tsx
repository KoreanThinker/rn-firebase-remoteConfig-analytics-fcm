import React, { useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import analytics from '@react-native-firebase/analytics';
let count = 1;
const HomeScreen = () => {
    async function onProductView() {
        await analytics().logEvent('load');
    }

    async function trackScreenView(screen: string) {
        // Set & override the MainActivity screen name
        await analytics().setCurrentScreen(screen, screen);
    }

    useEffect(() => {
        trackScreenView('HomeScreen');
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Version 2.0</Text>
            <TouchableWithoutFeedback onPress={onProductView}>
                <Text>Log</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default HomeScreen
