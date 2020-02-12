import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  ColorPropType,
  Alert,
} from 'react-native';
import Input from './Input';

import kullanicilar from '../components/kullanicilar';

export default class Giris extends Component {
  static navigationOptions = {};
  state = {
    username: '',
    password: '',
    user: {},
  };

  checkUser = () => {
    const users = kullanicilar.find(
      user =>
        user.kullaniciAdi === this.state.username &&
        user.sifre === this.state.password,
    );

    if (users) {
      this.props.navigation.navigate('Home', {user: users});
    } else {
      Alert.alert('Kullanıcı Adı veya Şifre Hatalı');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackground} />
        <KeyboardAvoidingView behavior="position">
          <View>
            <Text style={styles.logo}>CloudX</Text>
            <Text style={styles.logoDescription}>Sosyal & Veri Depolama</Text>
          </View>

          <ScrollView nestedScrollEnabled={true}>
            <View style={styles.loginArea}>
              <Text style={styles.text1}>Veri Depolamadan Fazlası</Text>
              <Text style={styles.text2}>
                Lütfen Tüm Alanları Doğru Şekilde Doldurunuz!
              </Text>
              <Text style={styles.signInText}> Hesap Bilgileri </Text>
              <Input
                placeholder="Kullanıcı Adı"
                value={this.state.username}
                onChangeText={username => this.setState({username})}
              />
              <Input
                placeholder="Şifre"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />

              <TouchableOpacity style={styles.button} onPress={this.checkUser}>
                <Text style={{color: 'white'}}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View>
            <Text style={styles.textAccount}>Hesabın Yok mu?</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}>
              <Text style={styles.textSignUp}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingVertical: 80,
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#2f1b41',
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    elevation: 6,
  },

  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
  },

  text2: {
    textAlign: 'center',
    fontSize: 12,
    color: '#7e868f',
  },

  textAccount: {
    textAlign: 'center',
    color: '#999',
  },
  textSignUp: {
    textAlign: 'center',
    color: '#666',
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: '#be3144',
    fontSize: 14,
    color: 'red',
  },
  signInText: {
    paddingVertical: 20,
    fontSize: 15,
    color: '#333',
  },
});
