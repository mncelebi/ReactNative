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
import data from './kullanicilar';
export default class Veri extends Component {
  state = {
    text: '',
    contacts: data,
  };

  renderContactItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {backgroundColor: index % 2 === 1 ? '#fafafa' : ''},
        ]}>
        <Image style={styles.avatar} source={{uri: item.resim}} />

        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {item.isim} {item.soyisim}
          </Text>
          <Text>{item.kullaniciAdi}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  searchFilter = text => {
    const newData = data.filter(item => {
      const listItem = `${item.isim.toLowerCase()} ${item.soyisim.toLowerCase()} ${item.kullaniciAdi.toLowerCase()}`;
      return listItem.indexOf(text.toLowerCase()) > -1;
    });
    this.setState({
      contacts: newData,
    });
  };

  renderHeader = () => {
    const {text} = this.state;
    return (
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={text => {
            this.setState({text});
            this.searchFilter(text);
          }}
          value={text}
          placeholder="Ara..."
          style={styles.searchInput}
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          renderItem={this.renderContactItem}
          data={this.state.contacts}
          keyExtractor={item => item.kullaniciId}
          ListHeaderComponent={this.renderHeader()}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 16,
    color: 'green',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
});
