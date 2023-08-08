# Steps

# Bug Record
1. import { View, Text, SafeAreaView , Image, TouchableOpacity} from 'react-native'
TouchableOpacity shoule in react-native instead of react-native-web
```javascript
<TouchableOpacity>
    <View className="w-20 h-20 items-center justify-center rounded-full bg-[#D7B16D]">
        <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
    </View>
</TouchableOpacity>

```
2. items instead of item
```javascript
<View className="flex-1 relative items-center justify-center">
```

# Useful Links
1. free online pictures: https://pixabay.com/
2. react native animination: https://www.npmjs.com/package/react-native-animatable 
3. color picker: https://imagecolorpicker.com/