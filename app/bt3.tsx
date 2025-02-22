import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

const ScreenA = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Cho Bạn</Text>
  </View>
)

const ScreenB = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Trục tiếp</Text>
  </View>
)

const ScreenC = () => (
  <View style={styles.container3}>
    <Text style={styles.text}>Trò chơi</Text>
  </View>
)

const TopTabs = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarActiveTintColor: "#FF6633",
        tabBarInactiveTintColor: "#666",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#000",
          height: 3,
        },
      }}
    >
      <TopTab.Screen
        name="Cho Bạn"
        component={ScreenA}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />,
        }}
      />
      <TopTab.Screen
        name="Trục tiếp"
        component={ScreenB}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="videocam" size={20} color={color} />,
        }}
      />
      <TopTab.Screen
        name="Trò chơi"
        component={ScreenC}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="game-controller" size={20} color={color} />,
        }}
      />
    </TopTab.Navigator>
  )
}

const BottomTopTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF6633",
        tabBarInactiveTintColor: "#666666",
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TopTabs}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={ScreenC}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#72deaf",
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C0C0C0",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
  },
})

export default BottomTopTabs

