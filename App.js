import react from 'react';
import {View, Text, Image, FlatList, StyleSheet, TouchableOpacity, StatusBar, SectionList, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const datasource = [
  {data: [
      {name: 'The Land Of Stories',
        image: 'https://m.media-amazon.com/images/I/81HM1VDm8JL._AC_UF1000,1000_QL80_.jpg'},
      {name: 'Finding Serendipity',
        image: 'https://www.booksfortopics.com/wp-content/uploads/finding-serendipity.jpeg',
      },
    ],
    icon:'wand-sparkles', title: 'Fantasy', bgColor: 'purple',
  },
  {data: [
      {name: 'Black Forest',
        image: 'https://m.media-amazon.com/images/I/715jjfXVBlL._AC_UF894,1000_QL80_.jpg',
      },
      {name: 'The Graveyard Apartment',
        image: 'https://static01.nyt.com/images/2016/10/30/books/30Horror-RAFFERTY-1/30Horror-RAFFERTY-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
      },
    ],
    icon:'ghost', title: 'Horror', bgColor: 'darkblue',
  },
];

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 5,
    backgroundColor: 'rgba(212,210,243,0.65)',
  },
  textStyle: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white',
    borderRadius: 10,
  },
  cardImage: {
    width: '200',
    height: '300',
    margin: 15,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    elevation: 10,
    alignSelf: 'center',
    borderColor:'goldenrod',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin:10,
  },
});

const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Image source={{uri: item.image}} style={styles.cardImage}/>
        <Text style={styles.textStyle}>{item.name}</Text>
      </TouchableOpacity>
  );
};
const App = () => {
  return (
      <View style={{marginBottom: 70, marginTop:50, margin: 10}}>
        <Button title="Add Books" />
        <StatusBar hidden={true}/>
        <SectionList sections={datasource} keyExtractor={(item, index) => item.name + index}
                     renderItem={renderItem}
                     renderSectionHeader={({section: {title, bgColor, icon}}) => (
                         <View style={[styles.headerContainer, {backgroundColor: bgColor}]}>
                           <Icon name={icon} size={20} color="white"/>
                           <Text style={styles.headerText}>{title}</Text>
                         </View>
                     )}/>
      </View>
  );
};

export default App;

