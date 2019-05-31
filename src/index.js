import React from 'react';

import { Image, SafeAreaView, ScrollView, View } from 'react-native';

import {
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator,
    createStackNavigator,
    createSwitchNavigator,
    DrawerItems
} from 'react-navigation';

import ConsultasMedico from './pages/consultasMedico';
import ConsultasPaciente from './pages/consultasPaciente';
import Main from './pages/main';
import Login from './pages/login';

const AuthStack = createStackNavigator({ Login });

const MainNavigator = createBottomTabNavigator(
    {
        Main,
        ConsultasMedico,
        ConsultasPaciente
    },
    {
        initialRouteName: "Main",
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            inactiveBackgroundColor: "#dd99ff",
            activeBackgroundColor: "#B727FF",
            activeTintColor: "#FFFFFF",
            inactiveTintColor: "#FFFFFF",
            style: {
                height: 50
            }
        }
    }
);
export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack
        },
        {
            initialRouteName: "AuthStack"
        }
    )
);