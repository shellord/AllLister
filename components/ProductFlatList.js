import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ProductScroll from '../components/ProdcutScroll'




const ProductFlatList = ({navigation,data,shopname,itemTel}) => {
  console.log(data)
  const renderItem = ({ item }) => (
    <ProductScroll navigation={navigation} id={item.id} shopName={shopname} itemTel={itemTel} title={item.name} imageUri={item.image} category={item.category} price={item.price} description={item.description}/>
  );

  return (
      <FlatList
        showsVerticalScrollIndicator={false}
        showsScroll={false}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

export default ProductFlatList;
