import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

function RecordingScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Recording</Text>
        <Button 
           title = "goto details"
           onPress ={() => navigation.navigate("Details")}
        />
      </View>
    );
  };

  export default RecordingScreen;

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
  });