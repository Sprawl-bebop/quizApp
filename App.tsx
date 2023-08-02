import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable, Alert, Modal } from "react-native";
import question from './assets/images/data/options'
import questions from './assets/images/data/imageMultipleChoice'
import Ionicons from 'react-native-vector-icons/Ionicons'
import iconn from './assets/images/data/icons'


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


const IconComp = (props: any) => {

  return (
    <Ionicons name={props.iname} size={props.isize} color={props.heartid < props.id ? "red" : "gray"} />
  )
}



const ProgressBar = ({ progress }: any) => {
  return (
    <View
      style={{
        flex: 1,
        // display:"flex",
        height: 30,
        backgroundColor: '#ecdceb',
        borderRadius: 40,
        margin: 10,
        // alignContent:"center"
      }}>
      <View
        style={{
          backgroundColor: 'orange',
          height: 10,
          width: `${progress * 100}%`,
          borderRadius: 40,
        }}
      />
    </View>
  );
};



const App = () => {
  //HOOK UseState
  const [selectedOption, setSelectedOption] = useState<any>(null)
  const [questionIndex, setCurrentIndex] = useState(0)
  const [heartId, setHeartId] = useState(0)
  const [tracker, setTracker] = useState(0)
  const [isModal, setIsModal] = useState(false)
  const [isOverModal, setIsOverModal] = useState(false)


  return (
    // Main Container
    <View style={{ display: "flex", flex: 1 }}>

      <View style={{ flexDirection: 'row', height: 30 }}>
        <View style={{ flex: 3 }}>
          <ProgressBar progress={tracker / questions.length} />
        </View>
        <View style={{ flex: 2 }} >
          <View style={{ flexDirection: "row", alignContent: "center" }}>

            {iconn.map((prop) => {
              return (
                <IconComp iname={prop.name} isize={prop.size} icolor={prop.color} heartid={heartId} id={prop.id} />
              );
            })
            }

            {/* <Ionicons name="heart" size={20} color="red" /> */}

          </View>
        </View>
      </View>

      {/* Question Container */}
      <View style={{ backgroundColor: "skyblue" }}>
        <Text style={styles.text}>{questions[questionIndex].question}</Text>
      </View>

      {/* Options Container */}
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

        {/*Modal End Display */}
        <Modal visible={isModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.centeredView}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>

              <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#485696", borderRadius: 10, justifyContent: "center", width: "95%", gap: 10 }}>
                <Pressable
                  onPress={() => {
                    setCurrentIndex(0);
                    setTracker(0);
                    setHeartId(0);
                    setSelectedOption(null);
                    setIsModal(false);
                  }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image source={require("./assets/images/close.png")} style={styles.imageEnd} />
                </Pressable>

                <Pressable
                  onPress={() => {
                    setCurrentIndex(0);
                    setTracker(0);
                    setHeartId(0);
                    setSelectedOption(null);
                    setIsModal(false);
                  }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image source={require("./assets/images/reload.jpg")} style={styles.imageEnd} />
                </Pressable>
              </View>

            </View>
          </View>
        </Modal>


        {/*Modal GameOver */}
        <Modal visible={isOverModal}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.centeredView}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>

              <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#485696", borderRadius: 10, justifyContent: "center", width: "95%", gap: 10 }}>
                <Pressable
                  onPress={() => {
                    setCurrentIndex(0);
                    setTracker(0);
                    setSelectedOption(null);
                    setHeartId(0);
                    setIsOverModal(false);
                  }}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image source={require("./assets/images/reload.jpg")} style={styles.imageEnd} />
                  <Text style={{color:"white", fontSize:28, textAlign:"center"}}>GameOver</Text>
                </Pressable>
              </View>

            </View>
          </View>
        </Modal>

        {/* Check Button */}
        <Pressable
          onPress={() => {

            if (tracker === questions.length - 1) {
              if (selectedOption['correct']) {
                setTracker(tracker + 1);
                setSelectedOption(null);
                setIsModal(true);
              } else {
                Alert.alert('Wrong answer');
                setHeartId(heartId + 1);
                if (heartId == 4) {
                  setIsOverModal(true);
                  setSelectedOption(null);
                }
              }
            } else {
              // setCurrentIndex(tracker);
              setSelectedOption(null);
              if (selectedOption['correct']) {
                if (tracker < questions.length - 1) {
                  setCurrentIndex(questionIndex + 1);
                  setTracker(tracker + 1);
                  // Alert.alert(`${tracker}`);
                }

              } else {
                // decrease life if user choses wrong answer
                // check if life ==0 then display Alert with message game over
                // Restart game
                setHeartId(heartId + 1);
                Alert.alert(`Wrong answer`);
                if (heartId == 4) {
                  setIsOverModal(true);
                  setSelectedOption(null);
                }
              }
            }
          }}
          disabled={selectedOption == null}
          style={{
            backgroundColor: selectedOption == null ? 'gray' : 'blue',
            padding: 15, marginBottom: 10, borderRadius: 10, width: "40%"
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center", color: "white" }}>Check
            {/* <Ionicons size={30} color="white" name="heart" /> */}
          </Text>
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
    margin: 7,
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
    margin: 7,
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
    margin: 10,
    padding: 15,
    width: 150,
    height: "50%",
    borderRadius: 25,
    resizeMode: "contain",
    borderWidth: 4,
    borderColor: "gray"
  }

});
