import React from 'react';
import { View, Button, Text, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import FadeIn from './components/FadeIn';
import LottieView from 'lottie-react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
// '#1a1b1f'
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View style={{ padding: 12 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: 'black' }}>Hello Jane!</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: '#848588' }}>Let's listen to something cool today</Text>
                    </View>

                    <View style={{ width: 35, height: 35, borderRadius: 25, backgroundColor: '#2f3038', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <View style={{ width: 10, height: 10, backgroundColor: '#27bc5c', borderRadius: 5, position: 'absolute', right: 7, top: 7, borderWidth: 1, zIndex: 2, borderColor: '#2f3038' }} />
                        <FontAwesome5 name="bell" size={20} color='black' />
                    </View>
                </View>


                <View style={{ marginTop: 20 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: 'black' }}>Your Favorite artist</Text>
                        <FontAwesome5 name="angle-right" size={24} color="black" />
                    </View>


                    <ScrollView horizontal style={{ height: 100 }}>


                        <View style={{ alignItems: 'center' }}>
                            <Image source={require('./imgs/adele.jpg')} style={{ width: 70, height: 70, borderRadius: 40 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'center', marginTop: 5 }}>Adele</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginLeft: 10 }}>
                            <Image source={require('./imgs/ed.jpg')} style={{ width: 70, height: 70, borderRadius: 40 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'center', marginTop: 5 }}>Ed Sheeran</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginLeft: 10 }}>
                            <Image source={require('./imgs/dua.jpg')} style={{ width: 70, height: 70, borderRadius: 40 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'center', marginTop: 5 }}>Dua Lipa</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginLeft: 10 }}>
                            <Image source={require('./imgs/lady.jpg')} style={{ width: 70, height: 70, borderRadius: 40 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'center', marginTop: 5 }}>Lady Gaga</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginLeft: 10 }}>
                            <Image source={require('./imgs/theweek.jpg')} style={{ width: 70, height: 70, borderRadius: 40 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'center', marginTop: 5 }}>the weeknd</Text>
                        </View>

                        <View style={{ alignItems: 'center', marginLeft: 10 }}>
                            <Image source={require('./imgs/2pac.jpg')} style={{ width: 70, height: 70, borderRadius: 40 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'center', marginTop: 5 }}>2Pac</Text>
                        </View>




                    </ScrollView>

                </View>



                <View style={{ marginTop: 20 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: 'black' }}>Recent Played</Text>
                        <FontAwesome5 name="angle-right" size={24} color="black" />
                    </View>

                    <ScrollView horizontal style={{ height: 145 }}>

                        <View>
                            <Image source={require('./imgs/1.jpg')} style={{ width: 120, height: 120, borderRadius: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'left', marginTop: 5 }}>Pop Hits</Text>
                        </View>

                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./imgs/2.jpg')} style={{ width: 120, height: 120, borderRadius: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'left', marginTop: 5 }}>Dance-Pop</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./imgs/3.jpg')} style={{ width: 120, height: 120, borderRadius: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'left', marginTop: 5 }}>Pump-Up</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./imgs/4.jpg')} style={{ width: 120, height: 120, borderRadius: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'left', marginTop: 5 }}>Pop Hits</Text>
                        </View>

                    </ScrollView>

                </View>

                <View style={{ marginTop: 20 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Poppins-Medium', color: 'black' }}>Made For You</Text>
                        <FontAwesome5 name="angle-right" size={24} color="black" />
                    </View>

                    <ScrollView horizontal style={{ height: 180 }}>

                        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                            <Image source={require('./imgs/6.jpg')} style={{ width: 120, height: 150, borderRadius: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'left', marginTop: 5 }}>Deep House</Text>
                        </TouchableOpacity>

                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./imgs/5.jpg')} style={{ width: 120, height: 150, borderRadius: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'left', marginTop: 5 }}>Hits</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Image source={require('./imgs/7.jpg')} style={{ width: 120, height: 150, borderRadius: 15 }} />
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black', textAlign: 'left', marginTop: 5 }}>Melodic</Text>
                        </View>

                    </ScrollView>

                </View>



            </View>

         

        </View>

    );
}

export default HomeScreen ;