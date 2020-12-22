import React , {useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions,Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from '../components/Carousel'
import ProductFlatList from '../components/ProductFlatList';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ImageGallery from 'react-image-gallery';


const Product = ({navigation,route}) => {
    const { itemId,itemTitle,itemPrice,itemCategory,itemDescription,itemImage,itemShopName} = route.params;
    const { width, height } = Dimensions.get('window')
        
    // const Images = [
    //     {
    //     original: 'https://picsum.photos/id/1018/1000/600/',
    //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
    //     },
    //     {
    //     original: 'https://picsum.photos/id/1015/1000/600/',
    //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
    //     },
    //     {
    //     original: 'https://picsum.photos/id/1019/1000/600/',
    //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
    //     },
    // ];

    // const mobileNumber= '9656567348';
    // const [whatsAppMsg, setWhatsAppMsg] = useState(
    //   '{itemTitle}'
    // );

    // const initiateWhatsAppSMS = () => {
    //     // Check for perfect 10 digit length
    //     if (mobileNumber.length != 10) {
    //       alert('Please insert correct contact number');
    //       return;
    //     }
    //     // Using 91 for India
    //     // You can change 91 with your country code
    //     let url =
    //       'whatsapp://send?text=' + whatsAppMsg + '&phone=91' + mobileNumber;
    //     Linking.openURL(url)
    //       .then((data) => {
    //         console.log('WhatsApp Opened');
    //       })
    //       .catch(() => {
    //         alert('Make sure Whatsapp installed on your device');
    //       });
    //   };
    

    return (
        <>
        <ScrollView style={styles.container}>
        {/* <ImageGallery items={Images}/> */}
        {/* <Image source={{uri:'https://i.imgur.com/HzqIYjc.png'}} style={styles.imageStyle} /> */}
        <Carousel />
        <Text style={styles.itemTitle}> {itemTitle}</Text>
        <Text style={styles.categoryTitle}> {itemCategory} </Text>
        <Text style={styles.shopName}>Seller : {itemShopName}</Text>
        <Text style={styles.detailsText}> DETAILS </Text>
        <Text style={styles.itemDescription}> {itemDescription}</Text>
        <Text style={styles.detailsText} > RELATED PRODUCTS </Text>
        <ProductFlatList navigation={navigation}/>
    
       
        </ScrollView>
        <View style={styles.infoContainer}>
        <View style={styles.footerPrice}>
        <Text style={styles.itemPrice}>{itemPrice}</Text>
        <Text style={styles.itemPriceFooter}>TOTAL PRICE</Text>
        </View>
        {/* <TouchableOpacity  onPress={initiateWhatsAppSMS}> */}
        <TouchableOpacity onPress={() =>{ navigation.navigate('storescreen')}}>
         <View style={styles.footerContact}>
            <Text style={styles.contactText}>CONTACT SHOP</Text>
        </View>
        </TouchableOpacity>
        </View>
        </>
    )
}

export default Product

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white' ,
        padding:20,
        flexDirection:'column',
    },
    imageStyle:{
        width:'100%',
        height:210
    },
    itemTitle:{
        fontSize:22,
        fontWeight:'600',
        marginTop:10,
        marginBottom:5,
        textTransform:'uppercase',
        letterSpacing:1
    },
    categoryTitle:{
        fontSize:16,
        fontWeight:'500',
        marginBottom:5,
        color:'grey',
        textTransform:'uppercase',
        marginLeft:2
    },
    shopName:{
        fontSize:16,
        fontWeight:'500',
        paddingBottom:10,
        color:'grey',
        textTransform:'uppercase',
        marginLeft:6
    },
    itemPrice:{
        fontSize:38,
        fontWeight:'800'
    },
    itemPriceFooter:{
        fontSize:18,
        color:'lightgrey',
        textAlign:'center',
    },
    itemDescription:{
        fontSize:14,
        color:'#2f2f2f',
        marginBottom:10,
        marginLeft:5,
        letterSpacing:1.2
        
    },
    detailsText:{
        fontSize:16,
        marginBottom:10 ,
        fontWeight:'600',
        textTransform:'uppercase'    
    },
    infoContainer:{
        flexDirection:'row',
        padding: 30,
        height:110,
        backgroundColor:'white',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    footerContact:{
        backgroundColor:'black',
        padding: 17,
    },
    contactText:{
        color:'white',
        fontWeight:'600',
        fontSize:12,
    }
})