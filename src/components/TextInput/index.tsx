import { TextInput as RNTextInput } from 'react-native'
import Flex from '../Flex'
import StyledText from '../StyledText'

type Props = {
  label: string
  value: string
  placeholder: string
  onChangeText: (value: string) => void
}

const TextInput = ({ label, onChangeText, value, placeholder }: Props) => {
  return (
    <Flex height={80}>
      <StyledText marginLeft={5} marginBottom={5}>
        {label}
      </StyledText>
      <RNTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{
          paddingLeft: 10,
          height: 45,
          width: '100%',
          backgroundColor: '#F2F2F2',
          borderRadius: 10
        }}
      />
    </Flex>
  )
}

export default TextInput
