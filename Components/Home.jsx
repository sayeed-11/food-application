import { View, Text, Image, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeartIcon } from 'react-native-heroicons/outline'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { SafeAreaView, ScrollView } from 'react-native'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';

import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Animated, { FadeInDown } from 'react-native-reanimated'

import axios from 'axios'
import MasonryList from '@react-native-seoul/masonry-list';

import Loading from './Loading'
import { useNavigation } from '@react-navigation/native'

import userProfilePic from '../assets/food/userProfile.jpeg';


const Home = () => {


    const [categories, setCategories] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [activeRecepie, setActiveRecepie] = useState('Beef');


    useEffect(() => {
        getCategories();
        getRecipes();
    }, [])

    const handleChangeRecipe = (categoryName) => {
        getRecipes(categoryName);
        setActiveRecepie(categoryName);
        setRecipes([]);
    }


    const getCategories = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
            if (response && response.data) {
                setCategories(response.data.categories)
            }

        } catch (error) {
            console.log('error1..', error.message);
        }
    }
    const getRecipes = async (category = 'Beef') => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            if (response && response.data) {
                setRecipes(response.data.meals)
            }

        } catch (error) {
            console.log('error2..', error.message);
        }
    }

    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
            <StatusBar style='dark' />
            <ScrollView
                contentContainerStyle={{
                    paddingVertical: rh(5),
                    gap: rh(3),
                    paddingHorizontal: rw(5)
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Pressable style={{
                        borderWidth: 2,
                        borderColor: 'orange',
                        borderRadius: 50
                    }} onPress={() => { navigation.navigate('Profile', { userProfilePic, categories }) }}>
                        <Animated.Image sharedTransitionTag='user' style={{ width: rw(12), height: rw(12), borderRadius: 50 }} source={userProfilePic} />
                    </Pressable>
                    <TouchableOpacity onPress={() => { navigation.navigate('Favourite', { categories: categories }) }}>
                        <HeartIcon size={rw(8)} color={'orange'} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>Hello, Cristiano</Text>
                    <View><Text style={{
                        fontSize: rf(3.5),
                        fontWeight: 600
                    }}>Make Your Own Food,</Text></View>
                    <Text style={{
                        fontSize: rf(3.5),
                        fontWeight: 600
                    }}>
                        stay at <Text style={{ color: 'orange' }}>Home</Text>
                    </Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderRadius: 50,
                    padding: rw(1),
                }}>
                    <TextInput style={{
                        paddingVertical: rh(1),
                        flex: 1,
                        paddingHorizontal: rw(2),
                        color: 'rgba(0,0,0,0.5)',
                    }}
                        placeholder='Search any recepie'
                        placeholderTextColor={'rgba(0,0,0,0.3)'}
                        selectionColor={'orange'}
                    />
                    <TouchableOpacity style={{
                        padding: rw(2.5),
                        backgroundColor: 'orange',
                        borderRadius: 50,
                        elevation: 5
                    }}>
                        <MagnifyingGlassIcon style={{
                            borderRadius: 50,
                        }} size={rw(7)} color={'#FFF'} strokeWidth={2} />
                    </TouchableOpacity>
                </View>

                <Animated.View entering={FadeInDown.duration(500).springify()} style={{ gap: rh(1) }}>
                    <Text style={{
                        fontSize: rf(2),
                        fontWeight: 500,
                        color: 'orange'
                    }}>Categories</Text>
                    {categories.length > 0 && <Categories categories={categories} activeRecepie={activeRecepie} setActiveRecepie={setActiveRecepie} handleChangeRecipe={handleChangeRecipe} />}
                </Animated.View>


                <View>
                    <Recipes recipes={recipes} categories={categories} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const Categories = ({ categories, activeRecepie, handleChangeRecipe }) => {
    return (
        <Animated.View entering={FadeInDown.duration(300).springify()}>
            <ScrollView
                horizontal
                contentContainerStyle={{
                    gap: rw(5)
                }}
                showsHorizontalScrollIndicator={false}
            >
                {
                    categories.map(({ idCategory, strCategory, strCategoryThumb }) => {
                        return (
                            <TouchableOpacity key={idCategory} onPress={() => { handleChangeRecipe(strCategory) }}>
                                <View style={{
                                    padding: rw(1),
                                    width: rw(15),
                                    height: rw(15),
                                    overflow: 'hidden',
                                    padding: 2,
                                    aspectRatio: 1 / 1,
                                    backgroundColor: activeRecepie === strCategory ? 'orange' : 'rgba(0,0,0,0.2)',
                                    opacity: activeRecepie === strCategory ? 1 : 0.8,
                                    borderRadius: 50
                                }}>
                                    <Image style={{
                                        aspectRatio: 1 / 1,
                                        borderRadius: 50
                                    }} source={{ uri: strCategoryThumb }} />
                                </View>
                                <Text style={{
                                    textAlign: 'center',
                                    color: activeRecepie === strCategory ? 'orange' : '#000',
                                    opacity: activeRecepie === strCategory ? 1 : 0.8,
                                }}>{strCategory}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </Animated.View>
    )
}


const Recipes = ({ recipes, categories }) => {
    return (
        <View style={{
            gap: rh(1)
        }}>
            <Text style={{
                fontSize: rf(3),
                fontWeight: 600,
                color: 'orange'
            }}>Recipes</Text>
            <View>
                {
                    categories.length == 0 || recipes.length == 0 ? <Loading /> : (
                        <MasonryList
                            data={recipes}
                            keyExtractor={(item) => item.idMeal}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, i }) => <RecipeItem strMeal={item.strMeal} strMealThumb={item.strMealThumb} index={i} id={item.idMeal} />}
                            // refreshing={isLoadingNext}
                            // onRefresh={() => refetch({ first: ITEM_CNT })}
                            onEndReachedThreshold={0.1}
                        // onEndReached={() => loadNext(ITEM_CNT)}
                        />
                    )
                }

            </View>
        </View>
    )
}


const RecipeItem = ({ strMealThumb, strMeal, index, id }) => {
    const navigation = useNavigation();
    return (
        <View style={{
            alignItems: 'center',
        }}>
            <Animated.View entering={FadeInDown.delay(index * 100).duration(500).springify()} style={{
                backgroundColor: '#E7E7E7',
                marginRight: index % 2 == 0 ? rw(2) : 0,
                marginLeft: index % 2 != 0 ? rw(2) : 0,
                borderRadius: 20,
                elevation: 5
            }}>
                <TouchableWithoutFeedback onPress={() => { navigation.push('RecipeDetails', { strMealThumb, strMeal, id }) }}>
                    <Animated.Image style={{
                        width: rw(42),
                        height: index % 3 == 0 ? rh(35) : rh(25),
                        borderRadius: 20
                    }} sharedTransitionTag={strMeal} source={{ uri: strMealThumb }} />
                </TouchableWithoutFeedback>
            </Animated.View>
            <Text style={{
                paddingBottom: rh(3),
                color: 'rgba(0,0,0,0.5)'
            }}>{strMeal.length > 20 ? strMeal.slice(0, 20) + '...' : strMeal}</Text>
        </View>
    )
}