import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import logo from '../assets/food/welcome-image.png';
import title from '../assets/food/food-title.png';
import { useNavigation } from '@react-navigation/native';



const WelcomeScreen = () => {
    const navigation = useNavigation();
    const padding1 = useSharedValue(0);
    const padding2 = useSharedValue(0);

    const topValue = useSharedValue(-200);
    const bottomValue = useSharedValue(-200);

    useEffect(() => {
        padding1.value = 0;
        padding2.value = 0;
        topValue.value = -200;
        bottomValue.value = -200;
        setTimeout(() => {
            padding1.value = withSpring(padding1.value + rw(10));
        }, 100)
        setTimeout(() => {
            padding2.value = withSpring(padding2.value + rw(5));
        }, 300)
        setTimeout(() => {
            topValue.value = withSpring(0);
        }, 100)
        setTimeout(() => {
            bottomValue.value = withSpring(rh(10));
        }, 100)
        setTimeout(() => {
            navigation.navigate('LogInForm');
        }, 1200)
    })
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <StatusBar style='light' />
            <Animated.View style={{
                position: 'absolute',
                width: rw(100),
                height: rh(30),
                top: topValue
            }}>
                <Image style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }} source={title} />
            </Animated.View>
            <Animated.View style={{
                padding: padding1,
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: rw(100)
            }}>
                <Animated.View style={{
                    padding: padding2,
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    borderRadius: rw(100)
                }}>
                    <Animated.View style={{
                        width: rw(50),
                        height: rw(50),
                        borderRadius: rw(100),
                        position: 'relative',
                    }}>
                        <Image style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }} source={logo} />
                    </Animated.View>
                </Animated.View>
            </Animated.View>
            <Animated.View style={{
                justifyContent:'center',
                alignItems:"center",
                position:'absolute',
                bottom:bottomValue
            }}>
                <Text style={{
                    marginTop: rh(5),
                    fontWeight: 900,
                    fontSize: rf(4),
                    color: '#FFF'
                }}>Foodify</Text>
                <Text style={{
                    fontSize:rf(2),
                    color:'rgba(255,255,255,0.7)'
                }}>Food is always right</Text>
            </Animated.View>
        </SafeAreaView>
    )
}

export default WelcomeScreen