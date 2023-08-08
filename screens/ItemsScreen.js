import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const ItemsScreen = ({route}) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [])
  // console.log(data)


  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
            <Image
              source={
                 {uri: 
                    data?.photo?.images?.large?.url ? 
                    data?.photo?.images?.large?.url : 
                    "https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623_1280.jpg"
                  }
              }
              className="w-full h-72 object-cover rounded-2xl"
            />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default ItemsScreen