import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class CatList extends React.Component {
  render() {
    const {
      title,
      description,
      urlToImage,
      url
    } = this.props.breed;

    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};