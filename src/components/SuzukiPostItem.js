import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heavyComputation } from '../utils/heavyComputation';

const SuzukiPostItem = ({ item, onPress }) => {
  const computedDetails = useMemo(() => {
    const result = heavyComputation(item);
    return result;
  }, [item]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.itemContainer}>
        <Text style={styles.id}>ID: {item.id}</Text>
        <Text style={styles.title}>Title: {item.title}</Text>
        <Text style={styles.body}>Body: {item.body}</Text>
        <Text style={styles.computedDetails}>Computed: {computedDetails}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  id: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2c3e50',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 4,
    color: '#2980b9',
  },
  body: {
    fontSize: 12,
    color: '#555',
    marginVertical: 2,
  },
  computedDetails: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#888',
    marginTop: 4,
  },
});

export default SuzukiPostItem;
