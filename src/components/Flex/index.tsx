import React, { FC, PropsWithChildren } from 'react'
import { TouchableOpacity, ViewStyle } from 'react-native'

type Props = ViewStyle &
  PropsWithChildren & {
    onPress?: () => void
    disabled?: boolean
    activeOpacity?: number
    size?: number | string
  }
const Flex: FC<Props> = ({
  children,
  onPress,
  disabled,
  activeOpacity,
  size,
  ...rest
}) => (
  <TouchableOpacity
    disabled={!onPress || disabled}
    onPress={onPress}
    activeOpacity={activeOpacity}
    style={{
      width: size ?? rest.width,
      height: size ?? rest.height,
      ...rest
    }}
  >
    {children}
  </TouchableOpacity>
)

export default Flex
