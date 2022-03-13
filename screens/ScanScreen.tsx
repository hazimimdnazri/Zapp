import React, {useRef, useState} from 'react'
import { View, Text } from 'react-native'
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const ScanScreen = () => {
    const sheetRef = useRef<BottomSheet>(null)

    const snapPoints = ["10%", "50%", "90%"]

    return (
        <GestureHandlerRootView>
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text>This is the Scan screen!</Text>
                <BottomSheet ref={sheetRef} snapPoints={snapPoints} >
                    <BottomSheetView style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Swipe me up to open the bottom sheet</Text>
                    </BottomSheetView>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}

export default ScanScreen