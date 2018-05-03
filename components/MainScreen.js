import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { TabNavigator } from "react-navigation";
import HomeTab from "./AppTabNavigator/HomeTab";
import CoursesTab from "./AppTabNavigator/CoursesTab";
import GradesTab from "./AppTabNavigator/GradesTab";
import MailTab from "./AppTabNavigator/MailTab";

class MainScreen extends Component {
     // static navigationOptions = {
     //      headerLeft: <Icon name="home" style={{paddingLeft: 10}}/>,
     //      title: "XYCC",
     //      headerRight: <Icon name="address-card" style={{paddingRight: 10}}/>
     // }

     render() {
          return <AppTabNavigator />;
     }
}

export default MainScreen;

const AppTabNavigator = TabNavigator(
     {
          Home: {
               screen: HomeTab
          },
          Courses: {
               screen: CoursesTab
          },
          Assignments: {
               screen: GradesTab
          },
          Mail: {
               screen: MailTab
          }
     },
     {
          // initialRouteName: "Assignments",
          animationEnabled: true,
          swipeEnable: true,
          tabBarPosition: "bottom",
          tabBarOptions: {
               activeTintColor: "#ffffff",
               labelStyle: {
                    fontSize: 11
               },
               tabStyle: {
                    paddingTop: 10,
                    paddingBottom: 10
               },
               activeBackgroundColor: "#E43F48",
               activeTabStyle: {
                    backgroundColor: "#E43F48"
               },
               style: {
                    height: 60,
                    backgroundColor: "white"
               }
          }
     }
);

const styles = StyleSheet.create({
     container: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
     }
});
