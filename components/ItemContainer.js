import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

const ItemContainer = ({imageSrc, title, location}) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[170px] my-2">
        <Image
            source={{uri : imageSrc}} //Currently using url, instead of the object as before
            className="w-full h-40 rounded-md object-cover"
        />

        <Text className="text-[#2C7379] text-[18px] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
        </Text>

        <View className="flex-row items-center space-x-1">
            {/* Location */}
            <FontAwesome5 name="map-marker-alt" size={12} color="#8597A2" />
            <Text className="text-[#3b7d83] text-[14px] font-bold">
                {title?.length > 18 ? `${title.slice(0, 18)}..` : location}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default ItemContainer