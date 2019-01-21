import React, { PureComponent } from 'react'
import { Image, ScrollView } from 'react-native'
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base'

const items = [
  {
    url: '',
    thumbnail: 'https://img.youtube.com/vi/3bJkVSMs4dw/mqdefault.jpg',
    title: 'Anh là ai Phương Ly',
    avatar: 'https://avatars0.githubusercontent.com/u/22128074?s=460&v=4',
  },
  {
    url: '',
    thumbnail: 'https://img.youtube.com/vi/8Qr9WW2bLAQ/mqdefault.jpg',
    title: 'Nép vào anh và nghe anh hát',
    avatar: 'https://avatars0.githubusercontent.com/u/22128074?s=460&v=4',
  },
  {
    url: '',
    thumbnail: 'https://img.youtube.com/vi/VeJFayj_aZ0/mqdefault.jpg',
    title: 'Đôi lời - Hoàng Dũng',
    avatar: 'https://avatars0.githubusercontent.com/u/22128074?s=460&v=4',
  },
  {
    url: '',
    thumbnail: 'https://img.youtube.com/vi/9cPJLlNwO-w/mqdefault.jpg',
    title: 'Chẳng nói nên lời - Hoàng Dũng',
    avatar: 'https://avatars0.githubusercontent.com/u/22128074',
  },
]

class ListVideo extends PureComponent {
  render() {
    return (
      <ScrollView>
        {items.map((item, index) => (
          <Card key={index}>
            <CardItem cardBody>
              <Image source={{ uri: item.thumbnail }}
                     style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail
                  small
                  source={{ uri: item.avatar }}
                />
                <Body>
                <Text>{item.title}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        ))}
      </ScrollView>
    )
  }
}

ListVideo.propTypes = {}

export default ListVideo
