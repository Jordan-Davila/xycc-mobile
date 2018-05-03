import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import {
     Card,
     CardItem,
     Thumbnail,
     Body,
     Left,
     Right,
     Button,
     Icon
} from "native-base";

class AssignmentComponent extends Component {
     render() {
          return (
               <Card style={styles.card}>
                    <CardItem cardBody>
                         <Image
                              source={{ uri: this.props.imageSource }}
                              style={styles.images}
                         />
                    </CardItem>
                    <CardItem header>
                         <Body>
                              <Text style={styles.classTitle}>
                                   {this.props.classTitle}
                              </Text>
                              <Text style={styles.dueDate}>
                                   {this.props.dueDate}
                              </Text>
                              <Text style={styles.title}>
                                   {this.props.assignmentTitle}
                              </Text>
                              <Text style={styles.description}>
                                   {this.props.description}
                              </Text>
                         </Body>
                    </CardItem>
               </Card>
          );
     }
}

export default AssignmentComponent;

const styles = StyleSheet.create({
     card: {
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 10,
          marginBottom: 20,
          overflow: "hidden",
          shadowColor: "#000000",
          shadowOffset: { width: 5, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1
     },
     cardItem: {
          padding: 0
     },
     images: {
          alignSelf: "stretch",
          height: 70,
          width: null,
          flex: 1
     },
     classTitle: {
          fontSize: 14,
          fontWeight: "900",
          color: "#E43F48",
          marginBottom: 3
     },
     dueDate: {
          fontSize: 14,
          fontWeight: "900",
          color: "#818181",
          marginBottom: 3
     },
     title: {
          fontSize: 17,
          fontWeight: "900",
          color: "#333333"
     },
     description: {
          marginTop: 5,
          fontWeight: "normal",
          color: "#333333"
     }
});
