import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { Image, SafeAreaView, Text } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import StyledButton from '../../components/Button'
import Flex from '../../components/Flex'
import StyledText from '../../components/StyledText'
import images from '../../theme/images'

const LandingScreen = () => {
  const { navigate } = useNavigation()

  const [currentSlide, setCurrentSlide] = useState(0)

  const SLIDES = [
    {
      key: 'one'
    },
    {
      key: 'two'
    },
    {
      key: 'three'
    }
  ]

  const renderSlides = (slide: {
    item: (typeof SLIDES)[number]
    index: number
  }) => {
    const { item, index } = slide
    return (
      <Flex
        backgroundColor='#4CAD73'
        height='100%'
        justifyContent='space-between'
        padding={20}
      >
        <Text
          style={{
            fontFamily: 'MontserratAlternates_600SemiBold',
            color: 'white',
            fontSize: 28,
            textAlign: 'center'
          }}
        >
          CiaoChow <FontAwesome5 name='carrot' size={24} color='white' />
        </Text>
        <Image
          source={images.LandingImg}
          style={{ width: '100%', height: '60%' }}
          resizeMode='contain'
        />
        <Flex
          alignItems='center'
          flex={0}
          justifyContent='center'
          padding={16}
          width='100%'
          zIndex={1}
          elevation={1}
        >
          <StyledText fontSize={18} textAlign='center' color='white'>
            Hungry? <StyledText fontWeight='bold'>CiaoChow</StyledText> helps
            {'\n'}
            you find something to eat.
          </StyledText>
        </Flex>
        <Flex height={50} marginBottom={50}>
          {currentSlide === 2 && (
            <StyledButton
              borderRadius={10}
              width='100%'
              outline
              text='Get Started'
              fontWeight='bold'
              onPress={() => navigate('RegisterScreen')}
            />
          )}
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex height='100%' backgroundColor='#4CAD73'>
      <SafeAreaView style={{ height: '100%' }}>
        <AppIntroSlider
          dotStyle={{
            backgroundColor: 'gray',
            height: 10,
            marginBottom: -24,
            width: 10
          }}
          activeDotStyle={{
            backgroundColor: 'white',
            height: 10,
            marginBottom: -24,
            width: 10
          }}
          renderItem={renderSlides}
          data={SLIDES}
          renderNextButton={() => <></>}
          renderDoneButton={() => <></>}
          onSlideChange={setCurrentSlide}
        />
      </SafeAreaView>
    </Flex>
  )
}

export default LandingScreen
