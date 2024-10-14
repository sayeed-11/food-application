import { View, Text, SafeAreaView, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { EnvelopeIcon } from 'react-native-heroicons/solid';

const PasswordRecover = ({ navigation }) => {
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
                }}>Password recovery</Text>
                <Text style={{
                    fontSize: rf(2),
                    color: '#FFF',
                    fontWeight: 400,
                }}>Enter your email to recover your password</Text>

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
                    marginTop:rh(4)
                }}>
                    <View style={{
                        backgroundColor: '#FFF',
                        padding: rw(2.5),
                        borderRadius: 50,
                        borderWidth: 1.5,
                        borderColor: 'orange'
                    }}>
                        <EnvelopeIcon size={rf(3)} color={'orange'} />
                    </View>
                    <TextInput selectionColor={'#FFF'} style={{
                        flex: 1,
                        paddingVertical: rh(1.6),
                        paddingHorizontal: rw(2),
                        color: '#FFF'
                    }} placeholder='Enter email id' placeholderTextColor={'gray'} />
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
                    marginTop: rh(2),
                    elevation: 10
                }} onPress={() => {navigation.navigate('OTPsection')}}>
                    <Text style={{
                        color: 'orange',
                        paddingVertical: rh(2),
                        textAlign: 'center',
                        width: '100%',
                        fontWeight: 700,
                        fontSize: rf(1.5)
                    }}>Recover password</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )
}

export default PasswordRecover