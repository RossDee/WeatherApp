import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { tabWidth } from './.prettierrc';

export default function App() {
  console.log('Hello World');
  return (
    <View style={height:100,width:100,backgroundColor:'orange'}>
      <Text>Open up App.js to start </Text>
        <view/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
