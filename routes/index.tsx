import { NavigationContainer } from "@react-navigation/native";
import { DrawerRoutes } from './drawer.routes'

//const {NavigationContainer} = createDrawerNavigator();

export function Routes() {
    return(
       <NavigationContainer>
            <DrawerRoutes />
       </NavigationContainer>
    )
}
