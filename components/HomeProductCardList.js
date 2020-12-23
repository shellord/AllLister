import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import HomeProductCard from './HomeProductCard'
import { AuthContext } from '../context'

const HomeProductCardList = ({navigation}) => {

  const { API_URL } = useContext(AuthContext)
  const [featuredproducts, setfeaturedproducts] = useState([{}])

  useEffect(() => {
    fetch(API_URL + 'featuredproducts')
      .then(response => response.json())
      .then(json => {
        setfeaturedproducts(json.response)
      }).catch(e => console.log(e))

  }, [])

  const renderItem = ({ item }) => (
    <HomeProductCard navigation={navigation} id={item.id} title={item.name} shopName={item.shopName} imageUri={item.imageUri} category={item.category} price={item.price} description={item.description}/>
  )

  return (
      <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsScroll={false}
        numColumns={2}
        data={featuredproducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft:5
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeProductCardList;
