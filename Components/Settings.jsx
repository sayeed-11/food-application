import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Cog6ToothIcon } from 'react-native-heroicons/solid';

import Account from './SettingComponents/Account';
import Notification from './SettingComponents/Notification';
import DeleteAccount from './SettingComponents/DeleteAccount';
import ReportAndBug from './SettingComponents/ReportAndBug';
import FeedbackForm from './SettingComponents/FeedbackForm';

import Animated, {FadeInLeft, FadeInRight, useSharedValue, withTiming} from 'react-native-reanimated';

const Settings = ({ navigation }) => {
    const anim1 = useSharedValue(rh(-50))

    useEffect(() => {
        setTimeout(() => {
            anim1.value = withTiming(rh(0), { duration: 500 });
        })
    })
    return (
        <SafeAreaView>
            <StatusBar style='light' />
            <Animated.View style={{
                width: rw(100),
                height: rh(25),
                backgroundColor: 'orange',
                paddingVertical: rh(5),
                paddingHorizontal: rw(5),
                position: 'relative',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                elevation: 10,
                top:anim1
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    zIndex: 100
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        padding: rw(3),
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#FFF',
                    }} onPress={() => { navigation.goBack() }}>
                        <ChevronLeftIcon size={rw(6)} color={"#FFF"} strokeWidth={rf(0.3)} />
                    </TouchableOpacity>

                    <Text style={{
                        textAlign: 'center',
                        width: rw(40),
                        fontWeight: 600,
                        fontSize: rf(3),
                        color: '#FFF'
                    }}>Settings</Text>
                </View>

                <View style={{
                    position: 'absolute'
                }}>
                    <Cog6ToothIcon size={rh(25)} color={'rgba(0,0,0,0.1)'} />
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}>
                    <Cog6ToothIcon size={rh(15)} color={'rgba(0,0,0,0.1)'} />
                </View>
                <View style={{
                    position: 'absolute',
                    top: rh(5),
                    right: rw(20)
                }}>
                    <Cog6ToothIcon size={rh(10)} color={'rgba(0,0,0,0.1)'} />
                </View>
            </Animated.View>


            <ScrollView contentContainerStyle={{
                paddingTop: rh(5),
                paddingBottom: rh(27),
                justifyContent: 'center',
                alignItems: 'center',
                gap:rh(10)
            }}>

                <General />
                <Feedback />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings


const General = () => {
    return (
        <Animated.View entering={FadeInLeft.duration(300).delay(500).springify()} style={{
            width: '90%',
            gap: rh(2)
        }}>
            <Text style={{
                fontSize: rf(2.5),
                fontWeight: 600
            }}>General</Text>

            <View style={{
                gap: rh(2)
            }}>
                <Account />
                <Notification />
                <DeleteAccount />
            </View>
        </Animated.View>
    )
}


const Feedback = () => {
    return (
        <Animated.View entering={FadeInRight.duration(300).delay(700).springify()} style={{
            width: '90%',
            gap: rh(2)
        }}>
            <Text style={{
                fontSize: rf(2.5),
                fontWeight: 600
            }}>Feedback</Text>

            <View style={{
                gap: rh(2)
            }}>
                <ReportAndBug />
                <FeedbackForm/>
            </View>
        </Animated.View>

    )
}