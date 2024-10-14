import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchPostDetails } from '../utils/api';

const SuzukiPostDetails = ({ route }) => {
  const { postId } = route.params;
  const [postDetails, setPostDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPostDetails = async () => {
      const details = await fetchPostDetails(postId);
      if (details) {
        setPostDetails(details);
      } else {
        setError('Failed to load post details');
      }
    };

    loadPostDetails();
  }, [postId]);

  
  useEffect(() => {
    console.log('SuzukiPostDetails component re-rendered due to prop change (postId)', postId);
  }, [postId]);

  return (
    <View style={styles.detailsContainer}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : postDetails ? (
                  <>
                   <Text style={styles.id}>ID: {postDetails.id}</Text>
        <Text style={styles.title}>Title: {postDetails.title}</Text>
        <Text style={styles.body}>Body: {postDetails.body}</Text>
       </>
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

export default SuzukiPostDetails;
