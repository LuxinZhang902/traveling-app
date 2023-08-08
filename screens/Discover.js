import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {useNavigation} from '@react-navigation/native';
import { Avatar, Hotels, Restaurants, Attractions,NotFound } from '../assets';
import MenuContainer from '../components/MenuContainer';
import ItemContainer from '../components/ItemContainer';

import { FontAwesome } from '@expo/vector-icons'; 



const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants"); //By default, it chose the restaurant only
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setmainData] = useState([])

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
      {isLoading ? <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0B646B" />
       </View> : 
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
 
 
         <View>
           <View className="flex-row items-center justify-between px-4 mt-8">
             <Text className="text-[#2C7379] text-[22px] font-bold">Top Tips</Text>
             <TouchableOpacity className="flex-row items-center justify-center space-x-2">
               <Text className="text-[#A0C4C7] text-[22px] font-bold">
                 Explore
               </Text>
               <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
             </TouchableOpacity>
           </View>
 
           <View className="px-4 mt-8 flex-row items-center justify-center flex-wrap">
              {mainData?.length > 0 ? (<>
                <ItemContainer 
               key={"101"} 
               imageSrc={"https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"} 
               title="Boat-testthisplacewithlong words" 
               location="FL" />
             <ItemContainer 
               key={"102"} 
               imageSrc={"https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998_1280.jpg"} 
               title="LightHouse" 
               location="FL"/>
 
              </>
              ) : (
              <>
                <View className="w-full h-[300px] items-center space-y-8 justify-center">
                  <Image source={NotFound} className="w-32 h-32 object-cover"/>
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Opps...No Data Found
                  </Text>
                </View>

              </>
              )}
            
           </View>
         </View>
 
       </ScrollView>
      }
     

    </SafeAreaView>
  )
}

export default Discover