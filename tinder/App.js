import React, { Component } from 'react'
import {
  Container,
  Content,
  Icon,
} from 'native-base'
import styled from 'styled-components/native'
import { Text, Image, ImageBackground, Animated, PanResponder, Dimensions, View } from 'react-native'

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 20px;
`
const BodyContent = styled.View`
  padding: 4px;
  flex: 1;
`
const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`

const CloseIcon = styled(Icon)`
  font-size: 50px;
`

const FooterButton = styled.View`
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CustomContent = styled.View`
  background-color: aliceblue;
  flex: 1;
  padding-top: 18px;
`

const Actions = styled.View`
  flex-direction: row;
  padding: 20px 10px;
  justify-content: space-between;
`

const LikeWrapper = styled(Animated.View)`
  padding: 10px 40px;
  border: 4px solid seagreen;
  border-radius: 4px;
  transform: rotate(-10deg);
`
const LikeText = styled.Text`
  font-size: 18px;
  color: seagreen;
`

const NopeWrapper = styled(Animated.View)`
  padding: 10px 40px;
  border: 4px solid palevioletred;
  border-radius: 4px;
  transform: rotate(15deg);
`
const NopeText = styled.Text`
  font-size: 18px;
  color: palevioletred;
`

const Infos = styled.View`
  padding: 10px;
`

const ImageBg = styled(ImageBackground)`
height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const NameWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

const Name = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
`
const Age = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  color: #fff;
`

const AddressWrapper = styled.View`
  flex-direction: row;
`

const Address = styled.Text`
  color: #fff;
  margin-left: 10px;
`

const images = [
  'http://media3.onbox.vn:8088/phimonbox/images/20180619/1502098.jpg',
  'http://i6.funpeer.com/eRH74GIrRlRb.jpg',
]

const { width, height } = Dimensions.get('window')

export default class App extends Component {
  constructor(props) {
    super(props)
    this.position = new Animated.ValueXY()
    this.pan = PanResponder.create({
      onStartShouldSetPanResponder: (evt) => {
        this.setState({
          isUnder: evt.nativeEvent.pageY > (height / 2),
        })
        return true
      },
      onPanResponderMove: (evt, gesture) => {
        this.position.setValue({
          y: gesture.dy,
          x: gesture.dx,
        })
      },
      onPanResponderRelease: (evt, gesture) => {
        this.resetPosition()
      }
    })
    this.likeOpacity = new Animated.Value(0)
    this.nopeOpacity = new Animated.Value(0)
    this.state = {
      isUnder: false,
    }
  }

  resetPosition = () => {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start()
  }

  renderItem = (image, index) => {
    const { isUnder } = this.state
    const Component = index === 0 ? Animated.View : View
    const extendsProps = index === 0 ? this.pan.panHandlers : {}
    const output = isUnder ? ['90deg', '0deg', '-90deg'] : ['-90deg', '0deg', '90deg']
    const rotate = this.position.x.interpolate({
      inputRange: [-width / 2, 0, width / 2],
      outputRange: output,
    })
    const extendsStyle = index === 0 ? {
      ...this.position.getLayout(),
      transform: [{ rotate }]
    } : {}

    return (
      <Component
        {...extendsProps}
        key={index}
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          marginLeft: 4,
          ...extendsStyle,
        }}
      >

        <ImageBg
          key={index}
          imageStyle={{ borderRadius: 10 }}
          source={{ uri: image }}
        >
          <Actions>
            <LikeWrapper style={{
              opacity: this.position.x.interpolate({
                inputRange: [-width / 4, 0],
                outputRange: [1, 0],
              })
            }}
            >
              <LikeText>LIKE</LikeText>
            </LikeWrapper>

            <NopeWrapper style={{
              opacity: this.position.x.interpolate({
                inputRange: [0, width / 4],
                outputRange: [0, 1],
              })
            }}
            >
              <NopeText>NOPE</NopeText>
            </NopeWrapper>
          </Actions>

          <Infos>
            <NameWrapper>
              <Name>Phuong Anh</Name>
              <Age>18</Age>
            </NameWrapper>
            <AddressWrapper>
              <Icon style={{ fontSize: 14 }} name="attach" />
              <Address>5 kilometers away</Address>
            </AddressWrapper>
          </Infos>
        </ImageBg>
      </Component>
    )
  }


  render() {
    return (
      <Container>
        <CustomContent>
          <Header>
            <Icon name="contact" />
            <Icon name="square" />
            <Icon name="videocam" />
          </Header>
          <BodyContent>
            {images.map(this.renderItem).reverse()}
          </BodyContent>
          <Footer>
            <FooterButton>
              <CloseIcon name="close" />
            </FooterButton>
            <FooterButton>
              <Icon name="heart" />
            </FooterButton>
          </Footer>
        </CustomContent>
      </Container>
    )
  }
}
