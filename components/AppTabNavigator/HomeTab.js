import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Content, Icon } from "native-base";
import EventComponent from "../EventComponent";

class HomeTab extends Component {
     static navigationOptions = {
          tabBarIcon: ({ tintColor }) => (
               <Icon
                    name="tachometer"
                    style={{
                         color: tintColor,
                         fontSize: 20
                    }}
               />
          )
     };

     render() {
          return (
               <Container style={styles.outerContainer}>
                    <View style={styles.header}>
                         <Image
                              source={require("../../assets/logo.png")}
                              style={styles.logo}
                         />
                         <Image
                              source={{
                                   uri:
                                        "https://randomuser.me/api/portraits/men/51.jpg"
                              }}
                              style={styles.avatar}
                         />
                    </View>
                    <Container style={styles.innerContainer}>
                         <Content>
                              <View style={styles.welcome}>
                                   <Text style={styles.welcomeText}>
                                        Welcome
                                   </Text>
                                   <Text style={styles.welcomeText}>
                                        Jordan Davila
                                   </Text>
                                   <Text style={styles.subTitle}>
                                        Latest News & Events
                                   </Text>
                              </View>
                              <EventComponent
                                   imageSource="1"
                                   category="Technology"
                                   title="New Unity 3D VR Course Coming Fall 2018"
                              />
                              <EventComponent
                                   imageSource="2"
                                   category="Sports"
                                   title="Lions End Season with Senior Day Win"
                              />
                              <EventComponent
                                   imageSource="3"
                                   category="Technology"
                                   title="Next NASA Launch will Light Up West Coast"
                              />
                         </Content>
                    </Container>
               </Container>
          );
     }
}

export default HomeTab;

const styles = StyleSheet.create({
     outerContainer: {
          flex: 1,
          alignItems: "center",
          marginTop: 25,
          marginLeft: 15,
          marginRight: 15,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "white"
     },
     innerContainer: {
          alignSelf: "stretch"
          // paddingLeft: 30,
          // paddingRight: 30
     },
     header: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "stretch",
          alignItems: "center",
          height: 100,
          padding: 30
     },
     logo: {
          width: 50,
          height: 50
     },
     avatar: {
          width: 45,
          height: 45,
          borderRadius: 23
     },
     welcome: {
          padding: 30,
          paddingTop: 0,
          paddingBottom: 15
     },
     welcomeText: {
          fontSize: 35,
          fontWeight: "900"
     },
     subTitle: {
          fontSize: 20,
          fontWeight: "900",
          color: "#818181",
          marginTop: 15
     }
});
