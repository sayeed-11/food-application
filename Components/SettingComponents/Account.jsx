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




const Account = () => {
    const [isAccount, setAccount] = useState(true);
    const h1 = useSharedValue(rh(0));
    const h2 = useSharedValue(rw(12));

    const handleAccount = () => {
        if (isAccount) {
            h1.value = withSpring(rh(12), { duration: 1500 });
            h2.value = withSpring(rh(25), { duration: 1000 });
            setAccount(!isAccount);
        } else {
            h1.value = withSpring(rh(0), { duration: 1000 });
            h2.value = withSpring(rw(12), { duration: 1500 });
            setAccount(!isAccount);
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
                            <UserIcon size={rf(3)} color={'#FFF'} />
                        </View>
                        <Text style={{
                            color: '#FFF'
                        }}>Account</Text>
                    </View>
                    <View style={{
                        transform: [{ rotate: isAccount ? '0deg' : '90deg' }],
                    }}>
                        <ChevronRightIcon size={rf(3)} color={'#FFF'} />
                    </View>
                </Pressable>

                <AccountSection h1={h1} />
            </Animated.View>
        </View>
    )
}

const AccountSection = ({ h }) => {
    return (
        <Animated.View style={{
            width: '100%',
            height: h,
            paddingHorizontal: rw(1),
            paddingVertical: rh(1),
            overflow: 'hidden',
            marginTop: rh(2)
        }}>
            <TouchableOpacity style={{
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: rw(2),
                paddingVertical: rh(1),
                gap: rw(5)
            }}>
                <KeyIcon size={rw(4)} color={'#FFF'} />
                <Text style={{
                    color: '#FFF'
                }}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: rw(2),
                paddingVertical: rh(1),
                gap: rw(5)
            }}>
                <EnvelopeIcon size={rw(4)} color={'#FFF'} />
                <Text style={{
                    color: '#FFF'
                }}>Change Email id</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: rw(2),
                paddingVertical: rh(1),
                gap: rw(5)
            }}>
                <ShieldCheckIcon size={rw(4)} color={'#FFF'} />
                <Text style={{
                    color: '#FFF'
                }}>Privacy</Text>
            </TouchableOpacity>

        </Animated.View>
    )
}

export default Account
