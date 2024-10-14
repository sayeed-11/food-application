import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';

import { PhotoIcon, UserIcon, DevicePhoneMobileIcon, CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ChevronLeftIcon, PencilSquareIcon } from 'react-native-heroicons/outline';
import { RadioButton } from 'react-native-paper';
import { KeyboardAvoidingView } from 'react-native';

import Animated, { FadeInDown, FadeInLeft, FadeInUp, useSharedValue, withTiming } from 'react-native-reanimated';

const EditProfile = ({ route, navigation }) => {
    const { userProfilePic } = route.params;
    const anim1 = useSharedValue(rh(-50))

    useEffect(() => {
        setTimeout(() => {
            anim1.value = withTiming(rh(0), { duration: 500 });
        })
    })
    return (
        <KeyboardAvoidingView style={{
            flex: 1,
        }}>
            <ScrollView>
                <SafeAreaView style={{
                    alignItems: 'center',
                    backgroundColor: '#000'
                }}>
                    <StatusBar style='light' />
                    <Animated.View style={{
                        width: rw(100),
                        height: rh(40),
                        backgroundColor: 'orange',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        top: anim1
                    }}>
                        <Animated.Text entering={FadeInUp.duration(300).delay(500).springify()} style={{
                            fontSize: rf(2.5),
                            marginBottom: rh(2),
                            fontWeight: 600
                        }}>User Profile</Animated.Text>
                        <View style={{
                            gap: rh(1),
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Animated.View entering={FadeInDown.duration(300).delay(500).springify()} style={{
                                borderWidth: 2,
                                borderColor: '#FFF',
                                borderRadius: rw(40),
                                position: 'relative'
                            }}>
                                <Animated.Image style={{
                                    width: rh(20),
                                    height: rh(20),
                                    borderRadius: rw(40)
                                }} sharedTransitionTag='user' source={userProfilePic} />
                                <TouchableOpacity style={{
                                    position: 'absolute',
                                    backgroundColor: '#FFF',
                                    padding: rw(2),
                                    borderRadius: 50,
                                    right: rw(1),
                                    bottom: rh(1),
                                    borderWidth: 2,
                                    borderColor: '#FFF'
                                }}>
                                    <PhotoIcon size={rw(5)} color={'rgba(0,0,0,1)'} />
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View entering={FadeInDown.duration(300).delay(500).springify()} style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: rw(2)
                            }}>
                                <Text style={{
                                    fontSize: rf(3),
                                    fontWeight: 500,
                                    color: '#FFF'
                                }}>Cristiano Ronaldo</Text>
                                <TouchableOpacity style={{
                                    padding: rh(1),
                                    backgroundColor: '#000',
                                    borderRadius: 50
                                }}>
                                    <PencilSquareIcon size={rf(2.5)} color={'#FFF'} />
                                </TouchableOpacity>
                            </Animated.View>
                        </View>


                        <Animated.View entering={FadeInLeft.duration(300).delay(500).springify()} style={{
                            position: "absolute",
                            top: rh(4),
                            left: rw(4),
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#000',
                                padding: rw(3),
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: '#FFF'
                            }} onPress={() => { navigation.goBack() }}>
                                <ChevronLeftIcon size={rw(5)} strokeWidth={rf(0.3)} color={'#FFF'} />
                            </TouchableOpacity>
                        </Animated.View>

                    </Animated.View>



                    <Animated.View entering={FadeInDown.duration(500).delay(600).springify()}>
                        <View style={{
                            width: rw(95),
                            height: rh(64),
                            backgroundColor: '#FFF',
                            transform: [{ translateY: rh(-3) }],
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <Animated.View style={{
                                gap: rh(1)
                            }}>
                                <UserName />
                                <MobileNumber />
                                <DateOfBirth />
                                <Location />
                                <Gender />
                                <SaveButton />
                            </Animated.View>
                        </View>
                    </Animated.View>
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default EditProfile




const UserName = () => {
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(700).springify()} style={{
            alignItems: 'center',
            width: rw(85),
            gap: rh(0.5)
        }}>
            <Text style={{
                color: '#000',
                textAlign: 'left',
                width: rw(80),
                paddingLeft: rw(2),
                color: '#000',
                fontWeight: 500
            }}>Username</Text>
            <View style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                padding: rh(0.3),
                borderRadius: 50,
                borderWidth: 2,
                borderColor: 'orange'
            }}>
                <View style={{
                    padding: rf(0.8),
                    backgroundColor: 'orange',
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: '#FFF'
                }}>
                    <UserIcon size={rf(3)} color={'#FFF'} />
                </View>
                <TextInput selectionColor={'#FFF'} style={{
                    backgroundColor: 'transparent',
                    color: '#FFF',
                    flex: 1,
                    paddingHorizontal: rw(2)
                }} placeholder='Username' placeholderTextColor={'gray'} />
            </View>
        </Animated.View>
    )
}


