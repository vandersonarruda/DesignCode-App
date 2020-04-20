import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Section"
        component={SectionScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    // Se não quiser Tab, basta usar o <Stack.Navigator> acima dentro do <NavigationContainer
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home"
                size={26}
                color={focused ? activeColor : inactiveColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={ProjectsScreen}
          options={{
            tabBarLabel: "Projects",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-folder"
                size={26}
                color={focused ? activeColor : inactiveColor}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Courses"
          component={CoursesScreen}
          options={{
            tabBarLabel: "Courses",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-albums"
                size={26}
                color={focused ? activeColor : inactiveColor}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
