import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Map } from "../pages/Map";
import { Timer } from "../pages/Timer";
import { Pokepedia } from "../pages/Pokepedia";
import { Profile } from "../pages/Profile";
import { Favorites } from "../pages/PokemonsFavorites";

import { FontAwesome5, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#3DC0CD",
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
                        return<FontAwesome5 name="map-marker-alt" size={size} color={"#D58100"}/>
                        }
                        return<FontAwesome5 name="map-marker-alt" size={size} color={"#FFF"}/>
                      }
                }}
            />



            <Tab.Screen
                name="Timer"
                component={Timer}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused){
                        return<Ionicons name="timer-outline" size={size} color={"#00118D"}/>
                        }
                        return<Ionicons name="timer" size={size} color={"#FFF"}/>
                      }
                }}
            />

            <Tab.Screen
                name="Pokepedia"
                component={Pokepedia}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused){
                        return<MaterialCommunityIcons name="cellphone-information" size={size} color={"#FF0000"}/>
                        }
                        return<MaterialCommunityIcons name="cellphone" size={size} color={"#FFF"}/>
                      }
                }}
            />

            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused){
                        return<MaterialCommunityIcons name="cellphone" size={size} color={"#FF0000"}/>
                        }
                        return<MaterialCommunityIcons name="cellphone" size={size} color={"#FFF"}/>
                      }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused){
                        return<FontAwesome5 name="users" size={size} color={"#82E0AA"}/>
                        }
                        return<FontAwesome5 name="users" size={size} color={"#FFF"}/>
                      }
                }}
            />
        </Tab.Navigator>
    )
}
