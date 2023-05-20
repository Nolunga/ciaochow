import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView } from 'react-native'
import Toast from 'react-native-toast-message'
import StyledButton from '../../components/Button'
import Flex from '../../components/Flex'
import StyledText from '../../components/StyledText'
import { useAppContext } from '../../context/App'

type Chow = {
  id: number
  title: string
  description: string
  image: string
}

const ChowScreen = () => {
  const { jwtToken } = useAppContext()

  const [isLoading, setIsLoading] = useState(false)
  const [isFav, setIsFav] = useState(false)

  const [chows, setChows] = useState<Chow[]>([])
  const [chow, setChow] = useState<Chow>()

  const onFindSomethingElse = () => {
    if (chow) {
      setIsLoading(true)
      const randomChow = chows.find((item) => item.id !== chow.id)
      setChow(randomChow)
      setIsLoading(false)
    }
  }

  const fetchChows = async () => {
    try {
      setIsLoading(true)
      // TODO: make this URL an environment variable
      const { data } = await axios.get('', {
        headers: { Authorization: `Bearer ${jwtToken}` }
      })
      const foodChows = data.data.map((chow: any) => ({
        id: chow.id,
        title: chow.attributes.Title,
        description: chow.attributes.Description,
        // Strapi does not return the full url of the image, so we need to add the origin url here
        image: '' + chow.attributes.Image.data[0].attributes.url
      }))
      setChows(foodChows)
      setChow(foodChows[0])
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchChows()
  }, [])

  return (
    <Flex justifyContent='space-between' position='relative'>
      <Flex height='40%' />
      <Flex
        width='100%'
        height='45%'
        backgroundColor='gray'
        position='absolute'
      >
        {!isLoading && chow ? (
          <Image
            source={{
              uri: chow.image
            }}
            resizeMode='cover'
            style={{
              height: '100%',
              width: '100%'
            }}
          />
        ) : (
          <ActivityIndicator size='large' color='#0EB177' />
        )}
        <LinearGradient
          style={{
            height: '100%',
            width: '100%',
            zIndex: 1,
            position: 'absolute'
          }}
          colors={['transparent', 'transparent', 'rgba(0,0,0,0.8)']}
        />
      </Flex>
      <Flex
        height='60%'
        backgroundColor='white'
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        justifyContent='space-between'
      >
        {!isLoading ? (
          <Flex>
            <Flex
              margin={20}
              flexDirection='row'
              justifyContent='space-between'
            >
              <StyledText fontSize={24}>{chow?.title}</StyledText>
              <Flex
                size={30}
                borderRadius={8}
                backgroundColor='gray'
                justifyContent='center'
                alignItems='center'
                onPress={() => setIsFav((prev) => !prev)}
              >
                {isFav ? (
                  <AntDesign name='heart' color='red' size={20} />
                ) : (
                  <AntDesign name='hearto' color='white' size={20} />
                )}
              </Flex>
            </Flex>
            <Flex
              flexDirection='row'
              marginTop={20}
              justifyContent='space-around'
              width='80%'
              alignSelf='center'
            >
              <Flex
                paddingBottom={10}
                borderBottomWidth={4}
                borderBottomColor='#0EB177'
              >
                <StyledText textAlign='center'>Description</StyledText>
              </Flex>
              {/* TODO: update API with nutritional facts */}
              <Flex>
                <StyledText textAlign='center'>Nutrition facts</StyledText>
              </Flex>
            </Flex>
            <Flex height={1} width='100%' backgroundColor='lightgray' />
            <ScrollView
              style={{ height: '55%' }}
              contentContainerStyle={{ padding: 20 }}
            >
              <StyledText>{chow?.description}</StyledText>
            </ScrollView>
          </Flex>
        ) : (
          <ActivityIndicator size='large' color='#0EB177' />
        )}
        <Flex
          borderRadius={30}
          width='100%'
          height={100}
          backgroundColor='white'
          justifyContent='center'
          shadowColor='#000'
          shadowOffset={{
            width: 0,
            height: 1
          }}
          shadowOpacity={0.1}
          shadowRadius={8.84}
          elevation={5}
        >
          <StyledButton
            loading={isLoading}
            text='Nah! Find something else.'
            fontWeight='bold'
            onPress={onFindSomethingElse}
            width='80%'
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ChowScreen
