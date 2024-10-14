import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const SuzukiPostDetails = ({ postId }) => {
  const [postDetails, setPostDetails] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPostDetails(response.data);
      } catch (err) {
        setError('Failed to load post details');
      }
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <View style={styles.detailsContainer}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : postDetails ? (
        <Text>{postDetails.title}</Text>
      ) : (
        <Text>Loading details...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  error: {
    color: 'red',
  },
});
