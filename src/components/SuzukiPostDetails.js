import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { fetchPostDetails } from '../utils/api';

const SuzukiPostDetails = ({ route }) => {
  const { postId } = route.params;
  const [postDetails, setPostDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPostDetails = async () => {
      try {
        const details = await fetchPostDetails(postId);
        if (details) {
          setPostDetails(details);
        } else {
          setError('Failed to load post details');
        }
      } catch (err) {
        setError('Failed to load post details');
      } finally {
        setLoading(false);
      }
    };

    loadPostDetails();
  }, [postId]);

  useEffect(() => {
    console.log('SuzukiPostDetails component re-rendered due to prop change (postId)', postId);
  }, [postId]);

  return (
    <View style={styles.detailsContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.postContainer}>
          <Text style={styles.id}>ID: {postDetails.id}</Text>
          <Text style={styles.title}>{postDetails.title}</Text>
          <Text style={styles.body}>{postDetails.body}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 20,
        backgroundColor: '#3498db',
        borderTopLeftRadius: 400,
    borderBottomRightRadius:400,
  },
  postContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 20,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexGrow: 1, 
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: '#34495e',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});

export default SuzukiPostDetails;
