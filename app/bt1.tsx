import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text, StyleSheet } from "react-native"
import { Home, Settings } from "lucide-react-native"

const BottomTab = createBottomTabNavigator()

const ScreenA = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen A</Text>
  </View>
)

const ScreenB = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Screen B</Text>
  </View>
)

const BottomTopTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF6633", // Black to match your text
        tabBarInactiveTintColor: "#666666", // Gray for inactive tabs
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={ScreenA}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={ScreenB}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
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
    backgroundColor: "#C0C0C0",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
  },
})

export default BottomTopTabs

