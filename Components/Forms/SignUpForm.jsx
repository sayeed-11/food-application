import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import formImage from '../../assets/food/formImage.png';
import foodTitle from '../../assets/food/food-title.png';
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, KeyIcon, UserIcon } from 'react-native-heroicons/solid';

import { KeyboardAvoidingView, ScrollView } from 'react-native';
import Animated, { FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';


const SignUpForm = ({navigation}) => {
    const [hide1, setHide1] = useState(true); 
    const [hide2, setHide2] = useState(true); 

    const handleSecureText1 = () => {
        setHide1(!hide1);
    }
    const handleSecureText2 = () => {
        setHide2(!hide2);
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
                        transform: [{ translateX: rh(-10) }, { translateY: rh(-25) }],

                    }}>
                        <Animated.Image entering={FadeInUp.duration(1000).springify()} style={{
                            width: rh(55),
                            height: rh(55),
                        }} source={formImage} />
                    </View>

                    <View style={{
                        transform: [{ translateY: rh(-30) }],
                    }}>
                        <View>
                            <Animated.Image entering={FadeInUp.duration(1000).springify()} style={{
                                width: rh(40),
                                height: rh(10),
                                right:rw(-25),
                            }} source={foodTitle} />
                        </View>


                        <View style={{
                            paddingHorizontal: rw(5),
                            gap: rh(1),
                        }}>
                            <Animated.View entering={FadeInLeft.duration(300).delay(400).springify()} style={{
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
                                    <TextInput selectionColor={'#FFF'} style={{
                                        flex: 1,
                                        paddingVertical: rh(1.3),
                                        paddingHorizontal: rw(2),
                                        color: '#FFF'
                                    }} placeholder='Enter username' placeholderTextColor={'gray'} />
                                </View>
                            </Animated.View>



                            <Animated.View entering={FadeInLeft.duration(300).delay(500).springify()} style={{
                                gap: rh(0.5)
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontWeight: 500,
                                    paddingLeft: rw(2)
                                }}>Email id</Text>
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
                                        <EnvelopeIcon size={rf(3)} color={'orange'} />
                                    </View>
                                    <TextInput selectionColor={'#FFF'} style={{
                                        flex: 1,
                                        paddingVertical: rh(1.3),
                                        paddingHorizontal: rw(2),
                                        color: '#FFF'
                                    }} placeholder='Enter email id' placeholderTextColor={'gray'} />
                                </View>
                            </Animated.View>


            

                            <Animated.View entering={FadeInLeft.duration(300).delay(600).springify()} style={{
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
                                    <TextInput selectionColor={'#FFF'} secureTextEntry={hide1} style={{
                                        flex: 1,
                                        paddingVertical: rh(1.3),
                                        paddingHorizontal: rw(2),
                                        color: '#FFF'
                                    }} placeholder='Enter password' placeholderTextColor={'gray'} />
                                    <Pressable onPress={handleSecureText1} style={{
                                        padding:rw(2),
                                        borderRadius:50
                                    }}>
                                        {
                                            hide1 ? <EyeSlashIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'}/> :
                                            <EyeIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'}/>
                                        }
                                    </Pressable>
                                </View>
                            </Animated.View>


                            <Animated.View entering={FadeInLeft.duration(300).delay(700).springify()} style={{
                                gap: rh(0.5),
                            }}>
                                <Text style={{
                                    color: '#FFF',
                                    fontWeight: 500,
                                    paddingLeft: rw(2)
                                }}>Confirm password</Text>
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
                                    <TextInput selectionColor={'#FFF'} secureTextEntry={hide2} style={{
                                        flex: 1,
                                        paddingVertical: rh(1.3),
                                        paddingHorizontal: rw(2),
                                        color: '#FFF'
                                    }} placeholder='Enter confirm password' placeholderTextColor={'gray'} />

                                    <Pressable onPress={handleSecureText2} style={{
                                        padding:rw(2),
                                        borderRadius:50
                                    }}>
                                        {
                                            hide2 ? <EyeSlashIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'}/> :
                                            <EyeIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'}/>
                                        }
                                    </Pressable>
                                </View>
                            </Animated.View>

                            <Animated.View entering={FadeInLeft.duration(300).delay(800).springify()}>
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
                                }}>
                                    <Text style={{
                                        color: 'orange',
                                        paddingVertical: rh(1.3),
                                        textAlign: 'center',
                                        width: '100%',
                                        fontWeight: 500,
                                        fontSize: rf(2.3)
                                    }}>SIGN UP</Text>
                                </TouchableOpacity>
                            </Animated.View>

                            <Animated.View entering={FadeInLeft.duration(300).delay(900).springify()} style={{
                                flexDirection: 'row',
                                gap: rw(2),
                                marginTop: rh(5),
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: 500,
                                }}>Already have an account?</Text>
                                <TouchableOpacity onPress={() => {navigation.navigate('LogInForm')}}>
                                    <Text style={{
                                        color: '#FFF',
                                        fontWeight: 500,
                                        textDecorationLine: "underline",
                                        textDecorationStyle: "solid",
                                        textDecorationColor: "#FFF",
                                    }}>Log in</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default SignUpForm