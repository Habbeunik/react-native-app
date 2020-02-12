import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {Card, CardItem, Body, Container, Spinner} from 'native-base';

const SearchScreen = () => {
  return (
    <Container>
      <ScrollView>
        <View
          style={{backgroundColor: 'indigo', minHeight: '100%', padding: 15}}>
          <Text>Search Screen</Text>
          <TouchableOpacity onPress={() => Alert.alert('Just pressed me!!')}>
            <Card>
              <CardItem style={{backgroundColor: 'yellow'}}>
                <Body>
                  <Text>
                    When false, if there is a small amount of space available
                    around a text input (e.g. landscape orientation on a phone),
                    the OS may choose to have the user edit the text inside
                  </Text>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'data:image/jpeg;base64,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',
                  }}
                  style={{height: 200, width: null, flex: 1}}
                />
              </CardItem>
            </Card>
          </TouchableOpacity>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  When false, if there is a small amount of space available
                  around a text input (e.g. landscape orientation on a phone),
                  the OS may choose to have the user edit the text inside
                </Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://i2-prod.mirror.co.uk/incoming/article21470108.ece/ALTERNATES/s1200/0_Manchester-United-Training-Session.jpg',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  When false, if there is a small amount of space available
                  around a text input (e.g. landscape orientation on a phone),
                  the OS may choose to have the user edit the text inside
                </Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://lh3.googleusercontent.com/proxy/pBZv-QCneYUYj9kfX340EadlW9y_IxFSdd8Zx7JVJfiAr3aBleCIg4kiFQ7Bo7MVMwYwPFcL9NKA19EL90-EosMoSQO_bEN69925ABh2szoSYVf9SuD9hIAQeGimyg',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
          </Card>
          <Spinner color="#ccc" />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SearchScreen;
