import React, { Component } from 'react'
import {
  Container,
  Content,
  Icon,
} from 'native-base'
import styled from 'styled-components/native'
import { Text, Image, ImageBackground } from 'react-native'

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

const LikeWrapper = styled.View`
  padding: 10px 40px;
  border: 4px solid seagreen;
  border-radius: 4px;
  transform: rotate(-10deg);
`
const LikeText = styled.Text`
  font-size: 18px;
  color: seagreen;
`

const NopeWrapper = styled.View`
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
  position: absolute;
  left: 4px;
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

export default class App extends Component {
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
            {images.map((image, index) => (
              <ImageBg
                key={index}
                imageStyle={{ borderRadius: 10 }}
                source={{ uri: image }}
              >
                <Actions>
                  <LikeWrapper>
                    <LikeText>LIKE</LikeText>
                  </LikeWrapper>

                  <NopeWrapper>
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
            ))}
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
