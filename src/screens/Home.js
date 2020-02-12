import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import userData from '../components/data';

export default class Home extends Component {
  state = {
    text: '',
    user: {},
    userData: {},
    contacts: userData,
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const user = this.props.navigation.getParam('user', 'default value');

    this.setState({user});
    const getUserData = this.getData(user);
    this.setState({userData: getUserData});
  };

  getData = user => {
    const userDatas = userData.filter(data => {
      return data.kullaniciId === user.kullaniciId;
    });

    window.console.log(
      'asd',
      userData[0].kullaniciId,
      user && user.kullaniciId,
      userDatas,
    );
    return userDatas;
  };

  renderContactItem = ({item}) => {
    window.console.log(this.state.userData);
    return (
      <TouchableOpacity>
        <Text style={styles.date}>{item.tarih}</Text>
        <Image style={styles.bodyImage} source={{uri: item.resim}} />
        <Text style={styles.title}>{item.baslik}</Text>
        <Text style={styles.content}>{item.icerik}</Text>
      </TouchableOpacity>
    );
  };

  renderHeader = () => {
    return (
      <View>
        <View style={styles.headBackground} />

        <View>
          <Text style={styles.logo}>CloudX</Text>
        </View>
        <View style={styles.itemContainer}>
          <Image
            style={styles.avatar}
            source={{uri: this.state.user && this.state.user.resim}}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textSignUp}>
              {this.state.user && this.state.user.isim}{' '}
              {this.state.user && this.state.user.soyisim}
            </Text>
            <Text style={styles.textAccount}>
              {' '}
              {this.state.user && this.state.user.kullaniciAdi}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          renderItem={this.renderContactItem}
          data={this.state.contacts}
          userData={this.state.userData}
          keyExtractor={item => item.dataId}
          ListHeaderComponent={this.renderHeader()}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'space-around',
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '35%',
    backgroundColor: '#2f1b41',
  },
  logo: {
    textAlign: 'left',
    padding: 5,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },

  textAccount: {
    fontSize: 15,
    paddingRight: 35,
    textAlign: 'right',
    color: '#999',
  },
  textSignUp: {
    paddingRight: 35,
    fontSize: 25,
    textAlign: 'right',
    color: '#666',
  },

  signInText: {
    paddingVertical: 20,
    fontSize: 15,
    color: '#333',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: 'red',
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },

  bodyImage: {
    width: 400,
    height: 300,
    backgroundColor: 'grey',
  },

  date: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 15,
  },

  title: {
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
  },

  content: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    fontSize: 15,
  },
});
