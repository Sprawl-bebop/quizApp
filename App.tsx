import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, Alert, Modal } from "react-native";
import question from './assets/images/data/options'
import questions from './assets/images/data/imageMultipleChoice'


const ImageOption = (props: any) => {
  // const [pres, setPres] = useState(false);

  if (props.isSelected) {
    // console.warn(props.id);
  }

  // const {name, imaged} = props;
  return (<Pressable
    onPress={() => props.handleOption()}
    // style={styles.box}
    style={[props.isSelected ? styles.activeBox : styles.box]}
  >
    <Image source={{ uri: props.imaged }} style={styles.images} />
    <Text style={[props.isSelected ? styles.textSelected : styles.textNonSelected]}>{props.name}</Text>
  </Pressable>
  );
}

const App = () => {
  //HOOK UseState
  const [selectedOption, setSelectedOption] = useState<any>(null)
  const [questionIndex, setCurrentIndex] = useState(0)
  const [isModal, setIsModal] = useState(false)

  return (
    <View style={{ display: "flex", flex: 1 }}>
      <View style={{ backgroundColor: "skyblue" }}>
        <Text style={styles.text}>{questions[questionIndex].question}</Text>
      </View>
      <View style={styles.boxWrapper}>
        {
          questions[questionIndex].options.map((option) => {
            return <ImageOption
              isSelected={selectedOption?.id == option.id}
              name={option.text}
              imaged={option.image}
              id={option.id}
              handleOption={() =>
                setSelectedOption(option)
              }
            />
          })
        }
        {/* <ImageOption name={"lorem2"} imaged={require("./assets/images/2.jpg")} id={2}/> */}
        {/* <ImageOption name={"lorem3"} imaged={require("./assets/images/3.jpg")} id={3}/>
       <ImageOption name={"lorem4"} imaged={require("./assets/images/4.jpg")} id={4}/> */}

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

        <Modal visible={isModal}
          animationType="slide"
          transparent={true}
        // presentationStyle="pageSheet"
        >

          <View style={styles.centeredView}>
            <View style={{justifyContent:"center", alignItems:"center"}}>
              <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#485696", borderRadius: 10, justifyContent: "center", width:"95%", gap:10}}>
                <Pressable
                  onPress={() => {
                    setCurrentIndex(0);
                    setSelectedOption(null);
                    setIsModal(false);
                    // Alert.alert('Game over');
                  }}

                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image source={require("./assets/images/close.png")} style={styles.imageEnd} />
                </Pressable>

                <Pressable
                  onPress={() => {
                    setCurrentIndex(0);
                    setSelectedOption(null);
                    setIsModal(false);
                    // Alert.alert('Game over');
                  }}

                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image source={require("./assets/images/reload.jpg")} style={styles.imageEnd} />
                </Pressable>
              </View>

            </View>
          </View>
        </Modal>

        <Pressable
          onPress={() => {
            const tracker = questionIndex + 1;
            if (tracker >= questions.length) {
              setIsModal(true);
            } else {
              setCurrentIndex(tracker);
              setSelectedOption(null);
            }
          }}
          disabled={selectedOption == null}
          style={{
            backgroundColor: selectedOption == null ? 'gray' : 'blue',
            padding: 15, marginBottom: 10, borderRadius: 10, width: "40%"
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>Check</Text>
        </Pressable>

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 26,
    color: "black",
    fontWeight: "bold",
    margin: 10
  },
  textNonSelected: {
    fontSize: 20, marginTop: 10, color: "red"
  },
  textSelected: {
    fontSize: 25, marginTop: 10, color: "blue"
  },
  images: {
    height: 120,
    width: 120,
    borderRadius: 10,
    resizeMode: "contain"
  },
  activeBox: {
    backgroundColor: "white",
    height: 250,
    width: 155,
    borderWidth: 3,
    borderColor: "grey",
    borderRadius: 15,
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    // shadowColor: "red",
    // shadowOpacity: 1,
    // shadowRadius: 8,
    // shadowOffset: {
    //   height: 5,
    //   width: 5
    // }
    elevation: 20,
    shadowColor: 'red'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  imageEnd: {
    margin:10,
    padding: 15,
    width: 150,
    height: "50%",
    borderRadius: 25,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "red"
  }

});
