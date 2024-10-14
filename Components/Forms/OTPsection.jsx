import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';

const OTPsection = ({ navigation }) => {
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
                }}>Check your phone</Text>
                <Text style={{
                    fontSize: rf(2),
                    color: '#FFF',
                    fontWeight: 400,
                }}>We have sent the code in your phone</Text>

                <View style={{
                    marginTop: rh(4),
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: rw(3)
                }}>

                    <TextInput keyboardType='number-pad' selectionColor={'#FFF'} se maxLength={1} style={{
                        width: rw(17),
                        height: rw(17),
                        fontSize: rf(4),
                        textAlign: 'center',
                        borderWidth: 2,
                        borderColor: '#FFF',
                        borderRadius: 10,
                        backgroundColor: '#000',
                        color: '#FFF',
                    }} />
                    <TextInput keyboardType='number-pad' selectionColor={'#FFF'} maxLength={1} style={{
                        width: rw(17),
                        height: rw(17),
                        fontSize: rf(4),
                        textAlign: 'center',
                        borderWidth: 2,
                        borderColor: '#FFF',
                        borderRadius: 10,
                        backgroundColor: '#000',
                        color: '#FFF'
                    }} />
                    <TextInput keyboardType='number-pad' selectionColor={'#FFF'} maxLength={1} style={{
                        width: rw(17),
                        height: rw(17),
                        fontSize: rf(4),
                        textAlign: 'center',
                        borderWidth: 2,
                        borderColor: '#FFF',
                        borderRadius: 10,
                        backgroundColor: '#000',
                        color: '#FFF'
                    }} />
                    <TextInput keyboardType='number-pad' selectionColor={'#FFF'} maxLength={1} style={{
                        width: rw(17),
                        height: rw(17),
                        fontSize: rf(4),
                        textAlign: 'center',
                        borderWidth: 2,
                        borderColor: '#FFF',
                        borderRadius: 10,
                        backgroundColor: '#000',
                        color: '#FFF'
                    }} />

                </View>

                <View style={{
                    marginTop:rh(3)
                }}>
                    <Text style={{
                        color:'#FFF',
                        fontWeight:700,
                    }}>Code expire in 03:12</Text>
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
                }} onPress={() => {navigation.navigate('ResetPassword')}}>
                    <Text style={{
                        color: 'orange',
                        paddingVertical: rh(2),
                        textAlign: 'center',
                        width: '100%',
                        fontWeight: 700,
                        fontSize: rf(1.5)
                    }}>Verify</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{
                    borderRadius: 50,
                    backgroundColor: '#000',
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
                        color: '#FFF',
                        paddingVertical: rh(2),
                        textAlign: 'center',
                        width: '100%',
                        fontWeight: 700,
                        fontSize: rf(1.5)
                    }}>Send again</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )
}

export default OTPsection