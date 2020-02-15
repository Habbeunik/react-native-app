import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>What would you like to eat?</Text>
          <Icon style={styles.headerIcon} type="EvilIcons" name="bell" />
        </View>
        <View style={styles.searchBox}>
          <Icon type="AntDesign" name="search1" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Find a food or Resturant"
          />
          <Icon
            type="MaterialIcons"
            name="filter-list"
            style={styles.searchIcon}
          />
        </View>
        <View style={styles.headerSlide}>
          <ScrollView horizontal>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/kJBLCGVxPRagVUponAXvtrAx4A3bZssmqrqSDD53QsoGs2Q3dLBaQb_aFZe9A3tMjuZrDpDXUZoOB02X9gChIO8L518GKWi058M-k2adlqv1j4U8IApHxyhsLe8QngIqWtis8qrcEFIl62_JfBUiuh_8C5c',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Sushi </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5FFRtI9aeMFBkYRKz_ZMFpShCzcIQGj6eQcFMhxfrg71HO8Ca',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>FeastFood </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-U_VLGYOsvYyWLoPC9qRRx2khP7wVDlPCcffbha-eyLigciXC',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Fruits </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhaEOGVrLlZGd49gulStqKVPVgG1KkJyun6ogp8JH7pS4Mw4xd',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Proteins </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTktPm_NKlFtYWgC-D94uPLnr9YvOo7xpLeHN2SzZJzXI6GLojo',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Ice Cream </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/kJBLCGVxPRagVUponAXvtrAx4A3bZssmqrqSDD53QsoGs2Q3dLBaQb_aFZe9A3tMjuZrDpDXUZoOB02X9gChIO8L518GKWi058M-k2adlqv1j4U8IApHxyhsLe8QngIqWtis8qrcEFIl62_JfBUiuh_8C5c',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Junks </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/kJBLCGVxPRagVUponAXvtrAx4A3bZssmqrqSDD53QsoGs2Q3dLBaQb_aFZe9A3tMjuZrDpDXUZoOB02X9gChIO8L518GKWi058M-k2adlqv1j4U8IApHxyhsLe8QngIqWtis8qrcEFIl62_JfBUiuh_8C5c',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Junks </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/kJBLCGVxPRagVUponAXvtrAx4A3bZssmqrqSDD53QsoGs2Q3dLBaQb_aFZe9A3tMjuZrDpDXUZoOB02X9gChIO8L518GKWi058M-k2adlqv1j4U8IApHxyhsLe8QngIqWtis8qrcEFIl62_JfBUiuh_8C5c',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Junks </Text>
            </View>
            <View style={styles.headerSlideItem}>
              <View style={styles.headerSlideCard}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/kJBLCGVxPRagVUponAXvtrAx4A3bZssmqrqSDD53QsoGs2Q3dLBaQb_aFZe9A3tMjuZrDpDXUZoOB02X9gChIO8L518GKWi058M-k2adlqv1j4U8IApHxyhsLe8QngIqWtis8qrcEFIl62_JfBUiuh_8C5c',
                  }}
                />
              </View>
              <Text style={styles.headerSlideText}>Junks </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.headline}>Popular Foods</Text>
          <View style={styles.middleSlide}>
            <ScrollView horizontal>
              <View style={styles.middleSlideCard}>
              <View style={styles.middleSlideCard}>
                <View style={styles.middleSlideCardImage} >
                  <Image source={{ uri: 'https://image.shutterstock.com/image-photo/grilled-beef-steak-potatoes-on-600w-629070965.jpg'}} style={{ width: '100%', height: null, flex: 1}} />
                </View>
                <View style={styles.middleSlideCardContent} >
                  <Text style={{ fontFamily: 'CeraPro-Light'}} >Grilled Salmon</Text>
                  <Text style={{ fontFamily: 'CeraPro-Light', fontWeight: 'bold'}}>$99.00</Text>
                </View>
              </View>
              <View style={styles.middleSlideCard}>
                <View style={styles.middleSlideCardImage} >
                  <Image source={{ uri: 'https://as2.ftcdn.net/jpg/02/73/00/31/500_F_273003187_rhcDd1aXxOfnx05uhDNhqPza1rIKztAg.jpg'}} style={{ width: '100%', height: null, flex: 1}} />
                </View>
                <View style={styles.middleSlideCardContent} >
                  <Text style={{ fontFamily: 'CeraPro-Light'}} >Grilled Salmon</Text>
                  <Text style={{ fontFamily: 'CeraPro-Light', fontWeight: 'bold'}}>$99.00</Text>
                </View>
              </View>
                <View style={styles.middleSlideCardImage} >
                  <Image source={{ uri: 'https://media.theeverygirl.com/wp-content/uploads/2018/07/15-Recipes-to-Meal-Prep-If-You-Want-to-Follow-The-Mediterranean-Diet-3.jpg'}} style={{ width: '100%', height: null, flex: 1}} />
                </View>
                <View style={styles.middleSlideCardContent} >
                  <Text style={{ fontFamily: 'CeraPro-Light'}} >Grilled Salmon</Text>
                  <Text style={{ fontFamily: 'CeraPro-Light', fontWeight: 'bold'}}>$99.00</Text>
                </View>
              </View>
              <View style={styles.middleSlideCard}>
                <View style={styles.middleSlideCardImage} >
                  <Image source={{ uri: 'https://lh3.googleusercontent.com/proxy/mBgh2-bf5UoJ9iflSju6ipi8jOYcM65-diRedKw1DL-yH2z5s9H12U6GiE6USzHMddw72UXFklHkuND-h4J1jV56jmDRBwtfqIk4fxIfIosjbfHFJj_8sbkBgmNyEMyNQdnxqOp_zskmLqxLB-KNBzbfwn_BKZdsh9Y'}} style={{ width: '100%', height: null, flex: 1}} />
                </View>
                <View style={styles.middleSlideCardContent} >
                  <Text style={{ fontFamily: 'CeraPro-Light'}} >Grilled Salmon</Text>
                  <Text style={{ fontFamily: 'CeraPro-Light', fontWeight: 'bold'}}>$99.00</Text>
                </View>
              </View>
              <View style={styles.middleSlideCard}>
                <View style={styles.middleSlideCardImage} >
                  <Image source={{ uri: 'https://media.gettyimages.com/photos/closeup-of-noodles-served-in-plate-over-white-background-picture-id758535667'}} style={{ width: '100%', height: null, flex: 1}} />
                </View>
                <View style={styles.middleSlideCardContent} >
                  <Text style={{ fontFamily: 'CeraPro-Light'}} >Grilled Salmon</Text>
                  <Text style={{ fontFamily: 'CeraPro-Light', fontWeight: 'bold'}}>$99.00</Text>
                </View>
              </View>
              <View style={styles.middleSlideCard}>
                <View style={styles.middleSlideCardImage} >
                  <Image source={{ uri: 'https://image.shutterstock.com/image-photo/isolated-delicious-spicy-chicken-biryani-600w-1402490126.jpg'}} style={{ width: '100%', height: null, flex: 1}} />
                </View>
                <View style={styles.middleSlideCardContent} >
                  <Text style={{ fontFamily: 'CeraPro-Light'}} >Grilled Salmon</Text>
                  <Text style={{ fontFamily: 'CeraPro-Light', fontWeight: 'bold'}}>$99.00</Text>
                </View>
              </View>
              <View style={styles.middleSlideCard}>
                <View style={styles.middleSlideCardImage} >
                  <Image source={{ uri: 'https://image.shutterstock.com/image-photo/isolated-delicious-spicy-chicken-biryani-600w-1402490126.jpg'}} style={{ width: '100%', height: null, flex: 1}} />
                </View>
                <View style={styles.middleSlideCardContent} >
                  <Text style={{ fontFamily: 'CeraPro-Light'}} >Grilled Salmon</Text>
                  <Text style={{ fontFamily: 'CeraPro-Light', fontWeight: 'bold'}}>$99.00</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  middleSlideCardImage: {
    height: '80%',
    backgroundColor: '#f2f2f2'
  },
  middleSlideCardContent: {
    backgroundColor: '#fff',
    height: '20%',
    justifyContent: 'space-around',
    paddingLeft: 10
  },
  middleSlideCard: {
    height: 250,
    width: 180,
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 5,
    overflow: 'hidden'
  },
  section: {
    marginTop: 20,
    marginLeft: 20,
  },
  headline: {
    fontFamily: 'CeraPro-Light',
    fontSize: 16,
  },
  middleSlide: {
    flexDirection: 'row',
    marginTop: 10,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#faf7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontFamily: 'CeraPro-Light',
    color: '#000',
    fontSize: 16,
  },
  headerIcon: {
    fontSize: 28,
  },
  searchBox: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 0,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  searchInput: {
    fontFamily: 'CeraPro-Light',
    flex: 1,
    marginLeft: 15,
  },
  searchIcon: {
    fontSize: 22,
    color: '#fc4041',
  },
  headerSlide: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
    width: '100%',
  },
  headerSlideItem: {
    width: 50,
    marginRight: 30,
  },
  headerSlideCard: {
    width: 55,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#fae9e9',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSlideText: {
    fontFamily: 'CeraPro-Light',
    fontSize: 10,
  },
});

export default HomeScreen;
