import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

function TimeLineScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>TimeLine</Text>
        <Button 
           title = "goto details"
           onPress ={() => navigation.navigate("Details")}
        />
      </View>
    );
  };

  export default TimeLineScreen;

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
  });