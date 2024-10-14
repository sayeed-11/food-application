import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';
import { CheckIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from 'react-native-heroicons/solid';

const ResetPassword = ({ navigation }) => {
    const [hide, setHide] = useState(true);
    const handleSecureText = () => {
        setHide(!hide)
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'orange',
            paddingTop: rh(5),
            paddingHorizontal: rw(5),
            gap: rh(10)
        }}>
            <StatusBar style='light' />
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: rw(3)
            }} onPress={() => { navigation.goBack() }}>
                <View style={{
                    backgroundColor: '#000',
                    padding: rw(1),
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: '#FFF'
                }}>
                    <ChevronLeftIcon size={(rf(4))} strokeWidth={2} color={'#FFF'} />
                </View>
                <Text style={{
                    fontSize: rf(2),
                    fontWeight: 700,
                    color: '#FFF'
                }}>Go Back</Text>
            </TouchableOpacity>


            <View style={{
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: rf(3),
                    fontWeight: 700,
                    color: '#FFF'
                }}>Reset your password</Text>
                <Text style={{
                    fontSize: rf(2),
                    color: '#FFF',
                    fontWeight: 400,
                }}>Please enter your new password</Text>

                <View style={{
                    borderRadius: 50,
                    backgroundColor: 'black',
                    overflow: 'hidden',
                    paddingHorizontal: rw(1),
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: rw(1),
                    borderWidth: 1.5,
                    borderColor: '#FFF',
                    marginTop: rh(4)
                }}>
                    <View style={{
                        backgroundColor: '#FFF',
                        padding: rw(2.5),
                        borderRadius: 50,
                        borderWidth: 1.5,
                        borderColor: 'orange'
                    }}>
                        <LockClosedIcon size={rf(3)} color={'orange'} />
                    </View>
                    <TextInput selectionColor={'#FFF'} secureTextEntry={hide} style={{
                        flex: 1,
                        paddingVertical: rh(1.6),
                        paddingHorizontal: rw(2),
                        color: '#FFF'
                    }} placeholder='Enter your new password' placeholderTextColor={'gray'} />
                    <Pressable onPress={handleSecureText} style={{
                        padding: rw(2),
                        borderRadius: 50
                    }}>
                        {
                            hide ? <EyeSlashIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'} /> :
                                <EyeIcon size={rf(3.5)} color={'rgba(255,255,255,0.5)'} />
                        }
                    </Pressable>
                </View>

                <View style={{
                    paddingVertical: rh(3),
                    width: '100%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: rw(3)
                    }}>
                        <View style={{
                            backgroundColor: '#FFF',
                            borderRadius: 50,
                            padding: rw(1)
                        }}>
                            <CheckIcon size={rf(2)} strokeWidth={2} color={'#000'} />
                        </View>
                        <Text style={{
                            fontWeight: 500,
                            fontSize: rf(1.7),
                            color: '#FFF'
                        }}>Your password must contains.</Text>
                    </View>
                    <View style={{
                        padding: rh(2)
                    }}>
                        <Text style={{
                            color: 'rgba(255,255,255,1)',
                        }}>At least 8 characters</Text>
                        <Text style={{
                            color: 'rgba(255,255,255,1)',
                            
                        }}>Contain a number</Text>
                    </View>
                </View>

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
                    elevation: 10
                }} onPress={() => {navigation.navigate('LogInForm')}}>
                    <Text style={{
                        color: 'orange',
                        paddingVertical: rh(1.8),
                        textAlign: 'center',
                        width: '100%',
                        fontWeight: 700,
                        fontSize: rf(1.7)
                    }}>Done</Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

export default ResetPassword