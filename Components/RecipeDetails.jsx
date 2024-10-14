import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated';
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';


import { ChevronLeftIcon, FireIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

import { ClockIcon } from 'react-native-heroicons/outline'
import { UsersIcon } from 'react-native-heroicons/outline'
import { Square3Stack3DIcon } from 'react-native-heroicons/solid'

import YoutubeIframe from 'react-native-youtube-iframe';

import axios from 'axios';

const RecipeDetails = ({ route }) => {
    const { strMeal, strMealThumb, id } = route.params;
    const navigation = useNavigation();
    const [mealData, setMealData] = useState([]);

    useEffect(() => {
        getMealData(id)
    }, [])



    const getMealData = async (id) => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            if (response && response.data) {
                setMealData(response.data.meals)
            }

        } catch (error) {
            console.log('error1..', error.message);
        }
    }


    const videoId = url => {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }



    const [isliked, setLike] = useState(false);




    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            padding: rw(2),
            gap: rh(3)
        }}>
            <StatusBar style='light' />
            <View style={{
                position: 'relative'
            }}>
                <View style={{
                    elevation: 40,
                    borderRadius: 30
                }}>
                    <Animated.Image entering={FadeInDown.duration(200).springify()} style={{
                        width: '100%',
                        height: rh(50),
                        borderRadius: 30,
                    }} sharedTransitionTag={strMeal} source={{ uri: strMealThumb }} />
                </View>
                <View style={{
                    position: 'absolute',
                    top: rh(3),
                    paddingHorizontal: rw(5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} style={{
                        backgroundColor: '#000',
                        padding: rw(1.5),
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: '#FFF'
                    }}>
                        <ChevronLeftIcon size={rw(8)} strokeWidth={rf(0.2)} color={'#FFF'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        padding: rw(1.5),
                        borderRadius: 50,
                        // borderWidth: 2,
                        // borderColor: '#FFF'
                    }} onPress={() => { setLike(!isliked) }}>
                        {isliked ?
                            <HeartIcon size={rw(8)} strokeWidth={rf(0.1)} color={'red'} fill={'red'} />
                            : <HeartIcon size={rw(8)} strokeWidth={rf(0.1)} color={'#FFF'} fill={'#FFF'} />}
                    </TouchableOpacity>
                </View>
            </View>




            <Animated.View entering={FadeInDown.duration(500).springify()} style={{
                paddingHorizontal: rw(2)
            }}>
                {
                    mealData.map((item) => {
                        const { idMeal, strMeal, strCategory, strArea, strTags, strInstructions, strYoutube } = item;
                        let ingredients = new Array();
                        for (let i = 1; i <= 20; i++) {

                            if (item['strIngredient' + i]) {
                                ingredients.push(item['strMeasure' + i] + " " + item['strIngredient' + i]);
                            }
                        }

                        return (
                            <View style={{
                                gap: rh(3)
                            }} key={idMeal}>
                                <Text style={{
                                    fontSize: rf(3.5),
                                    fontWeight: 700,
                                    color: '#000'
                                }}>{strMeal}</Text>
                                <View>
                                    <Text style={{
                                        fontSize: rf(2),
                                        color: 'orange',
                                        fontWeight: 500
                                    }}>{strCategory}</Text>
                                    <Text style={{
                                        fontSize: rf(1.5),
                                        color: 'rgba(0,0,0,0.5)',
                                        fontWeight: 500
                                    }}>{strArea + " Dish"}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    gap: rw(5)
                                }}>
                                    <View style={{
                                        backgroundColor: 'orange',
                                        alignItems: 'center',
                                        padding: rw(2),
                                        borderRadius: 30,
                                        gap: rh(0.2),
                                        elevation: 20
                                    }}>
                                        <View style={{
                                            backgroundColor: '#FFF',
                                            borderRadius: 50,
                                            padding: rw(2)
                                        }}>
                                            <ClockIcon size={rw(8)} color={'#000'} />
                                        </View>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF'
                                        }}>35</Text>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF',
                                            fontSize: rf(1.5),
                                            paddingBottom: rh(0.5)
                                        }}>Mins</Text>
                                    </View>
                                    <View style={{
                                        backgroundColor: 'orange',
                                        alignItems: 'center',
                                        padding: rw(2),
                                        borderRadius: 30,
                                        gap: rh(0.2),
                                        elevation: 20
                                    }}>
                                        <View style={{
                                            backgroundColor: '#FFF',
                                            borderRadius: 50,
                                            padding: rw(2)
                                        }}>
                                            <UsersIcon size={rw(8)} color={'#000'} fill={'#000'} />
                                        </View>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF'
                                        }}>03</Text>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF',
                                            fontSize: rf(1.5),
                                            paddingBottom: rh(0.5)
                                        }}>Serving</Text>
                                    </View>
                                    <View style={{
                                        backgroundColor: 'orange',
                                        alignItems: 'center',
                                        padding: rw(2),
                                        borderRadius: 30,
                                        gap: rh(0.2),
                                        elevation: 20
                                    }}>
                                        <View style={{
                                            backgroundColor: '#FFF',
                                            borderRadius: 50,
                                            padding: rw(2)
                                        }}>
                                            <FireIcon size={rw(8)} color={'#000'} />
                                        </View>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF'
                                        }}>105</Text>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF',
                                            fontSize: rf(1.5),
                                            paddingBottom: rh(0.5)
                                        }}>Cal</Text>
                                    </View>
                                    <View style={{
                                        backgroundColor: 'orange',
                                        alignItems: 'center',
                                        padding: rw(2),
                                        borderRadius: 30,
                                        gap: rh(0.2),
                                        elevation: 20
                                    }}>
                                        <View style={{
                                            backgroundColor: '#FFF',
                                            borderRadius: 50,
                                            padding: rw(2)
                                        }}>
                                            <Square3Stack3DIcon size={rw(8)} color={'#000'} />
                                        </View>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF'
                                        }}>very</Text>
                                        <Text style={{
                                            fontWeight: 500,
                                            color: '#FFF',
                                            fontSize: rf(1.5),
                                            paddingBottom: rh(0.5)
                                        }}>easy</Text>
                                    </View>
                                </View>
                                <View style={{ gap: rh(0.5) }}>
                                    <Text style={{
                                        fontSize: rf(2.5),
                                        fontWeight: 500,
                                        color: 'orange'
                                    }}>Ingredients</Text>
                                    <View style={{
                                        gap: rh(0.5)
                                    }}>
                                        {
                                            ingredients.map((item, keyValue) => {
                                                return (
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        gap: rw(2),
                                                        alignItems: 'center'
                                                    }} key={keyValue}>
                                                        <View style={{
                                                            width: rw(2.5),
                                                            height: rw(2.5),
                                                            backgroundColor: 'orange',
                                                            borderRadius: 50
                                                        }} />
                                                        <Text style={{
                                                            fontSize: rf(1.8),
                                                            fontWeight: 500
                                                        }}>{item}</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                </View>

                                <View style={{
                                    marginTop: rh(1),
                                    gap: rh(0.5)
                                }}>
                                    <Text style={{
                                        fontSize: rf(3),
                                        fontWeight: 500,
                                        color: 'orange'
                                    }}>Instructions</Text>
                                    <Text style={{
                                        // fontSize:rf(2),
                                        textAlign: 'justify'
                                    }}>{strInstructions}</Text>
                                </View>

                                <View style={{
                                    gap: rh(1.5)
                                }}>
                                    <Text style={{
                                        fontWeight: 600,
                                        fontSize: rf(2),
                                        color: 'orange'
                                    }}>Recipe Video</Text>
                                    <View style={{
                                        borderWidth: 2,
                                        borderColor: 'orange',
                                        elevation: 20,
                                        marginBottom: rh(2),
                                        borderRadius: 15,
                                        overflow: 'hidden'
                                    }}>
                                        <YoutubeIframe
                                            videoId={videoId(strYoutube)}
                                            height={rh(24)}
                                        />
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </Animated.View>
        </ScrollView>
    )
}

export default RecipeDetails