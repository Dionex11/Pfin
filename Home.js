import { View,Text,Image,TextInput,ScrollView,StyleSheet, Button } from "react-native";
import styles from './styles';
const Box=(props)=>{
    return(
    <View style={styles.box}>
      <Text>{props.name}</Text>
      <Text style={styles.value}>{props.value}</Text>
  
      </View>)
      
  
  }
const Home=()=>
{
  return(<View style={styles.page}><Text style={styles.header}>Your Portfolio !</Text>
  <View style={{flex:1,flexDirection:"row",flexWrap:'wrap',justifyContent:'space-around',alignItems:'center'}}>
  <Box name={"Mutal Funds"} value={"1000"}/>
  <Box name={"Savings AC"}/>
  <Box name={"stocks"}/>
  <Box></Box>
  </View>
  </View>)
  }
  export default Home;