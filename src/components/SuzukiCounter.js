import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SuzukiCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setCounter(counter - 1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>{counter}</Text>

        <TouchableOpacity style={styles.button} onPress={() => setCounter(counter + 1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',   
    marginBottom:20
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3498db',
      padding: 10,
    borderRadius: 35,
    elevation: 8, 
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  counter: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFFFFF',
      padding: 15,
    borderRadius: 50,
    elevation: 5, 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
});

export default SuzukiCounter;
