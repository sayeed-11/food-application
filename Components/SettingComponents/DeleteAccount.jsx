import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { BeakerIcon, BellAlertIcon, ChevronLeftIcon, ChevronRightIcon, EnvelopeIcon, KeyIcon, ShieldCheckIcon, TrashIcon } from 'react-native-heroicons/outline';
import { Cog6ToothIcon, UserIcon } from 'react-native-heroicons/solid';

import Animated, { useSharedValue, withTiming, withSpring } from 'react-native-reanimated';

import { RadioButton, Switch } from 'react-native-paper';



const DeleteAccount = () => {
    const [isNotification, setNotification] = useState(true);
    const h1 = useSharedValue(rh(0));
    const h2 = useSharedValue(rw(12));

    const handleAccount = () => {
        if (isNotification) {
            h1.value = withSpring(rh(10), { duration: 1500 });
            h2.value = withSpring(rh(20), { duration: 1000 });
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
                            <TrashIcon size={rf(3)} color={'#FFF'} />
                        </View>
                        <Text style={{
                            color: '#FFF'
                        }}>Delete account</Text>
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
    return (
        <Animated.View style={{
            width: '100%',
            height: h,
            paddingHorizontal: rw(3),
            paddingVertical: rh(1),
            overflow: 'hidden',
            marginTop: rh(2)
        }}>
            <Text style={{
                color: '#FFF'
            }}>Do you want to delete youe account ?</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: rw(5),
                paddingVertical: rh(2)
            }}>
                <TouchableOpacity style={{
                    backgroundColor:'#FFF',
                    borderRadius: 5
                }}>
                    <Text style={{
                        color: '#000',
                        paddingHorizontal: rw(10),
                        paddingVertical: rh(1)
                    }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderRadius: 5,
                    backgroundColor:'red'
                }}>
                    <Text style={{
                        color: '#FFF',
                        paddingHorizontal: rw(10),
                        paddingVertical: rh(1)
                    }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default DeleteAccount
