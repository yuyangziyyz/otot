import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

function MyHouseScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>ホームページ</Text>
        {/* <Button 
           title = "goto details"
           onPress ={() => navigation.navigate("Details")}
        /> */}
      </View>
    );
  };

  export default MyHouseScreen;

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
  });