import { View, Text, SafeAreaView , Image, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Forest, HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';
// import { TouchableOpacity } from 'react-native-web';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    // Flex-1 makes the whole page the same color, instead of just the topping
   <SafeAreaView className="bg-white flex-1 relative">
        {/* First Section */}
        <View className="flex-row px-6 mt-8 items-center space-x-2">
            <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                <Text className="text-[#3AAFD0] text-3xl font-semibold">Go</Text>
            </View>

            <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
        </View>

        {/* Second Section */}
        <View className="px-6 mt-8 space-y-3">
            <Text className="text-[#80ccff] text-[42px]">Enjoy the trip with</Text>
            <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>

            <Text className="text-[#3C6702] text-base">
                Either read or travel. Body and soul should always be on the road.
            </Text>
        </View>

        {/* Circle Section */}
        {/* <View className="w-[400px] h-[400px] bg-[#80ccff] rounded-full absolute -bottom-36 -right-36"></View>
        <View className="w-[400px] h-[400px] bg-[#FFCC99] rounded-full absolute -bottom-28 -left-36"></View> */}

        {/* Image Container */}
        <View className="flex-1 relative items-center justify-center">
            <Animatable.Image
                animation="fadeIn"
                easing="ease-in-out"
                source={Forest} className="w-full h-full object-cover mt-20"/>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Discover")} 

                    className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#9C9BA9] rounded-full 
                                items-center justify-center">

                    <Animatable.View 
                        animation={"pulse"} 
                        easing={"ease-in-out"} 
                        iterationCount={"infinite"} 
                        className="w-20 h-20 items-center justify-center rounded-full bg-[#D7B16D]">
                        <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
                    </Animatable.View>
                
                </TouchableOpacity>
        
        </View> 


       
   </SafeAreaView>
  )
}

export default HomeScreen;
