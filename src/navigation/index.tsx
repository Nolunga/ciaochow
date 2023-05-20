import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  ChowScreen,
  LandingScreen,
  LoginScreen,
  RegisterScreen
} from '../screens'
const AppNavigation = () => {
  const RootStack = createStackNavigator()

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='LandingScreen' component={LandingScreen} />
        <RootStack.Screen name='LoginScreen' component={LoginScreen} />
        <RootStack.Screen name='RegisterScreen' component={RegisterScreen} />
        <RootStack.Screen name='ChowScreen' component={ChowScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
