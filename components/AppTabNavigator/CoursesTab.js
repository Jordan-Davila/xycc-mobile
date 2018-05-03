import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Content, Icon } from "native-base";
import CourseComponent from "../CourseComponent";
import api from "../../utilities/api";

class CourseTab extends Component {
     constructor(props) {
          super(props);
          this.state = {
               courses: []
          };
     }

     componentWillMount() {
          api.getCourses().then(res => {
               this.setState({
                    courses: res
               });
          });
     }

     _onRefresh() {
          api.getCourses().then(res => {
               this.setState({
                    courses: res
               });
          });
     }

     static navigationOptions = {
          tabBarIcon: ({ tintColor }) => (
               <Icon
                    name="code"
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
                                   <Text style={styles.subTitle}>
                                        My Courses
                                   </Text>
                              </View>

                              {this.state.courses.map((coursesData, i) => {
                                   // Must Have key={i} or Warning! Message will appear
                                   return (
                                        <CourseComponent
                                             key={i}
                                             imageSource={coursesData.picture}
                                             code={
                                                  coursesData.code +
                                                  coursesData.id +
                                                  " - " +
                                                  coursesData.section
                                             }
                                             title={coursesData.title}
                                             avatar={coursesData.teacher.avatar}
                                        />
                                   );
                              })}
                         </Content>
                    </Container>
               </Container>
          );
     }
}

export default CourseTab;

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
     subTitle: {
          fontSize: 20,
          fontWeight: "900",
          color: "#818181"
     }
});
