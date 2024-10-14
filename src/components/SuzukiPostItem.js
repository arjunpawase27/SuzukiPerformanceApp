// src/components/SuzukiPostItem.js
import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heavyComputation } from '../utils/heavyComputation';

const SuzukiPostItem = ({ item, onPress }) => {
  const computedDetails = useMemo(() => {
  
    const result = heavyComputation(item);
   
    return result;
  }, [item]);

  return (
    <TouchableOpacity onPress={onPress}>
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
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  id: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 4,
  },
  body: {
    fontSize: 12,
    color: '#555',
  },
  computedDetails: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#888',
  },
});

export default SuzukiPostItem;
