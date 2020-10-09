import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default class App extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
      <StatusBar backgroundColor = 'rgba(255,255,255,0.3)'/>
        <View style={styles.viewWrapper}>
          <Image
            source={{
              uri:
                'https://i.ibb.co/kmQ5TMc/kevin-ku-w7-Zyu-GYNp-RQ-unsplash.jpg',
            }}
            style={styles.imageLogin}
          />
          <Text style={styles.textTitle}>LOGIN SISWA KODING</Text>
        </View>
        <TextInput placeholder="Email" style={styles.textInput} />
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
        <TouchableOpacity>
          <View style={styles.viewButton}>
            <Text style={styles.textLogin}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: responsiveHeight(2.33),
  },
  viewButton: {
    width: responsiveWidth(50),
    height: responsiveHeight(7),
    alignItems: 'center',
    backgroundColor: '#43B2EC',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(1.1),
  },
  textLogin: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: responsiveFontSize(2.2),
  },
  imageLogin: {
    width: 100,
    height: 100,
    borderRadius : 10
  },
  viewWrapper: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#43B2EC',
  },
});