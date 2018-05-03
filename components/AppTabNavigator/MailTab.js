import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

class MailTab extends Component {
     static navigationOptions = {
          tabBarIcon: ({ tintColor }) => (
               <Icon
                    name="envelope"
                    style={{ color: tintColor, fontSize: 20 }}
               />
          )
     };

     render() {
          return (
               <View style={styles.container}>
                    <Text>Mail</Text>
               </View>
          );
     }
}

export default MailTab;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          marginLeft: 15,
          marginRight: 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "white"
     }
});
