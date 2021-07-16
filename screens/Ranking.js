import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

function RankingScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>ランキングページ</Text>
        {/* <Button 
           title = "goto details"
           onPress ={() => navigation.navigate("Details")}
        /> */}
      </View>
    );
  };

  export default RankingScreen;

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
  });