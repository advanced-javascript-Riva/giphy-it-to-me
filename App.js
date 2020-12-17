import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import  {createAppContainer, createSwitchNavigator} from 'react-navigation';

const mainNavigator  = createSwitchNavigator ({
    Login: { screen : LoginScreen },
    Profile: { screen : ProfileScreen }
})

const App = createAppContainer(mainNavigator);

export default App;
