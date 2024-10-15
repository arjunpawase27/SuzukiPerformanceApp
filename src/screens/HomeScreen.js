import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import SuzukiCounter from '../components/SuzukiCounter';
import SuzukiPostItem from '../components/SuzukiPostItem';
import { fetchPosts } from '../utils/api';
import { useNavigation } from '@react-navigation/native'; 

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const navigation = useNavigation(); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      Toast.show({
        type: 'info',
        text1: 'FETCHING DATA',
        visibilityTime: 0,
        autoHide: false, 
        topOffset: 80,
      });

      const responseData = await fetchPosts(page);
      setData(prevData => [...prevData, ...responseData]);

      Toast.hide();
      Toast.show({
        type: 'success',
        text1: 'FETCHING DATA COMPLETE',
        visibilityTime: 2000, 
        topOffset: 80,
      });

      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handleLoadMore = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      setPage(prevPage => prevPage + 1);
      setIsFetchingMore(false);
    }
  };

  const onItemPress = useCallback((id) => {
    navigation.navigate('PostDetails', { postId: id }); 
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Image source={require('..//assets/images/suzuki.png')} style={styles.logo} />

      <SuzukiCounter />

      {loading && page === 1 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>Loading posts...</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <SuzukiPostItem item={item} onPress={() => onItemPress(item.id)} />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isFetchingMore ? <ActivityIndicator size="small" color="white" /> : null}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f2f4f8',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#3498db',
    borderTopLeftRadius: 400,
    borderBottomRightRadius: 400,
  },
  logo: {
    width: 64, 
    height: 64, 
    alignSelf: "flex-start",
    marginBottom: 20,
    marginLeft:20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
