import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const TopTab = createMaterialTopTabNavigator()

const ScreenA = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Screen Yêu thích</Text>
  </View>
)

const ScreenB = () => (
  <View style={styles.container2}>
    <Text style={styles.text}>Screen Phổ biến</Text>
  </View>
)

const ScreenC = () => (
  <View style={styles.container3}>
    <Text style={styles.text}>Trực tiếp</Text>
  </View>
)

const TopTabs = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ffffff",
          elevation: 0, // Remove shadow on Android
          shadowOpacity: 0, // Remove shadow on iOS
        },
        tabBarActiveTintColor: "#FF6633",
        tabBarInactiveTintColor: "#666666",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "none", // Prevents automatic uppercase
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#000000",
          height: 3,
        },
        tabBarShowIcon: true,
        tabBarPressColor: "transparent", // Remove ripple effect on Android
      }}
    >
      <TopTab.Screen
        name="Yêu thích"
        component={ScreenA}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="heart" size={20} color={color} />,
        }}
      />
      <TopTab.Screen
        name="Phổ biến"
        component={ScreenB}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="trending-up" size={20} color={color} />,
        }}
      />
      <TopTab.Screen
        name="Trực tiếp"
        component={ScreenC}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="videocam" size={20} color={color} />,
        }}
      />
    </TopTab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00f0",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6633",
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

export default TopTabs

