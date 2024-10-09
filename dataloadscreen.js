import { View,Text,Image,TextInput,ScrollView,StyleSheet, Button, Alert,Pressable } from "react-native";
import { useState } from "react";
import styles from './styles';
import { Picker } from "@react-native-picker/picker";
import { SelectList } from 'react-native-dropdown-select-list'
import DatePicker from 'react-native-date-picker'
url="https://script.google.com/macros/s/AKfycbwWJHxqseck9UgtK-mrpxx1myifqx5l9hYN4xhP6PEKI7TMZ3cgmln4ER2Kkvu2T8bE/exec"

const handlesubmit=async(textinpval)=>{
    console.log(textinpval)
    try{
        const response = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify({date:date,reason:textinpval,cat:selectedCat,mode:setSelectedMode,pri:price}),});
        //console.log(response)
    const result = await response.json();
    console.log(response)
    if(result==='success'){
        Alert.alert('sucess');
    }
    else{
        Alert.alert('failed');
    }}
    catch(error){
        console.log(error)
    }}

const dataParser=(data)=>{
    const temp=[]
    temp.push(data)
    console.log(data)

}
const Datascreen=()=>{
    const [textinpval,setinpval]=useState('')
    const [date, setDate] = useState(new Date())
    const [selectedCat, setSelectedCat] = useState('val');
    const [selectedMode, setSelectedMode] = useState('val');
    const [price, setpriceval] = useState(' ');
    const cat=[{label:'Food',value:'Food'},{label:'Travel',value:'Travel'},{label:'Util',value:'Util'},{label:'Rent',value:'Rent'},{label:'Investment',value:'Investment'},{label:'Rent',value:'Rent'},{label:'FLY',value:'FLY'}];
    const mode=[{label:'UPI BOB',value:'UPI BOB'},{label:'Rupay',value:'Rupay'},{label:'HDFC Credit', value:'HDFC Credit'}]
    return(
        <View style={styles.page}>
         <View>
            <View style={styles.date}>
          <DatePicker date={date} onDateChange={setDate} mode='date' />
        </View>
        <TextInput 
        style={styles.textip} value={textinpval} onChangeText={(text)=>setinpval(text)} placeholder="     Reason"
        />
        <SelectList 
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdown}
            setSelected={setSelectedCat}
            placeholder="Catageory" 
            data={cat} 
            save='value'/>
        <SelectList 
            boxStyles={styles.dropdown}
            dropdownStyles={styles.dropdown}
            placeholder="Mode of Payment"
            setSelected={setSelectedMode} 
            data={mode} 
            save='value'/>
        <TextInput 
        style={styles.textip} value='    Price' onChangeText={(text)=>setpriceval(text)} placeholder="    Price"
        />
     <Pressable title="Add" style={styles.button} onPress={()=>handlesubmit()}><Text style={{fontSize:25}}>Add</Text></Pressable>
            <Text>{String(date)}</Text>

  </View>
  </View>
       
    )

}
export default Datascreen;