import { PropsWithChildren } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions
} from 'react-native'
import Flex from '../components/Flex'
import StyledText from '../components/StyledText'
import images from '../theme/images'

type Props = PropsWithChildren & {
  isLogin?: boolean
}

const AuthLayout = ({ isLogin, children }: Props) => {
  const { width } = useWindowDimensions()

  return (
    <Flex backgroundColor='white' height='100%'>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='height' enabled>
        <ScrollView
          contentContainerStyle={{
            position: 'relative',
            flex: 1,
            height: '100%',
            paddingBottom: 50
          }}
        >
          <Flex
            position='relative'
            height='50%'
            width={width}
            justifyContent='flex-end'
          >
            <Image
              source={images.AuthBGImg}
              style={{ height: '100%', width, position: 'absolute' }}
            />
            <Flex
              height='80%'
              width='90%'
              alignSelf='center'
              justifyContent='flex-end'
            >
              <StyledText
                fontWeight='bold'
                fontSize={34}
                color='white'
                marginBottom='20%'
              >
                {isLogin ? 'Login' : 'Register'}
              </StyledText>
              <Image
                source={isLogin ? images.BoyImg : images.GirlImg}
                resizeMode='contain'
                style={{
                  height: '100%',
                  width: '50%',
                  position: 'absolute',
                  alignSelf: 'flex-end'
                }}
              />
            </Flex>
          </Flex>
          <Flex paddingTop={20}>{children}</Flex>
        </ScrollView>
      </KeyboardAvoidingView>
    </Flex>
  )
}
export default AuthLayout
