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

class EventComponent extends Component {
     render() {
          const images = {
               "1": require("../assets/events/1.jpg"),
               "2": require("../assets/events/2.jpg"),
               "3": require("../assets/events/3.jpg"),
               "4": require("../assets/events/4.jpg")
          };

          return (
               <Card style={styles.card}>
                    <CardItem cardBody>
                         <Image
                              source={images[this.props.imageSource]}
                              style={styles.images}
                         />
                    </CardItem>
                    <CardItem header>
                         <Body>
                              <Text style={styles.category}>
                                   {this.props.category}
                              </Text>
                              <Text style={styles.title}>
                                   {this.props.title}
                              </Text>
                         </Body>
                    </CardItem>
               </Card>
          );
     }
}

export default EventComponent;

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
          height: 170,
          width: null,
          flex: 1
     },
     category: {
          fontSize: 15,
          fontWeight: "900",
          color: "#E43F48",
          marginBottom: 3
     },
     title: {
          fontSize: 17,
          fontWeight: "900",
          color: "#333333"
     }
});