const MobileNumber = () => {
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(800).springify()} style={{
            alignItems: 'center',
            width: rw(85),
            gap: rh(0.5)
        }}>
            <Text style={{
                color: '#000',
                textAlign: 'left',
                width: rw(80),
                paddingLeft: rw(2),
                color: '#000',
                fontWeight: 500
            }}>Phone Number</Text>
            <View style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                padding: rh(0.3),
                borderRadius: 50,
                borderWidth: 2,
                borderColor: 'orange'
            }}>
                <View style={{
                    padding: rh(0.8),
                    backgroundColor: 'orange',
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: '#FFF'
                }}>
                    <DevicePhoneMobileIcon size={rf(3)} color={'#FFF'} />
                </View>
                <TextInput selectionColor={'#FFF'} style={{
                    backgroundColor: 'transparent',
                    color: '#FFF',
                    flex: 1,
                    paddingHorizontal: rw(2)
                }} placeholder='Phone Number' placeholderTextColor={'gray'} />
            </View>
        </Animated.View>
    )
}




const DateOfBirth = () => {
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(900).springify()} style={{
            alignItems: 'center',
            width: rw(85),
            gap: rh(0.5)
        }}>
            <Text style={{
                color: '#000',
                textAlign: 'left',
                width: rw(80),
                paddingLeft: rw(2),
                color: '#000',
                fontWeight: 500
            }}>Date of Birth</Text>
            <View style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                padding: rh(0.3),
                borderRadius: 50,
                borderWidth: 2,
                borderColor: 'orange'
            }}>
                <View style={{
                    padding: rh(0.8),
                    backgroundColor: 'orange',
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: '#FFF'
                }}>
                    <CalendarDaysIcon size={rf(3)} color={'#FFF'} />
                </View>
                <TextInput selectionColor={'#FFF'} style={{
                    backgroundColor: 'transparent',
                    color: '#FFF',
                    flex: 1,
                    paddingHorizontal: rw(2)
                }} placeholder='DD / MM / YY' placeholderTextColor={'gray'} />
            </View>
        </Animated.View>
    )
}


const Location = () => {
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(1000).springify()} style={{
            alignItems: 'center',
            width: rw(85),
            gap: rh(0.5),
        }}>
            <Text style={{
                color: '#000',
                textAlign: 'left',
                width: rw(80),
                paddingLeft: rw(2),
                fontWeight: 500
            }}>Location</Text>
            <View style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                padding: rh(0.3),
                borderRadius: 50,
                borderWidth: 2,
                borderColor: 'orange'
            }}>
                <View style={{
                    padding: rh(0.8),
                    backgroundColor: 'orange',
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: '#FFF'
                }}>
                    <MapPinIcon size={rf(3)} color={'#FFF'} />
                </View>
                <TextInput selectionColor={'#FFF'} style={{
                    backgroundColor: 'transparent',
                    color: '#FFF',
                    flex: 1,
                    paddingHorizontal: rw(2)
                }} placeholder='Location' placeholderTextColor={'gray'} />
            </View>
        </Animated.View>
    )
}


const Gender = () => {
    const [checked, setChecked] = useState('first');
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(1100).springify()}>
            <Text style={{
                color: '#000',
                textAlign: 'left',
                width: rw(85),
                paddingLeft: rw(2),
                fontWeight: 500
            }}>Gender</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <RadioButton
                        color='orange'
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                    <Text style={{
                        color: '#000',
                        fontWeight: 500,
                        fontSize:rf(1.5)
                    }}>Male</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <RadioButton
                        color='orange'
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                    <Text style={{
                        color: '#000',
                        fontWeight: 500,
                        fontSize:rf(1.5)
                    }}>Female</Text>
                </View>
            </View>
        </Animated.View>
    )
}



const SaveButton = () => {
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(1200).springify()}>
            <TouchableOpacity style={{
                width: rw(85),
                backgroundColor: 'orange',
                borderRadius: 50,
                borderWidth: 2,
                borderColor: 'orange',
                elevation: 2
            }}>
                <Text style={{
                    textAlign: 'center',
                    padding: rh(1.3),
                    color: '#FFF',
                    fontWeight: 700,
                    fontSize: rf(2),
                }}>SAVE</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

