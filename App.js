import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { StyleSheet, View, Text } from "react-native";

class App extends React.Component{
  render(){
    return <View style={styles.container}>
    <Text>Hello!sdjflsdkhfkjlsdhfklhdsfklhdslgkhdfslkghdflkhglkdsjfghkjldsfhgkldhfglkhdfklgh</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'cyan',
    alignItems:'center',
    justifyContent: 'center',
  }
})
export default  App;