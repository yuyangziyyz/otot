import React, { useState } from 'react';
import { TouchableOpacity,  View} from 'react-native';
import { Text, Button, Input, Image } from 'react-native-elements';
import SocialButton from '../components/SocialButton';
import firebase from '../firebase/firebase';

const SigninScreen = ({navigation}) => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    const Signin = async() => {
        try{
            const response=await firebase.auth().signInWithEmailAndPassword(email,password);
            navigation.navigate('Home');
        }catch(err){
            setError(err.message);
        }
    }

    return (
        <View style={{
            backgroundColor:'#8BDEFF',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            padding:20,
        }}>
        <Image 
            source = {require('../assets/image/logo.png')}
            style={{height:120,width:120,resizeMode:'cover'}}
        />
        <Text style={{fontSize:28,marginBottom:10,color:'#051d5f',}}>音フェチ</Text> 

        <Input label="メールアドレス" value={email} onChangeText={setEmail} />
        <Input label="パスワード" value={password} onChangeText={setPassword} secureTextEntry />

        {
            error?
            <Text style={{color:'red'}}>{error}</Text>
            :null
        }

        <Button title="ログイン" onPress={() => Signin()} />
        <TouchableOpacity　onPress={() =>navigation.navigate('Signup')}>
            <Text>アカウント持っていない方</Text>
        </TouchableOpacity>


        <SocialButton
            buttonTitle="facebookアカウントでログイン"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}} 
        />
        <SocialButton
            buttonTitle="Googleアカウントでログイン"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}} 
        />
        </View>
    );
} 

export default SigninScreen;