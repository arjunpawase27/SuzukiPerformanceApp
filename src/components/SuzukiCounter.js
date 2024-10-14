import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const SuzukiCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.counterContainer}>
      <Button title="-" onPress={() => setCounter(counter - 1)} />
      <Text style={styles.counter}>{counter}</Text>
      <Button title="+" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0033A0',
    padding: 10,
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginHorizontal: 10,
    color: '#FFFFFF',
  },
});

export default SuzukiCounter;
