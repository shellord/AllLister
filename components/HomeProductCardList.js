import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import HomeProductCard from './HomeProductCard'
const DATA = [
  {
    id: '1',
    title: 'Nike Airforce',
    category:'Shoes',
    price:'$ 410',
    shopName:'Shop 1',
    description:'Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was the first ever basketball shoe to feature Nike Air technology, revolutionizing the game and sneaker culture forever.',
    imageUri:'https://i.imgur.com/nbr6VVQ.jpg',
  },
  {
    id: '2',
    title: 'Elite Solid Chair',
    category:'Furniture',
    price:'$ 299',
    shopName:'Shop 2',
    description:'Add a new touch to your home front with this stylish chair pad from Home Center that will bring about a change in the way you sit around home.',
    imageUri:'https://i.imgur.com/8qBw85a.jpg',
  },
  {
    id: '3',
    title: 'Burger',
    category:'Food',
    price:'$ 37',
    shopName:'Shop 3',
    description:'A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. ... A hamburger topped with cheese is called a cheeseburger.',
    imageUri:'https://i.imgur.com/w8I8Vqa.jpg',
  },
  {
    id: '4',
    title: 'Banana',
    category:'Fruits',
    price:'$ 4',
    shopName:'Shop 4',
    description:'The banana is a lengthy yellow fruit, found in the market in groups of three to twenty fruits, similar to a triangular cucumber, oblong and normally yellow. Its flavour is more or less sweet, depending on the variety. Nutrition and eating. The banana is rich in fibre, potassium and some beneficial vitamins for health.',
    imageUri:'https://i.imgur.com/mgl8WUc.jpg',
    
  },
  {
    id: '5',
    title: 'Ice Cream',
    category:'Food',
    price:'$ 12',
    shopName:'Shop 5',
    description:'Vanilla is frequently used to flavor ice cream, especially in North America, Asia, and Europe. Vanilla ice cream, like other flavors of ice cream, was originally created by cooling a mixture made of cream, sugar, and vanilla above a container of ice and salt.',
    imageUri:'https://i.imgur.com/ICWbSeN.jpg',
    
  },
  {
    id: '6',
    title: 'Iphone 11 Pro',
    category:'Electronics',
    price:'$ 1599',
    shopName:'Shop 6',
    description:'The phone comes with a 5.80-inch touchscreen display with a resolution of 1125x2436 pixels at a pixel density of 458 pixels per inch (ppi). iPhone 11 Pro is powered by a hexa-core Apple A13 Bionic processor. It comes with 4GB of RAM. The iPhone 11 Pro runs iOS 13 and is powered by a 3046mAh non-removable battery.',
    imageUri:'https://i.imgur.com/Sfg7rzl.jpg',
    
  },
];

const HomeProductCardList = ({navigation}) => {
  const renderItem = ({ item }) => (
    <HomeProductCard navigation={navigation} id={item.id} title={item.title} shopName={item.shopName} imageUri={item.imageUri} category={item.category} price={item.price} description={item.description}/>
  );

  return (
      <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsScroll={false}
        numColumns={2}
        data={DATA}
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
