import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useState } from 'react'
import Toast from 'react-native-toast-message'
import StyledButton from '../../components/Button'
import Flex from '../../components/Flex'
import PasswordInput from '../../components/PasswordInput'
import StyledText from '../../components/StyledText'
import TextInput from '../../components/TextInput'
import { useAppContext } from '../../context/App'
import AuthLayout from '../../layout/AuthLayout'

const RegisterScreen = () => {
  const { setUser, setJwtToken } = useAppContext()
  const { navigate } = useNavigation()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onRegister = async () => {
    try {
      setIsLoading(true)
      // TODO: make this URL an environment variable

      const { data } = await axios.post('', { username, email, password })
      setJwtToken(data.jwt)
      setUser(data.user)
      navigate('ChowScreen')
    } catch (error: any) {
      console.log(error.message)
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout>
      <Flex
        backgroundColor='white'
        height='60%'
        alignSelf='center'
        width='100%'
        paddingHorizontal={20}
      >
        <TextInput
          label='username'
          placeholder='mucher'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          label='email'
          placeholder='yourmail@mail.com'
          value={email}
          onChangeText={setEmail}
        />
        <PasswordInput
          label='password'
          placeholder='your password'
          value={password}
          onChangeText={setPassword}
        />
        <StyledButton
          loading={isLoading}
          text='Register'
          onPress={onRegister}
          width='100%'
          marginBottom={20}
        />
        <StyledText
          color='#4CAD73'
          textAlign='center'
          onPress={() => navigate('LoginScreen')}
        >
          Have an account? <StyledText fontWeight='bold'>Login</StyledText>
        </StyledText>
      </Flex>
    </AuthLayout>
  )
}

export default RegisterScreen
