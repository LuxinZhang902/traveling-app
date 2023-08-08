# Set up process
```python
npm install -g expo-cli
expo --version

# Make sure the current fold is empty
expo init ./
```
## Android Studio 
1. Download the xcode for showing the IOS in the phone view
```python
# install brew on Mac
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# install yarn
brew install yarn
yarn --version
yarn start

i # for the IOS 
# Ctrl + R to reload the app

# Tailwindcss
yarn add tailwindcss-react-native
yarn add tailwindcss -D
# initialize
yarn tailwindcss init

# Add to content
"./App.{js,jsx,ts,tsx}"
# Add the Babel plugin(babel.config.js)
plugins: ["tailwindcss-react-native/babel"],

# ADd the TailwindProvider
# App.js
import { TailwindProvider} from 'tailwindcss-react-native';

   <TailwindProvider>
      <View style="styles.container">
        <Text> Open up App.js to start working on your app!!</Text>
        <StatusBar style='auto'></StatusBar>
      </View>
    </TailwindProvider>

# Debug
yard add nativewind
yarn add --dev tailwindcss@3.3.2
```
# React Navigation
```python
yarn add @react-navigation/native
yarn add react-native-screens react-native-safe-area-context
# stack
yarn add @react-navigation/native-stack

# animination 
yarn add react-native-animatable
```


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
3. className instead of classname

# Useful Links
1. free online pictures: https://pixabay.com/
2. react native animination: https://www.npmjs.com/package/react-native-animatable 
3. color picker: https://imagecolorpicker.com/
4. React native google places autocomplete: https://www.npmjs.com/package/react-native-google-places-autocomplete 


# credentials
AIzaSyDfrXTzXHq1Y8Ny2OoQ3vLLTcEw0rharn0