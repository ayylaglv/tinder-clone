import React from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';

const Card = props => {
  const {name, image, bio} = props.user;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '75%',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 7.68,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'green',
    lineHeight: 25,
  },
});

export default Card;
