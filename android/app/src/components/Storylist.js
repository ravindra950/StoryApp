import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const stories = [
    { id: 1, title: 'The Brave Tiger', link: 'https://youtu.be/z2YCTUwWLcc?si=eD1-azqonE_TqWaV' },
    { id: 2, title: 'Radha and Magical Book', link: 'https://youtu.be/OqmBDdtbYQE?si=BFyzrK0MsWXzSwq3' },
    { id: 3, title: 'Five Monkeys', link: 'https://youtu.be/hmvYCp1wh74?si=-4ifpfUfmvWwSOyM' },
    // Add the rest of your stories here
];

const StoryList = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => Linking.openURL(item.link)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
  },
});

export default StoryList;
