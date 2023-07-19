// import React from 'react';
// import {View, Text, Image, ScrollView, TextInput} from 'react-native';

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{width: 200, height: 200}}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1,
//         }}
//         defaultValue="Input is here"
//       />
//     </ScrollView>
//   );
// };

// export default App;

import React,{useState} from "react";
import { View, Text, Image , StyleSheet, Pressable} from "react-native";




const ImageOption = (props:any)=>{
  const [pres, setPres] = useState(false);

  if(pres){
    console.warn(props.id);
  }

  // const {name, imaged} = props;
  return ( <Pressable 
            onPress={()=>setPres(true)} 
            // style={styles.box}
            style={[pres ? styles.activeBox : styles.box]}
            >
              <Image source={props.imaged} style={styles.images} />  
              <Text style={{fontSize:20, marginTop:10, color:"red"}}>{props.name}</Text>
          </Pressable>
        );
}

const App = () => {

  return (
    <View style={{display:"flex", flex:1}}>
      <View style={{backgroundColor:"skyblue"}}>
        <Text style={styles.text}>Example on Flexbox.</Text>
      </View>
      <View style={styles.boxWrapper}>
       <ImageOption name={"lorem"}  imaged={require("./assets/images/1.jpg")} id={1}/>
       <ImageOption name={"lorem2"} imaged={require("./assets/images/2.jpg")} id={2}/>
       <ImageOption name={"lorem3"} imaged={require("./assets/images/3.jpg")} id={3}/>
       <ImageOption name={"lorem4"} imaged={require("./assets/images/4.jpg")} id={4}/>
      
        {/* <View style={styles.box}>
          <Image source={require("./assets/images/2.jpg")} style={styles.images} />  
          <Text style={{fontSize:20, marginTop:10, color:"red"}}>lorem</Text>
        </View>
        <View style={styles.box}>
          <Image source={require("./assets/images/3.jpg")} style={styles.images} />  
          <Text style={{fontSize:20, marginTop:10, color:"red"}}>lorem</Text>
        </View>
        <View style={styles.box}>
          <Image source={require("./assets/images/4.jpg")} style={styles.images} />  
          <Text style={{fontSize:20, marginTop:10, color:"red"}}>lorem</Text>
        </View> */}
      </View>
    </View>

  );

};

export default App;

const styles = StyleSheet.create({
  boxWrapper: {
    display: "flex",
    backgroundColor: "skyblue",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignContent: "center"
  },
  box: {
    backgroundColor: "white",
    height: 250,
    width: 155,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 15,
    margin: 10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    textAlign:"center",
    fontSize:35,
    color:"black",
    fontWeight:"bold",
    marginTop:20
  },
  images:{
    height:120,
    width:120,
    borderRadius:10,
    resizeMode:"contain"
  },
  activeBox:{
    backgroundColor: "white",
    height: 250,
    width: 155,
    borderWidth: 4,
    borderColor: "red",
    borderRadius: 15,
    margin: 10,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }

});
