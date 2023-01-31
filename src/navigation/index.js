import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import DishDetailsScreen from '../screens/DishDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />}} />
            <Tab.Screen name="Orders" component={OrderScreen} />
            <Tab.Screen name="Profile" component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabs;