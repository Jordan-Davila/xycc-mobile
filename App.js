/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import MainScreen from "./components/MainScreen";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";

export default class App extends Component<Props> {
     render() {
          return (
               <StyleProvider style={getTheme(material)}>
                    <AppStackNavigator />
               </StyleProvider>
          );
     }
}

const AppStackNavigator = StackNavigator(
     {
          Main: {
               screen: MainScreen
          }
     },
     {
          headerMode: "none"
     }
);
