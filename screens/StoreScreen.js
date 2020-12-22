import React from 'react'
import { StyleSheet, Text, View ,Image,Linking,SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import ProductScroll from '../components/ProdcutScroll'
import ProductFlatList from '../components/ProductFlatList';
import StoreSearchCard from '../components/StoreSearchCard'

const StoreScreen = ({navigation,route}) => {
    const { itemId,itemName,itemDistance,itemTel,itemTime,itemImg} = route.params;

   
  
    return (
        <ScrollView style={styles.container} onPress={() => Keyboard.dismiss()}>
        <Image source={{uri:itemImg}} style={styles.imageStyle} />
        <View style={styles.textContainer} onPress={() => Keyboard.dismiss()}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}} onPress={() => Keyboard.dismiss()}>
        <View style={{flexDirection:'column'}} onPress={() => Keyboard.dismiss()}>
        <Text style={styles.itemText}> {itemName}</Text>
        <Text style={styles.catText}> Food & Grocery</Text>
        <Text style={styles.catText}> {itemTime}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}} onPress={() => Keyboard.dismiss()}>
        <TouchableOpacity onPress={()=>{Linking.openURL('tel:{itemTel}');} } style={styles.callBtn} >
        <Icon name="phone" size={20} color="black" />
        <Text style={styles.disText}> Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locBtn} >
        <Icon name="location-arrow" size={20} color="black" />
        <Text style={styles.disText}> {itemDistance}</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.searchView}>
        <StoreSearchCard navigation={navigation}/>
        </View>
        <Text style={styles.detText}> MORE PRODUCTS</Text>
        <ProductFlatList navigation={navigation}/>
        </View>
        </ScrollView>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    textContainer:{
        flex:1,
        padding:20,
        backgroundColor:'white',
        marginTop:-20,
    },
    imageStyle:{
        width:'100%',
        height:210
    },
    catText:{
        color:'grey',
        marginLeft:2,
        marginTop:1,
        fontSize:12,
        textTransform:'uppercase',
        fontWeight:"500",
        paddingBottom:5
    },
    itemText:{
        fontSize:22,
        fontWeight:'600',
        color:'black',
        textTransform:'uppercase',
        letterSpacing:2,
        paddingBottom:5,
        marginLeft:-1
    },
    telText:{
        marginTop:5,
        fontWeight:'600',
    },
    disText:{
        fontSize:14,
        fontWeight:'600',
        marginLeft:2
    },
    detText:{
        marginTop:20,
        fontSize:16,
        fontWeight:'500',
        marginBottom:10,
        letterSpacing:2
    },
    detailText:{
        marginLeft:2,
        marginTop:5,
        fontWeight:'500'
    },
    searchView:{
        flexDirection:'row',
        alignItems:'center'
    },
    callBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        padding:10,
        borderRadius:10,
        marginRight:10
    },
    locBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
})