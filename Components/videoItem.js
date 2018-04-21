import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, Platform, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends React.Component {

    render() {
        return(
            <ScrollView>
            <View style={styles.container}>
                <Image source={require('../images/feed_images/3.png')} style={{height: 200}}/>
                <View style={styles.descCont}>
                    <Image source={require('../images/me.jpg')} style={{borderRadius:25}} />
                    <View style={styles.descDetails}>
                        <Text style={styles.videoTitle}> React Native | Building Youtube UI clone </Text>
                        <Text style={styles.videoStats}>Bchini Med Karim | </Text>
                        <TouchableOpacity>
                            <Icon name="more-vert" size={20} />
                       </TouchableOpacity>
                    </View>
                </View>
                <Image source={require('../images/feed_images/1.jpg')} style={{ height:300}}/>
                <View style={styles.descCont}>
                    <Image source={require('../images/me.jpg')} style={{borderRadius:25}} />
                    <View style={styles.descDetails}>
                        <Text style={styles.videoTitle}> React Native | Building Youtube UI clone </Text>
                        <Text style={styles.videoStats}>Bchini Med Karim {nFormatter(7373104,1)}</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        );
    }
        
}

function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

const styles = StyleSheet.create({
    container: {
      padding: 15
    },
    descCont: {
      paddingTop: 15,
      flexDirection: 'row',
      paddingBottom: 10
    },
    videoTitle:{
      fontSize: 16,
      color: '#3C3C3C'
    }
    ,
    descDetails:{
        paddingHorizontal: 15,
        flex: 1
    }
});