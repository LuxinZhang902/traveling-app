import { View, Text, SafeAreaView, Image, ScrollView} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import { Avatar, Hotels, Restaurants, Attractions } from '../assets';
import MenuContainer from '../components/MenuContainer';


const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants") //By default, it chose the restaurant only

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView classname="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[#0B646B] text-[40px] font-bold">Discover</Text>
          <Text className="text-[#527283] text-[32px]">the new places</Text>
        </View>
      

        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
          <Image 
            source={Avatar}
            className="w-full h-full rounded-md object-cover justify-center shadow-lg"
          />
        </View>
      </View>


      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg">
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{fields : "geometry"}}
        placeholder="Search"
        fetchDetails={true}

        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details?.geometry?.viewport);
        }}
        query={{
          key: 'AIzaSyDfrXTzXHq1Y8Ny2OoQ3vLLTcEw0rharn0',
          language: 'en',
        }}
      />
      </View>

      {/* Menu Container */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"hotel"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />

          <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Discover