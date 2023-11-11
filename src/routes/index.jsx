import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Map } from "../pages/Map";

import { FontAwesome5} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#566573",
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: "#fff"
            }}
        >

            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused){
                        return<FontAwesome5 name="map-marker-alt" size={size} color={"#82E0AA"}/>
                        }
                        return<FontAwesome5 name="map-marker-alt" size={size} color={"#FFF"}/>
                      }
                }}
            />
        </Tab.Navigator>
    )
}
