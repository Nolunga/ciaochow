import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'
import { TextInput } from 'react-native'
import Flex from '../Flex'
import StyledText from '../StyledText'

type Props = {
  label: string
  value: string
  placeholder: string
  onChangeText: (value: string) => void
}

const PasswordInput = ({ label, onChangeText, value, placeholder }: Props) => {
  const [isVisible, setVisible] = useState(false)
  return (
    <Flex height={80}>
      <StyledText marginLeft={5} marginBottom={5}>
        {label}
      </StyledText>
      <Flex
        backgroundColor='#F2F2F2'
        flexDirection='row'
        alignItems='center'
        borderRadius={10}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isVisible}
          style={{
            paddingLeft: 10,
            height: 45,
            width: '90%'
          }}
        />
        <Flex onPress={() => setVisible((prev) => !prev)}>
          {isVisible ? (
            <Entypo name='eye-with-line' size={24} color='gray' />
          ) : (
            <Entypo name='eye' size={24} color='gray' />
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PasswordInput
