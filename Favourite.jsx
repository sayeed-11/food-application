import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
    responsiveFontSize as rf,
    responsiveHeight as rh,
    responsiveScreenWidth as rw
} from 'react-native-responsive-dimensions';
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid';

import Animated, { FadeInDown } from 'react-native-reanimated';

const categoryData = [
    {
        id: 1,
        name: 'Beef',
        img: 'https://jamiegeller.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NTI0ODQxNDQ5NDY0ODU5/ginger-and-garlic-beef-noodlesjpg.jpg',
    },
    {
        id: 2,
        name: 'Mutton',
        img: 'https://www.thespruceeats.com/thmb/PEM9oD2Us3ZbYDDeFqEnrPneFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg',
    },
    {
        id: 3,
        name: 'Chicken',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
    },
    {
        id: 4,
        name: 'Beef',
        img: 'https://jamiegeller.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NTI0ODQxNDQ5NDY0ODU5/ginger-and-garlic-beef-noodlesjpg.jpg',
    },
    {
        id: 5,
        name: 'Mutton',
        img: 'https://www.thespruceeats.com/thmb/PEM9oD2Us3ZbYDDeFqEnrPneFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg',
    },
    {
        id: 6,
        name: 'Chicken',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
    },
    {
        id: 7,
        name: 'Beef',
        img: 'https://jamiegeller.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NTI0ODQxNDQ5NDY0ODU5/ginger-and-garlic-beef-noodlesjpg.jpg',
    },
    {
        id: 8,
        name: 'Mutton',
        img: 'https://www.thespruceeats.com/thmb/PEM9oD2Us3ZbYDDeFqEnrPneFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg',
    },
    {
        id: 9,
        name: 'Chicken',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
    },
    {
        id: 10,
        name: 'Beef',
        img: 'https://jamiegeller.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NTI0ODQxNDQ5NDY0ODU5/ginger-and-garlic-beef-noodlesjpg.jpg',
    },
    {
        id: 11,
        name: 'Mutton',
        img: 'https://www.thespruceeats.com/thmb/PEM9oD2Us3ZbYDDeFqEnrPneFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg',
    },
    {
        id: 12,
        name: 'Chicken',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
    },
    {
        id: 13,
        name: 'Beef',
        img: 'https://jamiegeller.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NTI0ODQxNDQ5NDY0ODU5/ginger-and-garlic-beef-noodlesjpg.jpg',
    },
    {
        id: 14,
        name: 'Mutton',
        img: 'https://www.thespruceeats.com/thmb/PEM9oD2Us3ZbYDDeFqEnrPneFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg',
    },
    {
        id: 15,
        name: 'Chicken',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
    },
    {
        id: 16,
        name: 'Beef',
        img: 'https://jamiegeller.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NTI0ODQxNDQ5NDY0ODU5/ginger-and-garlic-beef-noodlesjpg.jpg',
    },
    {
        id: 17,
        name: 'Mutton',
        img: 'https://www.thespruceeats.com/thmb/PEM9oD2Us3ZbYDDeFqEnrPneFxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg',
    },
    {
        id: 18,
        name: 'Chicken',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1568222255998.jpeg',
    },
]

const Favourite = ({ navigation, route }) => {

    const { categories } = route.params;

    return (
        <SafeAreaView style={{
            paddingTop: rh(5),
            backgroundColor: '#E7E7E7',
            flex: 1,
            gap: rh(3)
        }}>
            <StatusBar style='dark' />
            <View style={{
                paddingHorizontal: rw(3),
                gap: rh(2)
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: rw(10)
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#000',
                        borderRadius: 50,
                        padding: rw(3),
                        borderWidth: 2,
                        borderColor: 'orange'
                    }} onPress={() => { navigation.goBack() }}>
                        <ChevronLeftIcon size={rf(3)} color={'#FFF'} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: rf(3),
                        fontWeight: 500,
                        color:'#000',
                        // backgroundColor:'#000',
                        // paddingVertical:rh(1.5),
                        // flex:1,
                        // borderTopLeftRadius:30,
                        // borderBottomLeftRadius:30,
                        // paddingHorizontal:rw(4),
                        // borderWidth: 2,
                        // borderColor: 'orange'

                    }}>Favourite Items</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={{
                        backgroundColor: 'orange',
                        color: '#FFF',
                        marginRight: rw(2),
                        paddingHorizontal: rw(5),
                        paddingVertical: rh(1),
                        borderRadius: 5
                    }}>All</Text>
                    {
                        categories.map(({ strCategory, idCategory }) => {
                            return (
                                <View key={idCategory}>
                                    <Text style={{
                                        backgroundColor: '#000',
                                        color: '#FFF',
                                        marginRight: rw(2),
                                        paddingHorizontal: rw(5),
                                        paddingVertical: rh(1),
                                        borderRadius: 5
                                    }}>{strCategory}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>

            <View style={{
                alignItems:'center',
                backgroundColor:'orange',
                flex:1,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                paddingVertical:rh(1)
            }}>
                <FlatList
                showsVerticalScrollIndicator={false}
                    key={'#'}
                    keyExtractor={item => "#" + item.id}
                    numColumns={2}
                    data={categoryData}
                    renderItem={({ item }) => {
                        const { id, img, name } = item;
                        return (
                            <Animated.View entering={FadeInDown.duration(300).delay(100 * id).springify()} style={{
                                margin:rw(2),
                                gap:rh(1),
                                // borderWidth:2,
                                // borderColor:'#FFF',
                                borderRadius:15,
                                // elevation:5,
                                position:'relative',
                                overflow:'hidden'
                            }} key={id}>
                                <Image style={{
                                    width: rw(45),
                                    height: rw(60),
                                    borderRadius:20
                                }} source={{ uri: img }} />
                                <Text style={{
                                    textAlign:'center',
                                    position:'absolute',
                                    bottom:0,
                                    width:'100%',
                                    backgroundColor:'#000',
                                    padding:rw(2.5),
                                    color:'#FFF',
                                    borderRadius:50,
                                    borderWidth:1,
                                    borderColor:'#FFF'
                                }}>{name}</Text>
                                <TouchableOpacity style={{
                                    position:'absolute',
                                    top:rh(1.5),
                                    right:rw(1),
                                    backgroundColor:'#000',
                                    borderRadius:50,
                                    padding:rw(1),
                                }}>
                                    <HeartIcon size={rw(8)} color={'red'}/>
                                </TouchableOpacity>
                            </Animated.View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Favourite