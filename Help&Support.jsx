import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';
import { ChevronLeftIcon, LifebuoyIcon } from 'react-native-heroicons/outline'
import Animated, { FadeInLeft, FadeInRight, useSharedValue, withTiming } from 'react-native-reanimated';



const HelpAndSupport = ({ navigation }) => {
    const anim1 = useSharedValue(rh(-50))

    useEffect(() => {
        setTimeout(() => {
            anim1.value = withTiming(rh(0), { duration: 500 });
        })
    })
    return (
        <SafeAreaView>
            <StatusBar style='light' />
            <Animated.View style={{
                width: rw(100),
                height: rh(20),
                backgroundColor: 'orange',
                paddingVertical: rh(5),
                paddingHorizontal: rw(5),
                position: 'relative',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                elevation: 10,
                top: anim1
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    zIndex: 100
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        padding: rw(3),
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#FFF',
                    }} onPress={() => { navigation.goBack() }}>
                        <ChevronLeftIcon size={rw(6)} color={"#FFF"} strokeWidth={rf(0.3)} />
                    </TouchableOpacity>

                    <Text style={{
                        textAlign: 'center',
                        width: rw(70),
                        fontWeight: 600,
                        fontSize: rf(3),
                        color: '#FFF'
                    }}>Help & Support</Text>
                </View>

                <View style={{
                    position: 'absolute'
                }}>
                    <LifebuoyIcon size={rw(38)} color={'rgba(0,0,0,0.1)'} />
                </View>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}>
                    <LifebuoyIcon size={rw(25)} color={'rgba(0,0,0,0.1)'} />
                </View>
                <View style={{
                    position: 'absolute',
                    top: rh(5),
                    right: rw(20)
                }}>
                    <LifebuoyIcon size={rw(10)} color={'rgba(0,0,0,0.1)'} />
                </View>
            </Animated.View>

            <ScrollView contentContainerStyle={{
                paddingHorizontal: rw(3),
                paddingTop: rh(3),
                paddingBottom: rh(20),
                gap: rh(2)
            }}>

                <Animated.View entering={FadeInLeft.duration(300).delay(300).springify()} style={{
                    gap: rh(1)
                }}>
                    <Text style={{
                        fontSize: rf(2.5),
                        fontWeight: 600
                    }}>Support</Text>
                    <Text style={{
                        fontWeight: 900
                    }}>FAQs</Text>
                    <View style={{
                        gap: rh(0.5)
                    }}>
                        <Text style={{
                            color: 'orange',
                            fontWeight: 500,
                            fontSize: rf(2)
                        }}>•How do I manage my account?</Text>
                        <Text style={{
                            color: 'rgba(0,0,0,0.7)',
                            paddingLeft: rw(3)
                        }}>You can manage your account by navigating to the account settings section in the app.</Text>
                    </View>
                    <View style={{
                        gap: rh(0.5)
                    }}>
                        <Text style={{
                            color: 'orange',
                            fontWeight: 500,
                            fontSize: rf(2)
                        }}>•How do I place an order?</Text>
                        <Text style={{
                            color: 'rgba(0,0,0,0.7)',
                            paddingLeft: rw(3)
                        }}>To place an order, simply browse the menu, select the items you want, and proceed to checkout.</Text>
                    </View>
                </Animated.View>

                <Animated.View entering={FadeInLeft.duration(300).delay(300).springify()} style={{ gap: rh(0.5) }}>
                    <Text style={{
                        color: 'orange',
                        fontWeight: 500,
                        fontSize: rf(2)
                    }}>Contact Information</Text>
                    <View>
                        <Text style={{
                            color: 'rgba(0,0,0,0.7)',
                            paddingLeft: rw(3)
                        }}>Email: support@example.com</Text>
                        <Text style={{
                            color: 'rgba(0,0,0,0.7)',
                            paddingLeft: rw(3)
                        }}>Phone: 1-800-123-4567</Text>
                    </View>
                </Animated.View>


                <Animated.View entering={FadeInRight.duration(300).delay(500).springify()} style={{
                    gap: rh(1),
                    marginTop: rh(2)
                }}>
                    <Text style={{
                        fontSize: rf(2.5),
                        fontWeight: 600
                    }}>Help</Text>
                    <Text>We understand that sometimes navigating through an app can be a bit challenging, so we're here to help you make the most out of your experience. Whether you're a new user or a seasoned pro, this help page aims to address common queries and provide guidance on using our app effectively.</Text>

                    <View style={{
                        gap: rh(1),
                        marginTop: rh(1.5)
                    }}>
                        <Text style={{
                            fontSize: rf(2),
                            fontWeight: 700
                        }}>Getting Started:</Text>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Creating an Account:</Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>To access all features of our app, you'll need to create an account. Simply click on the "Sign Up" button and follow the prompts to enter your details.</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Logging In:</Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>If you already have an account, just click on the "Log In" button and enter your credentials.</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Forgot Password: </Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>No worries! If you forget your password, you can easily reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email address to reset your password.</Text>
                        </View>
                    </View>

                    <View style={{
                        marginTop: rh(2),
                        gap: rh(1.5)
                    }}>
                        <Text style={{
                            fontSize: rf(2),
                            fontWeight: 700
                        }}>Exploring the App:</Text>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Browsing Restaurants:</Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>Use the search bar or browse through categories to find restaurants that match your cravings.</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Viewing Menus:</Text>
                            <Text>Once you've selected a restaurant, explore their menu to find your favorite dishes.</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Placing Orders: </Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>Ready to order? Add items to your cart, review your order, and proceed to checkout. Don't forget to select your preferred payment method!</Text>
                        </View>
                    </View>


                    <View style={{
                        marginTop: rh(2),
                        gap: rh(1.5)
                    }}>
                        <Text style={{
                            fontSize: rf(2),
                            fontWeight: 700
                        }}>Managing Your Account:</Text>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Profile Settings:</Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>Update your profile information, including your name, email, and address, to ensure smooth transactions.</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Order History: </Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>Keep track of your past orders for easy reordering or reference.</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: 'orange',
                                fontWeight: 500,
                                fontSize: rf(2)
                            }}>Payment Methods: </Text>
                            <Text style={{
                                color: 'rgba(0,0,0,0.7)',
                                paddingLeft: rw(3)
                            }}>Add or remove payment methods and set a default payment option for quick and convenient checkout.</Text>
                        </View>
                    </View>
                </Animated.View>



            </ScrollView>

        </SafeAreaView>
    )
}

export default HelpAndSupport