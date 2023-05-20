import React, { PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'

type Props = TextStyle &
  PropsWithChildren & {
    adjustsFontSizeToFit?: boolean
    allowFontScaling?: boolean | undefined
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined
    lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined
    numberOfLines?: number | undefined
    onPress?: () => void
  }

const StyledText: React.FC<Props> = ({
  children,
  allowFontScaling,
  adjustsFontSizeToFit,
  ellipsizeMode,
  lineBreakMode,
  numberOfLines,
  onPress,
  fontWeight,
  ...rest
}) => {
  let fontFamily = 'Inter_400Regular'

  switch (fontWeight) {
    case 'bold':
      fontFamily = 'Inter_700Bold'
      break
    default:
      fontFamily = 'Inter_400Regular'
      break
  }

  return (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      ellipsizeMode={ellipsizeMode}
      lineBreakMode={lineBreakMode}
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={{ fontFamily, ...rest }}
    >
      {children}
    </Text>
  )
}

export default StyledText
