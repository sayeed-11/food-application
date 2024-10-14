import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Pressable, } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import formImage from '../../assets/food/formImage.png';
import foodTitle from '../../assets/food/food-title.png';
import { EyeDropperIcon, EyeIcon, EyeSlashIcon, KeyIcon, UserIcon } from 'react-native-heroicons/solid';

import { KeyboardAvoidingView, ScrollView } from 'react-native';
import Animated, { FadeInDown, FadeInLeft, FadeInRight, FadeInUp } from 'react-native-reanimated';


const LogInForm = ({navigation}) => {
    const [username,setUsername] = useState("");
    const [password,setpassword] = useState("");
    const [hide, setHide] = useState(true); 

    const handleSubmit = () => {
        if(username === "username" && password === "password"){
            navigation.navigate('Home');
        }
        setUsername("");
        setpassword("");
    }

    const handleSecureText = () => {
        setHide(!hide)
    }
    return (
        <KeyboardAvoidingView style={{
           flex:1,
        backgroundColor:'orange'
        }}>
            <ScrollView>
                <View style={{
                    width:rw(100),
                    height:rh(100),
                    overflow:"hidden",
                }}>
                    <StatusBar style='dark' />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        transform: [{ translateX: rh(-10) }, { translateY: rh(-15) }],

                    }}>
                        <Animated.Image entering={FadeInUp.duration(1000).springify()} style={{
                            width: rh(60),
                            height: rh(60),
                        }} source={formImage} />
                    </View>

                    <View style={{
                        transform: [{ translateY: rh(-15) }],
                    }}>
                        <View style={{
                            transform: [{ translateY: rh(-3) }],
                        }}>
                            <Animated.Image entering={FadeInUp.duration(1000).springify()} style={{
                                width: rw(70),
                                height: rh(10)
                            }} source={foodTitle} />
                        </View>


                        <View style={{
                            paddingHorizontal: rw(5),
                            gap: rh(1),
                        }}>
                            <Animated.View entering={FadeInLeft.duration(500).delay(400).springify()} style={{
                                gap: rh(0.5)
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontWeight: 500,
                                    paddingLeft: rw(2)
                                }}>Username</Text>
                                <View style={{
                                    borderRadius: 50,
                                    backgroundColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: rw(1),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: rw(1),
                                    borderWidth: 1.5,
                                    borderColor: '#FFF'
                                }}>
                                    <View style={{
                                        backgroundColor: '#FFF',
                                        padding: rh(1),
                                        borderRadius: 50,
                                        borderWidth: 1.5,
                                        borderColor: 'orange'
                                    }}>
                                        <UserIcon size={rf(3)} color={'orange'} />
                                    </View>
                                    <TextInput value={username} onChangeText={text => {setUsername(text)}} selectionColor={'#FFF'} style={{
                                        flex: 1,
                                        paddingVertical: rh(1.3),
                                        paddingHorizontal: rw(2),
                                        color: '#FFF'
                                    }} placeholder='Enter user id' placeholderTextColor={'gray'} />
                                </View>
                            </Animated.View>

                            <Animated.View entering={FadeInLeft.duration(500).delay(500).springify()} style={{
                                gap: rh(0.5),
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontWeight: 500,
                                    paddingLeft: rw(2)
                                }}>Password</Text>
                                <View style={{
                                    borderRadius: 50,
                                    backgroundColor: 'black',
                                    overflow: 'hidden',
                                    paddingHorizontal: rw(1),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: rw(1),
                                    borderWidth: 1.5,
                                    borderColor: '#FFF'
                                }}>
                                    <View style={{
                                        backgroundColor: '#FFF',
                                        padding: rh(1),
                                        borderRadius: 50,
                                        borderWidth: 1.5,
                                        borderColor: 'orange'
                                    }}>
                                        <KeyIcon size={rf(3)} color={'orange'} />
                                    </View>
                                    <TextInput value={password} onChangeText={text => {setpassword(text)}} selectionColor={'#FFF'} secureTextEntry={hide} style={{
                                        flex: 1,
                                        paddingVertical: rh(1.3),
                                        paddingHorizontal: rw(2),
                                        color: '#FFF'
                                    }} placeholder='Enter password' placeholderTextColor={'gray'} />

                                    <Pressable onPress={handleSecureText} style={{
                                        padding:rw(2),
                                        borderRadius:50
                                    }}>
                                        {
                                            hide ? <EyeSlashIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'}/> :
                                            <EyeIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'}/>
                                        }
                                    </Pressable>
                                </View>
                            </Animated.View>

                            <TouchableOpacity onPress={() => {navigation.navigate('PasswordRecover')}}>
                                <Animated.Text entering={FadeInLeft.duration(500).delay(600).springify()} style={{
                                    color: '#FFF',
                                    paddingLeft: rw(2),
                                    fontWeight: 500,
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "solid",
                                    textDecorationColor: "#FFF",
                                }}>Forgot Password?</Animated.Text>
                            </TouchableOpacity>

                            <Animated.View entering={FadeInLeft.duration(500).delay(700).springify()}>
                                <TouchableOpacity style={{
                                    borderRadius: 50,
                                    backgroundColor: '#FFF',
                                    overflow: 'hidden',
                                    paddingHorizontal: rw(1),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: rw(1),
                                    borderWidth: 1.5,
                                    borderColor: '#FFF',
                                    marginTop: rh(2),
                                    elevation: 10
                                }} onPress={handleSubmit}>
                                    <Text style={{
                                        color: 'orange',
                                        paddingVertical: rh(1.3),
                                        textAlign: 'center',
                                        width: '100%',
                                        fontWeight: 500,
                                        fontSize: rf(2.3)
                                    }}>LOG IN</Text>
                                </TouchableOpacity>
                            </Animated.View>

                            <Animated.View entering={FadeInLeft.duration(500).delay(800).springify()} style={{
                                flexDirection: 'row',
                                gap: rw(2),
                                marginTop: rh(5),
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: 500,
                                }}>Dont'n have any account?</Text>
                                <TouchableOpacity onPress={() => {navigation.navigate('SignUpForm')}}>
                                    <Text style={{
                                        color: '#FFF',
                                        fontWeight: 500,
                                        textDecorationLine: "underline",
                                        textDecorationStyle: "solid",
                                        textDecorationColor: "#FFF",
                                    }}>Sign up</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LogInForm