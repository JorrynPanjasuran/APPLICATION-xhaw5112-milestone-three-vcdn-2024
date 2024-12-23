// CODE ATTRIBUTION
// TITLE: React Native. (2024) Navigating Between Screens
// AVAILABLE: https://reactnative.dev/docs/navigation (Accessed: 1 November 2024)

// CODE ATTRIBUTION
// TITLE: React Navigation. (2024) Drawer Navigation
// AVAILABLE: https://reactnavigation.org/docs/drawer-based-navigation/ (Accessed: 1 November 2024)

// CODE ATTRIBUTION
// TITLE: React Native. (2024) Navigating Between Screens
// AVAILABLE: https://reactnative.dev/docs/navigation (Accessed: 11 November 2024)

// CODE ATTRIBUTION
// TITLE: React Navigation. (2024) Drawer Navigation
// AVAILABLE: https://reactnavigation.org/docs/drawer-based-navigation/ (Accessed: 11 November 2024)


// CODE ATTRIBUTION
// TITLE: IIE Module Manual 2024
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: First Edition: 2012
// AVAILABLE: https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: XHAW5112/d/p/w WORK INTEGRATED LEARNING 1 MODULE MANUAL
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: 2024 Edition
// AVAILABLE: https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: Principles of UI and UX Design - PIXD5112d/p/w MODULE OUTLINE
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: 2024 Edition (First published in 2022)
// AVAILABLE:https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: WEB DEVELOPMENT - WEDE5020/d/p/w MODULE MANUAL/GUIDE
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: 2024 Edition (First published in 2012)
// AVAILABLE: https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: HTML Tutorial
// AUTHOR: W3Schools
// DATE: 09/02/2023
// VERSION: N/A
// AVAILABLE: https://www.w3schools.com/html/ [Accessed 8 Nov. 2024]

import React from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CartProvider } from './screens/CartContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, TouchableOpacity } from 'react-native';
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

const BottomTabs = ({ navigation }) => {
  const routeNames = useNavigationState(state => state.routes[state.index].state?.routeNames || []);
  const currentRoute = routeNames[routeNames.length - 1];

  // Determine if the current route is About Us or Contact Us
  const isOnRestrictedScreen = currentRoute === 'About Us' || currentRoute === 'Contact Us';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              if (!isOnRestrictedScreen) {
                navigation.openDrawer(); // Open drawer if not on restricted screens
              } else {
                // Optionally show an alert or do nothing
                console.log('Drawer is disabled on this screen.');
              }
            }}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="menu-outline" size={30} color="#ffffff" />
          </TouchableOpacity>
        ),
        name: null, // Hide header title
        headerStyle: { backgroundColor: '#ff4081' },
        headerTintColor: '#ffffff',
      }}
    >
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
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffe6f0',
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#ff4081',
        },
        drawerActiveTintColor: '#ff4081',
        drawerInactiveTintColor: '#ff80ab',
        headerShown: false,
      }}
    >
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
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeDrawer} />
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
