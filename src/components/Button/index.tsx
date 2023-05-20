import React, { ReactNode } from 'react'
import { ActivityIndicator, TouchableOpacity, ViewStyle } from 'react-native'
import Flex from '../Flex'
import StyledText from '../StyledText'

type Props = ViewStyle & {
  text: string
  textColor?: string
  onPress: () => void
  loading?: boolean
  disabled?: boolean
  outline?: boolean
  icon?: ReactNode
  fontSize?: number
  fontWeight?: 'bold'
}

const StyledButton = ({
  text,
  onPress,
  textColor,
  loading,
  disabled,
  outline,
  icon,
  fontSize,
  fontWeight,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled || loading ? 1 : undefined}
      onPress={() => {
        if (disabled) {
          return false
        }
        return onPress()
      }}
      style={{
        ...defaultStyling,
        backgroundColor: outline ? 'white' : disabled ? 'gray' : '#4CAD73',
        borderColor: outline ? '#4CAD73' : undefined,
        borderWidth: outline ? 1 : undefined,
        ...rest
      }}
    >
      {loading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Flex flexDirection='row' alignItems='center'>
          {icon && <Flex marginRight={10}>{icon}</Flex>}
          <StyledText
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={outline ? '#4CAD73' : textColor ?? 'white'}
          >
            {text}
          </StyledText>
        </Flex>
      )}
    </TouchableOpacity>
  )
}

const defaultStyling: ViewStyle = {
  height: 48,
  width: 200,
  alignSelf: 'center',
  backgroundColor: '#4CAD73',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 10,
  paddingHorizontal: 5,
  borderRadius: 5
}

export default StyledButton
