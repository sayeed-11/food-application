import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { BeakerIcon, BellAlertIcon, ChevronLeftIcon, ChevronRightIcon, EnvelopeIcon, KeyIcon, ShieldCheckIcon } from 'react-native-heroicons/outline';
import { Cog6ToothIcon, UserIcon } from 'react-native-heroicons/solid';

import Animated, { useSharedValue, withTiming, withSpring } from 'react-native-reanimated';

import { RadioButton, Switch } from 'react-native-paper';



const Notification = () => {
    const [isNotification, setNotification] = useState(true);
    const h1 = useSharedValue(rh(0));
    const h2 = useSharedValue(rw(12));

    const handleAccount = () => {
        if (isNotification) {
            h1.value = withSpring(rh(12), { duration: 1500 });
            h2.value = withSpring(rh(22), { duration: 1000 });
            setNotification(!isNotification);
        } else {
            h1.value = withSpring(rh(0), { duration: 1000 });
            h2.value = withSpring(rw(12), { duration: 1500 });
            setNotification(!isNotification);
        }
    }

    return (
        <View>
            <Animated.View style={{
                flexDirection: 'column',
                backgroundColor: '#000',
                borderRadius: 5,
                padding: rw(1),
                height: h2,
                overflow:'hidden'

            }}>
                <Pressable onPress={() => { handleAccount() }} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: rw(3)
                    }}>
                        <View style={{
                            backgroundColor: 'orange',
                            borderRadius: 5,
                            padding: rh(1)
                        }}>
                            <BellAlertIcon size={rf(3)} color={'#FFF'} />
                        </View>
                        <Text style={{
                            color: '#FFF'
                        }}>Notification</Text>
                    </View>
                    <View style={{
                        transform: [{ rotate: isNotification ? '0deg' : '90deg' }],
                    }}>
                        <ChevronRightIcon size={rf(3)} color={'#FFF'} />
                    </View>
                </Pressable>

                <NotificationSection h1={h1} />
            </Animated.View>
        </View>
    )
}

const NotificationSection = ({ h }) => {
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
    return (
        <Animated.View style={{
            width: '100%',
            height: h,
            paddingHorizontal: rw(1),
            paddingVertical: rh(1),
            overflow: 'hidden',
            marginTop: rh(2)
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: '#FFF',
                    paddingHorizontal: rw(2),
                }}>Mute Notification</Text>
                <Switch
                    color='orange'
                    value={checked1}
                    onValueChange={() => setChecked1(!checked1)}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: '#FFF',
                    paddingHorizontal: rw(2),
                }}>In-App Vibrate</Text>
                <Switch
                    color='orange'
                    value={checked2}
                    onValueChange={() => setChecked2(!checked2)}
                />
            </View>
        </Animated.View>
    )
}

export default Notification
