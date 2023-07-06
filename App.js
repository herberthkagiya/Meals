import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons"

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  function DrawerNavigator(){
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          sceneContainerStyle: {backgroundColor: '#3f2f25'},
          drawerContentStyle: {backgroundColor: '#351401'},
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1',
        }}>

        <Drawer.Screen 
          name='Categories' 
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => <Ionicons  name={"list"} color={color} size={size} />
          }}/>

        <Drawer.Screen 
          name='Favorites' 
          component={FavoritesScreen}
          options={{
            drawerIcon: ({color, size}) => <Ionicons  name={"star"} color={color} size={size} />
          }} />
      </Drawer.Navigator> 
    );
  
  }

  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>

        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401"
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: "#3f2f25",
            }
          }} >

          <Stack.Screen 
            name='MealsCategories' 
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false
            }}/>

          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetails' component={MealDetailScreen} />  

        </Stack.Navigator>
      </NavigationContainer>
    </> 
  );
}

const styles = StyleSheet.create({

  categoryList: {
    flex: 1
  }
});
