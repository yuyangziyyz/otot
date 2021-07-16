import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

function CategoryScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>カテゴリ検索ページ</Text>
        {/* <Button 
           title = "goto details"
           onPress ={() => navigation.navigate("Details")}
        /> */}
      </View>
    );
  };

  export default CategoryScreen;

  const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
  });