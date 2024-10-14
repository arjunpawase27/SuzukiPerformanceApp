import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
      });

    
      const responseData = await fetchPosts(page);
      setData(prevData => [...prevData, ...responseData]);

     
      Toast.hide();

      Toast.show({
        type: 'success',
        text1: 'FETCHING DATA COMPLETE',
        visibilityTime: 2000, 
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
    navigation.navigate('SuzukiPostDetails', { postId: id }); 
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <SuzukiCounter />
      {loading && page === 1 ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <SuzukiPostItem item={item} onPress={() => onItemPress(item.id)} />
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isFetchingMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;