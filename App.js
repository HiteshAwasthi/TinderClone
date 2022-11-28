import React from "react";
import { Text, View, Image,ImageBackground, color } from "react-native";
import { StyleSheet } from "react-native";

const App = ()=>{
     

return (
      <View style={styles.body}>
        <View style = {styles.card}>
          <ImageBackground
          source={{
            uri:'https://i.pinimg.com/originals/6d/75/5c/6d755c5d3f8331bd85f055cf60b803d4.jpg'
          }}
          style= {styles.Image}
          >
            <View style={styles.cardInner}>

            
           <Text style={styles.Name}>Raju Bhai</Text> 
           <Text style={styles.bio}>21 Din me paisa double</Text>
           </View>
          </ImageBackground>   
       </View>
      </View>
);


};

const styles = StyleSheet.create({
  body:{
  
    flex:1,
    justifyContent: 'center',
    alignItems:'center'

  },
  Image:{
    width:'100%',
    height:'100%',
    borderRadius: 10,
    overflow:'hidden',
    justifyContent:'flex-end',
   
  },
  card:{
     width:'95%',
     height:'70%',
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height:5,
    },
    shadowOpacity: 1,
    shadowRadius: 7,

    elevation: 12,
      },
   Name:{
      fontSize:30,
      fontWeight:'bold',
      color:'white'     
   },
   bio:{
    fontSize:18,
    color:'white',
    lineHeight:25,
   },
   cardInner:{
    padding:10,
   }    
})

export default App;