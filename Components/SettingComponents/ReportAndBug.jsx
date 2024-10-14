import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable, TextInput, } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { BeakerIcon, BellAlertIcon, BugAntIcon, ChevronLeftIcon, ChevronRightIcon, EnvelopeIcon, ExclamationTriangleIcon, KeyIcon, ShieldCheckIcon, TrashIcon } from 'react-native-heroicons/outline';
import { Cog6ToothIcon, UserIcon } from 'react-native-heroicons/solid';

import Animated, { useSharedValue, withTiming, withSpring } from 'react-native-reanimated';

import { RadioButton, Switch } from 'react-native-paper';

import { Dropdown } from 'react-native-element-dropdown';



const ReportAndBug = () => {
    const [isNotification, setNotification] = useState(true);
    const h2 = useSharedValue(rw(12));

    const handleAccount = () => {
        if (isNotification) {
            h2.value = withSpring(rw(100), { duration: 1000 });
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
                            <ExclamationTriangleIcon size={rf(3)} color={'#FFF'} />
                        </View>
                        <Text style={{
                            color: '#FFF'
                        }}>Report and Bug</Text>
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
            borderRadius:2
        }}>
            <View style={{
                gap: rh(2)
            }}>
                <Text style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: rf(2)
                }}>Report a Bug</Text>

                <View style={{
                    flexDirection: 'row',
                    gap: rw(2),
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: '#000',
                        fontWeight:600
                    }}>I would like to</Text>
                    <View>
                        <Dropdown
                            style={{
                                borderColor: '#FFF',
                                backgroundColor: '#FFF',
                                width: rw(55),
                                color: 'gray',
                                borderRadius: 5,
                                paddingHorizontal: rw(1)
                            }}
                            placeholderStyle={{
                                color:'#000'
                            }}
                            // selectedTextStyle={styles.selectedTextStyle}
                            // inputSearchStyle={styles.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            placeholderTextColor={'#000'}
                            data={[1, 2, 3, 4, 5]}
                            search
                            maxHeight={400}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select an option' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                null
                                // <AntDesign
                                //     style={styles.icon}
                                //     color={isFocus ? 'blue' : 'black'}
                                //     name="Safety"
                                //     size={25}
                                // />
                            )}
                        />
                    </View>
                </View>


                <View>
                    <Text style={{
                        color: '#000',
                        fontWeight:600
                    }}>Title</Text>
                    <TextInput
                        placeholder='Enter a title'
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
                    }}>Description</Text>
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
                            placeholder='Enter a description'
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


export default ReportAndBug