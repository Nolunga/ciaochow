export type RootStackParamList = {
  LoginScreen: undefined
  RegisterScreen: undefined
  ChowScreen: undefined
  LandingScreen: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
