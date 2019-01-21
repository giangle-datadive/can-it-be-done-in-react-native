import React, { Component } from 'react'
import { Container, Header, Content } from 'native-base'
import Footer from './components/Footer'
import ListVideo from './components/ListVideo'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListVideo />
        </Content>
        <Footer />
      </Container>
    )
  }
}
