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
```