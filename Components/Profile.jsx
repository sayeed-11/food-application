import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInRight, FadeInUp, FadeOutUp, useSharedValue, withSpring } from 'react-native-reanimated';

import { ArrowRightIcon, ArrowRightStartOnRectangleIcon, ChevronLeftIcon, Cog6ToothIcon, HeartIcon, LifebuoyIcon, PencilIcon } from 'react-native-heroicons/outline';
import { PencilSquareIcon } from 'react-native-heroicons/outline';


const Profile = ({ route, navigation }) => {
    const { userProfilePic, categories } = route.params;
    const val1 = useSharedValue([{ translateY: 200 }]);
    useEffect(() => {
        setTimeout(() => {
            val1.value = withSpring([{ translateY: 0 }]);
        }, 1000)
    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'orange'
        }}>
            <StatusBar style='light' />
            <Animated.View entering={FadeInUp.duration(500).springify()} style={{
                width: rw(100),
                height: rh(50),
                overflow: 'hidden',
                position: 'relative'
            }}>
                <Animated.Image style={{
                    width: '100%',
                    height: '100%'
                }} sharedTransitionTag='user' source={userProfilePic} />
                <Animated.View entering={FadeInUp.duration(500).delay(500).springify()} style={{
                    position: "absolute",
                    top: rh(4),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingHorizontal: rw(2)
                }} >
                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        padding: rw(3),
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#FFF'
                    }} onPress={() => { navigation.goBack() }}>
                        <ChevronLeftIcon size={rw(6)} color={"#FFF"} strokeWidth={rf(0.3)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        padding: rw(3),
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#FFF'
                    }} onPress={() => { }}>
                        <PencilSquareIcon size={rw(6)} color={"#FFF"} />
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>

            <Animated.View entering={FadeInDown.duration(500).springify()} style={{
                position: "absolute",
                width: rw(100),
                height: rh(60),
                backgroundColor: '#FFF',
                bottom: 0,
                borderTopLeftRadius: rw(10),
                borderTopRightRadius: rw(10),
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Animated.View entering={FadeInDown.duration(500).delay(500).springify()} style={{
                    height: rh(12),
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: rf(3.5),
                        fontWeight: 700,
                        color: 'orange'
                    }}>Cristiano Ronaldo</Text>
                    <Text style={{
                        textAlign: 'center',
                        color: 'rgba(0,0,0,0.3)'
                    }}>cristiano07@gmail.com</Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.duration(500).delay(700).springify()} style={{
                    width: rw(100),
                    height: rh(48),
                    backgroundColor: 'orange',
                    borderTopLeftRadius: rw(10),
                    borderTopRightRadius: rw(10),
                    paddingHorizontal: rw(5),
                    justifyContent: 'center',
                    gap: rh(0.5),
                }}>
                    {/* 1st */}
                    <Animated.View entering={FadeInRight.duration(500).delay(800).springify()} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: rh(0.3),
                        backgroundColor: 'rgba(0,0,0,1)',
                        borderRadius: 50,
                        paddingLeft: rw(5),
                        borderWidth:1,
                        borderColor:'#FFF'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: rw(3)
                        }}>
                            <PencilIcon size={rf(3)} color={'#FFF'} />
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 700,
                                fontSize: rf(2)
                            }}>Edit Profile</Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: 'orange',
                            padding: rh(1.5),
                            borderRadius: 50
                        }} onPress={() => {navigation.navigate('EditProfile', {userProfilePic})}}>
                            <ArrowRightIcon size={rf(3)} color={'#FFF'} />
                        </TouchableOpacity>
                    </Animated.View>

                    {/* 2nd */}
                    <Animated.View entering={FadeInLeft.duration(500).delay(900).springify()} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: rh(0.3),
                        backgroundColor: 'rgba(0,0,0,1)',
                        borderRadius: 50,
                        paddingLeft: rw(5),
                        borderWidth:1,
                        borderColor:'#FFF'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: rw(3)
                        }}>
                            <Cog6ToothIcon size={rf(3)} color={'#FFF'} />
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 700,
                                fontSize: rf(2)
                            }}>Settings</Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: 'orange',
                            padding: rh(1.5),
                            borderRadius: 50
                        }} onPress={() => {navigation.navigate('Settings')}}>
                            <ArrowRightIcon size={rf(3)} color={'#FFF'} />
                        </TouchableOpacity>
                    </Animated.View>

                    {/* 3rd */}
                    <Animated.View entering={FadeInRight.duration(500).delay(1000).springify()} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: rh(0.3),
                        backgroundColor: 'rgba(0,0,0,1)',
                        borderRadius: 50,
                        paddingLeft: rw(5),
                        borderWidth:1,
                        borderColor:'#FFF'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: rw(3)
                        }}>
                            <LifebuoyIcon size={rf(3)} color={'#FFF'} />
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 700,
                                fontSize: rf(2)
                            }}>Help & Support</Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: 'orange',
                            padding: rh(1.5),
                            borderRadius: 50
                        }} onPress={() => {navigation.navigate('HelpAndSupport')}}>
                            <ArrowRightIcon size={rf(3)} color={'#FFF'} />
                        </TouchableOpacity>
                    </Animated.View>



                    {/* 4th */}
                    <Animated.View entering={FadeInRight.duration(500).delay(1000).springify()} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: rh(0.3),
                        backgroundColor: 'rgba(0,0,0,1)',
                        borderRadius: 50,
                        paddingLeft: rw(5),
                        borderWidth:1,
                        borderColor:'#FFF'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: rw(3)
                        }}>
                            <HeartIcon size={rf(3)} color={'#FFF'} fill={'#FFF'}/>
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 700,
                                fontSize: rf(2)
                            }}>Favourites</Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: 'orange',
                            padding: rh(1.5),
                            borderRadius: 50
                        }} onPress={() => {navigation.navigate('Favourite',{categories})}}>
                            <ArrowRightIcon size={rf(3)} color={'#FFF'} />
                        </TouchableOpacity>
                    </Animated.View>


                    {/* 5th */}
                    <Animated.View entering={FadeInLeft.duration(500).delay(1100).springify()} style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: rh(0.3),
                        backgroundColor: 'red',
                        borderRadius: 50,
                        paddingLeft: rw(5),
                        borderWidth:1,
                        borderColor:'#FFF'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: rw(3)
                        }}>
                            <ArrowRightStartOnRectangleIcon size={rf(3)} color={'#FFF'} />
                            <Text style={{
                                color: '#FFF',
                                fontWeight: 700,
                                fontSize: rf(2)
                            }}>Log Out</Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor: '#FFF',
                            padding: rh(1.5),
                            borderRadius: 50
                        }}>
                            <ArrowRightIcon size={rf(3)} color={'red'} />
                        </TouchableOpacity>
                    </Animated.View>



                </Animated.View>

            </Animated.View>
        </SafeAreaView>
    )
}

export default Profile