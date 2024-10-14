import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { BeakerIcon, BellAlertIcon, BugAntIcon, ChatBubbleBottomCenterIcon, ChatBubbleLeftRightIcon, ChevronLeftIcon, ChevronRightIcon, EnvelopeIcon, ExclamationTriangleIcon, KeyIcon, ShieldCheckIcon, TrashIcon } from 'react-native-heroicons/outline';
import { Cog6ToothIcon, UserIcon } from 'react-native-heroicons/solid';

import Animated, { useSharedValue, withTiming, withSpring } from 'react-native-reanimated';

import { RadioButton, Switch } from 'react-native-paper';

import { Dropdown } from 'react-native-element-dropdown';


const FeedbackForm = () => {
    const [isNotification, setNotification] = useState(true);
    const h2 = useSharedValue(rw(12));

    const handleAccount = () => {
        if (isNotification) {
            h2.value = withSpring(rw(108), { duration: 1000 });
            setNotification(!isNotification);
        } else {
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
                overflow: 'hidden'

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
                            padding: rw(2)
                        }}>
                            <ChatBubbleLeftRightIcon size={rf(3)} color={'#FFF'} />
                        </View>
                        <Text style={{
                            color: '#FFF'
                        }}>Feedback Form</Text>
                    </View>
                    <View style={{
                        transform: [{ rotate: isNotification ? '0deg' : '90deg' }],
                    }}>
                        <ChevronRightIcon size={rf(3)} color={'#FFF'} />
                    </View>
                </Pressable>

                <NotificationSection />
            </Animated.View>
        </View>
    )
}

const NotificationSection = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <Animated.View style={{
            width: '100%',
            paddingHorizontal: rw(3),
            paddingVertical: rh(1),
            overflow: 'hidden',
            marginTop: rh(2),
            backgroundColor:'orange',
            borderRadius:2,
            overflow:'hidden'
        }}>
            <View style={{
                gap: rh(2)
            }}>
                <Text style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: rf(2)
                }}>Give Your Feedback</Text>


                <View>
                    <Text style={{
                        color: '#000',
                        fontWeight:600
                    }}>Your Name</Text>
                    <TextInput
                        placeholder='Enter Your Name'
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        style={{
                            backgroundColor: 'rgba(0,0,0,1)',
                            borderWidth: 1,
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 5,
                            paddingHorizontal: rw(2),
                            paddingVertical: rh(1),
                            color:'#FFF'
                        }} />
                </View>
                <View>
                    <Text style={{
                        color: '#000',
                        fontWeight:600
                    }}>Your Email</Text>
                    <TextInput
                        placeholder='Enter Your Email'
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        style={{
                            backgroundColor: 'rgba(0,0,0,1)',
                            borderWidth: 1,
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            borderRadius: 5,
                            paddingHorizontal: rw(2),
                            paddingVertical: rh(1),
                            color:'#FFF'
                        }} />
                </View>


                <View>
                    <Text style={{
                        color: '#000',
                        fontWeight:600
                    }}>Feedback</Text>
                    <View style={{
                                backgroundColor: 'rgba(0,0,0,1)',
                                borderWidth: 1,
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: 5,
                                paddingHorizontal: rw(2),
                                paddingVertical: rh(1),
                                height: rw(31),
                            }} >
                        <TextInput
                            multiline={true}
                            placeholder='Enter Your Feedback'
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                           style={{
                            maxHeight:rh(15),
                            color:'#FFF'
                           }}
                        />
                    </View>
                </View>


            </View>
        </Animated.View>
    )
}


export default FeedbackForm