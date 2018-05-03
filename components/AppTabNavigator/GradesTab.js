import React, { Component } from "react";
import { View, Text, StyleSheet, Image, RefreshControl } from "react-native";
import { Container, Content, Icon } from "native-base";
import AssignmentComponent from "../AssignmentComponent";
import api from "../../utilities/api";

class GradeTab extends Component {
     constructor(props) {
          super(props);
          this.state = {
               assignments: [],
               refreshing: false
          };
     }

     componentWillMount() {
          api.getAssignments().then(res => {
               this.setState({
                    assignments: res,
                    refreshing: false
               });
          });
     }

     _onRefresh() {
          this.setState({ refreshing: true });
          api.getAssignments().then(res => {
               this.setState({
                    assignments: res,
                    refreshing: false
               });
          });
     }

     static navigationOptions = {
          tabBarIcon: ({ tintColor }) => (
               <Icon
                    name="tasks"
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
                         <Content
                              refreshControl={
                                   <RefreshControl
                                        refreshing={this.state.refreshing}
                                        onRefresh={this._onRefresh.bind(this)}
                                   />
                              }
                         >
                              <View style={styles.welcome}>
                                   <Text style={styles.subTitle}>
                                        My Assignments
                                   </Text>
                              </View>

                              {this.state.assignments.map(
                                   (assignmentsData, i) => {
                                        // Must Have key={i} or Warning! Message will appear
                                        return (
                                             <AssignmentComponent
                                                  key={i}
                                                  imageSource={
                                                       assignmentsData.class
                                                            .picture
                                                  }
                                                  classTitle={
                                                       assignmentsData.class
                                                            .title
                                                  }
                                                  dueDate={
                                                       assignmentsData.due_date
                                                  }
                                                  assignmentTitle={
                                                       assignmentsData.title
                                                  }
                                                  description={
                                                       assignmentsData.description
                                                  }
                                             />
                                        );
                                   }
                              )}
                         </Content>
                    </Container>
               </Container>
          );
     }
}

export default GradeTab;

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
