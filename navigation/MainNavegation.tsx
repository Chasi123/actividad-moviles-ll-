import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ActualizarScreen from "../screens/ActualizarScreen";
import CrearScreen from "../screens/CrearScreen";
import EliminarScreen from "../screens/EliminarScreen";
import LeerScreen from "../screens/LeerScreen";
import OperacionMatematica from "../screens/OperacionMatematica";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();

function MyStack(){
    return (
        <stack.Navigator>
            <stack.Screen name="Home" component={HomeScreen}/>
            <stack.Screen name="Actulizar" component={ActualizarScreen}/>
            <stack.Screen name="Crear" component={CrearScreen}/>
            <stack.Screen name="Eliminar" component={EliminarScreen}/>
            <stack.Screen name="Leer" component={LeerScreen}/>
            <stack.Screen name="Operacion" component={OperacionMatematica}/>
        </stack.Navigator>
    );
}

export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}