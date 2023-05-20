import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter'
import { MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates'
import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'
import AppProvider from './src/context/App'
import AppNavigation from './src/navigation'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    MontserratAlternates_600SemiBold
  })
  if (!fontsLoaded) {
    return null
  }
  return (
    <AppProvider>
      <StatusBar style='light' />
      <AppNavigation />
      <Toast position='bottom' />
    </AppProvider>
  )
}
