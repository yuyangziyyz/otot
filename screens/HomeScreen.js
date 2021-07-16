import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import MyHouseScreen from  '../screens/MyHouse';
import TimeLineScreen from  '../screens/TimeLine';
import RecordingScreen from  '../screens/Reocrding';
import CategoryScreen from  '../screens/Category';
import RankingScreen from  '../screens/Ranking';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator initialRouteName="MyHouse" activeColor="#fff">
            
            <Tab.Screen
                name="MyHouse"
                component={MyHouseScreen}
                options={{
                  tabBarLabel: 'ホーム',
                  tabBarColor:'#009387',
                  tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                  ),
                }}
            />
            
            <Tab.Screen
                name="TimeLine"
                component={TimeLineScreen}
                options={{
                  tabBarLabel: 'タイムライン',
                  tabBarColor:'#6518F4',
                  tabBarIcon: ({ color }) => (
                    <Icon name="ios-timer" color={color} size={26} />
                  ),
                }}
            />
            
            <Tab.Screen
                name="Recording"
                component={RecordingScreen}
                options={{
                  tabBarLabel: '録音',
                  tabBarColor:'#1F65FF',
                  tabBarIcon: ({ color }) => (
                    <Icon name="recording" color={color} size={26} />
                  ),
                }}
            />
            
            <Tab.Screen
                name="Category"
                component={CategoryScreen}
                options={{
                  tabBarLabel: 'カテゴリ',
                  tabBarColor:'#D02760',
                  tabBarIcon: ({ color }) => (
                    <Icon name="ios-apps-sharp" color={color} size={26} />
                  ),
                }}
            />
            
            <Tab.Screen
                name="Ranking"
                component={RankingScreen}
                options={{
                  tabBarLabel: 'ランキング',
                  tabBarColor:'#D38A1D',
                  tabBarIcon: ({ color }) => (
                    <Icon name="ios-cellular" color={color} size={26} />
                  ),
                }}
            />
            
        </Tab.Navigator>
    );
} 

export default HomeScreen;