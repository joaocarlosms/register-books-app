import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import Login from "../src/screens/Login/login";
import Home from '../src/screens/Home/home';

const {Navigator, Screen} = createDrawerNavigator();

export function DrawerRoutes() {
    return(
        <Navigator  >
            <Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    
                    drawerIcon: ({color, size}) => <Feather name="user" color={color} size={size} />
                }}
            />
            <Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: true,
                    drawerLabel: 'Página Inicial',
                    drawerIcon: ({color, size}) => <Feather name="home" color={color} size={size} />
                }}
            />
        </Navigator>
    )
}