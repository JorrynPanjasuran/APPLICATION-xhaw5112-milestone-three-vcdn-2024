import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CartProvider } from './screens/CartContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import CoursesScreen from './screens/SixWeekCoursesScreen';
import AddToCartScreen from './screens/AddToCartScreen';
import ViewCartScreen from './screens/ViewCartScreen';
import FirstAidScreen from './screens/FirstAidScreen';
import SewingScreen from './screens/SewingScreen';
import LandscapingScreen from './screens/LandscapingScreen';
import LifeSkillsScreen from './screens/LifeSkillsScreen';
import CookingScreen from './screens/CookingScreen';
import ChildMindingScreen from './screens/ChildMindingScreen';
import GardenMaintenanceScreen from './screens/GardenMaintenanceScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}

      />
      <Tab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add to Cart"
        component={AddToCartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="View Cart"
        component={ViewCartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="eye-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home Tabs"
        component={BottomTabs}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="call-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => (
  <CartProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="FirstAid" component={FirstAidScreen} />
          <Stack.Screen name="Sewing" component={SewingScreen} />
          <Stack.Screen name="Landscaping" component={LandscapingScreen} />
          <Stack.Screen name="LifeSkills" component={LifeSkillsScreen} />
          <Stack.Screen name="Cooking" component={CookingScreen} />
          <Stack.Screen name="ChildMinding" component={ChildMindingScreen} />
          <Stack.Screen name="GardenMaintenance" component={GardenMaintenanceScreen} />
          <Stack.Screen name="AddToCart" component={AddToCartScreen} />
          <Stack.Screen name="ViewCart" component={ViewCartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </CartProvider>
);




export default App;
