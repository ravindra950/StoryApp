// Once user  click on watch later, get video url
// var url=watchlateevideo url
// Var existingwatchlaterarr=localstorage.getItem('watchlater') 
// existingwatchlaterarr=JSON.parse(existingwatchlaterarr) 
// existingwatchlaterarr. Push(url) 
// Localstorage. SetItem(existingwatchlaterarr) above code reference for watch later and watched features

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Image, Button, ActivityIndicator } from 'react-native';
import YouTubeIframe from 'react-native-youtube-iframe'; 
import { getAnimal } from '../api/animal.js';
import { getKids } from '../api/kids.js';
import { getStories } from '../api/allapi.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const extractVideoId = (url) => {
  if (!url) return null;
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const getYoutubeThumbnailUrl = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; 
};

const Dash = ({ navigation = {} }) => {
  const [stories, setStories] = useState([]);
  const [kidsstories, setKidsstories] = useState([]);
  const [animalstories, setAnimalstories] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [newVideos, setNewVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');
  const flatListRef = useRef(null);
  const [watchLater, setWatchLater] = useState([]);
  const [watched, setWatched] = useState([]);
  const [favorites, setFavorites] = useState([]);  // New state for favorites

  useEffect(() => {
    const loadLists = async () => {
      try {
        const watchedList = await AsyncStorage.getItem('watchedList');
        setWatched(watchedList ? JSON.parse(watchedList) : []);
        
        const watchLaterList = await AsyncStorage.getItem('watchLaterList');
        setWatchLater(watchLaterList ? JSON.parse(watchLaterList) : []);

        const savedVideos = await AsyncStorage.getItem('savedVideos');
        const previousVideos = savedVideos ? JSON.parse(savedVideos) : [];
        setNewVideos(previousVideos);

        const favoriteList = await AsyncStorage.getItem('favoritesList');  // Load favorites
        setFavorites(favoriteList ? JSON.parse(favoriteList) : []);

      } catch (error) {
        console.error('Failed to load lists:', error);
      }
    };

    loadLists();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const storiesData = await getStories();
        const kidsData = await getKids();
        const animalData = await getAnimal();

        setStories(storiesData);
        setKidsstories(kidsData);
        setAnimalstories(animalData);
        const allFetchedVideos = [...storiesData, ...kidsData, ...animalData];
        setAllVideos(allFetchedVideos);

        const previousVideos = await AsyncStorage.getItem('savedVideos');
        const previousVideosArray = previousVideos ? JSON.parse(previousVideos) : [];
        const newAddedVideos = allFetchedVideos.filter(video => !previousVideosArray.some(prevVideo => prevVideo.link === video.link));
        setNewVideos(newAddedVideos);

        await AsyncStorage.setItem('savedVideos', JSON.stringify(allFetchedVideos));

        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const addToList = async (listName, videoUrl) => {
    try {
      let list = await AsyncStorage.getItem(listName);
      list = list ? JSON.parse(list) : [];
      if (!list.includes(videoUrl)) {
        list.push(videoUrl);
        await AsyncStorage.setItem(listName, JSON.stringify(list));
        if (listName === 'watchedList') {
          setWatched(list);
        } else if (listName === 'watchLaterList') {
          setWatchLater(list);
        }
        else if (listName === 'favoritesList') {  // Handle favorites
          setFavorites(list);
        }
      }
    } catch (error) {
      console.error(`Error adding to ${listName}`, error);
    }
  };

  const toggleFavorite = async (videoUrl) => {
    try {
      let list = await AsyncStorage.getItem('favoritesList');
      let updatedFavorites = list ? JSON.parse(list) : [];
      if (updatedFavorites.includes(videoUrl)) {
        updatedFavorites = updatedFavorites.filter(url => url !== videoUrl);
      } else {
        updatedFavorites.push(videoUrl);
      }
      await AsyncStorage.setItem('favoritesList', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };
  

  const onVideoPlay = (videoUrl) => {
    if (!watched.includes(videoUrl)) {
      addToList('watchedList', videoUrl);
    }
  };

  const onSaveForLater = (videoUrl) => {
    addToList('watchLaterList', videoUrl);
  };

  const getDataForSection = () => {
    let filteredVideos = [];
    switch (selectedSection) {
      case 'kids':
        filteredVideos = kidsstories;
        break;
      case 'animal':
        filteredVideos = animalstories;
        break;
      case 'all':
        filteredVideos = stories;
        break;
      case 'watched':
        filteredVideos = allVideos.filter(video => watched.includes(video.link));
        break;
      case 'watchLater':
        filteredVideos = allVideos.filter(video => !watched.includes(video.link));
        break;
      case 'newlyAdded':
        filteredVideos = newVideos;
        break;
      case 'favorite':
        filteredVideos = allVideos.filter(video => favorites.includes(video.link));  // Show favorites
        break;
      default:
        filteredVideos = allVideos;
    }
    return filteredVideos;
  };

  const handleImagePress = (item) => {
    const videoId = extractVideoId(item.link);
    if (videoId) {
      setSelectedVideoId(videoId);
      setSelectedVideoTitle(item.title);
      setModalVisible(true);
      onVideoPlay(item.link); // Mark as watched when video is played
    } else {
      console.error('Invalid video URL:', item.link);
    }
  };

  const handleSharePress = () => {
    setShareModalVisible(true);
  };

  const handleSectionPress = (section) => {
    setSelectedSection(section);
    setTimeout(() => {
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, 0);
  };

  const closeModal = () => {
    setSelectedVideoId(null);
    setSelectedVideoTitle('');
    setModalVisible(false);
  };

  const closeShareModal = () => {
    setShareModalVisible(false);
  };

  const renderStoryItem = ({ item }) => {
    const isFavorite = favorites.includes(item.link); // Determine if the video is a favorite
  
    return (
      <TouchableOpacity style={styles.storyItemContainer} onPress={() => handleImagePress(item)}>
        <View style={styles.storyItem}>
          <Image 
            source={{ uri: item.link ? getYoutubeThumbnailUrl(extractVideoId(item.link)) : null }} 
            style={styles.image} 
          />
          <View style={styles.titleContainer}>
            {Array(4).fill().map((_, i) => (
              <Icon key={i} name="star" size={14} color="orange" style={styles.starIcon} />
            ))}
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item.link)}>
              <Icon 
                name="heart" 
                size={14} 
                color={isFavorite ? 'red' : 'black'} 
                style={styles.favoriteIcon} 
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={styles.screenContainer}>
      {/* Button Containers */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.sectionButton,
            selectedSection === 'all' && { backgroundColor: 'black' },
          ]}
          onPress={() => handleSectionPress('all')}
        >
          <Icon name="globe" size={14} color="white" />
          <Text style={styles.sectionButtonText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sectionButtono,
            selectedSection === 'kids' && { backgroundColor: 'black' },
          ]}
          onPress={() => handleSectionPress('kids')}
        >
          <Icon name="child" size={14} color="white" />
          <Text style={styles.sectionButtonText}>Kids</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sectionButtont,
            selectedSection === 'animal' && { backgroundColor: 'black' },
          ]}
          onPress={() => handleSectionPress('animal')}
        >
          <Icon name="paw" size={14} color="white" />
          <Text style={styles.sectionButtonText}>Animal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionButtontt}
        >
          <Text style={styles.sectionButtonText}>Hindi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionButtontt}
        >
          <Text style={styles.sectionButtonText}>English</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={[styles.button, selectedSection === 'favorite' && styles.selectedButton]}
          onPress={() => handleSectionPress('favorite')}
        >
          <Text style={styles.buttonText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sectionButtono,
            selectedSection === 'watched' && { backgroundColor: 'black' },
          ]}
          onPress={() => handleSectionPress('watched')}
        >
          <Text style={styles.sectionButtonText}>Watched</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sectionButton,
            selectedSection === 'watchLater' && { backgroundColor: 'black' },
          ]}
          onPress={() => handleSectionPress('watchLater')}
        >
          <Text style={styles.sectionButtonText}>Watch Later</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sectionButton,
            selectedSection === 'newlyAdded' && { backgroundColor: 'black' },
          ]}
          onPress={() => handleSectionPress('newlyAdded')}
        >
          <Text style={styles.sectionButtonText}>Newly Added</Text>
        </TouchableOpacity>
      </View>

      {/* Content Display */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
          <Text style={styles.loadingText}>Loading Please Wait...</Text>
        </View>
      ) : (
        getDataForSection().length === 0 ? (
          <View style={styles.noVideosContainer}>
            <Text style={styles.noVideosText}>No New Videos Added</Text>
          </View>
        ) : (
          <FlatList
            ref={flatListRef}
            data={getDataForSection()}
            renderItem={renderStoryItem}
            keyExtractor={(item, index) => item?.id ? item.id.toString() : index.toString()}
            contentContainerStyle={styles.section}
          />
        )
      )}

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Icon name="close" size={30} color="black" style={styles.closeButtonText} />
          </TouchableOpacity>
          <View style={styles.videoContainer}>
            {selectedVideoId && (
              <YouTubeIframe
                videoId={selectedVideoId}
                height={300}
                play={true}
              />
            )}
          </View>
        </View>
      </Modal>

      {/* Share Modal */}
      <Modal
        visible={shareModalVisible}
        animationType="slide"
        onRequestClose={closeShareModal}
      >
        <View style={styles.shareModalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeShareModal}>
            <Icon name="close" size={30} color="white" style={styles.closeButtonText} />
          </TouchableOpacity>
          <View style={styles.shareOptionsContainer}>
            <Image
              source={require('../images/main.png')} 
              style={styles.modalImage1}
            />
            <Text style={styles.modalTitle1}>Unlock the Power of Sharing</Text>
            <View style={styles.row1}>
              <Image source={require('../images/whicon.png')} style={styles.image1} />
              <Image source={require('../images/inicon.png')} style={styles.image1} />
            </View>
            <Text style={styles.modalSubtitle1}>Fresh Features Launching Soon..</Text>
            <TouchableOpacity>
              <Text 
                style={styles.link}                   
                onPress={() => {
                  closeShareModal();
                  // navigation.navigate('Dashboard'); 
                }}
              >
                Click Here To Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: '#F8F8FF',
      alignItems: 'center',
      fontFamily: 'Cochin',
      fontWeight: 'bold',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 8,
      width: '90%',
      fontFamily: 'Cochin',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#BF0D04',
      textAlign: 'left',
      lineHeight: 24,
      fontFamily: 'Cochin',
      fontWeight: 'bold',
    },
    subtitleo: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#2E55C2',
      textAlign: 'left',
      lineHeight: 24,
      fontFamily: 'Cochin',
      fontWeight: 'bold',
    },
    subtitlet: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#377E47',
      textAlign: 'left',
      lineHeight: 24,
      fontFamily: 'Cochin',
      fontWeight: 'bold',
    },
    subtitleh: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#ff6600',
      textAlign: 'left',
      lineHeight: 24,
      fontFamily: 'Cochin',
      fontWeight: 'bold',
    },
    logo: {
      marginTop:8,
      width: 30,
      height: 30,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // width: '80%',
      width: '80%',
  
      marginTop: 10,
      alignContent:'space-around'
    },
    sectionButton: {
      padding: 6,
      // backgroundColor: '#BF0D04',
      backgroundColor: '#400080',
  
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    sectionButtono: {
      padding: 6,
      // backgroundColor: '#2E55C2',
      // backgroundColor: '#BF0D04',
      backgroundColor: '#400080',
  
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    sectionButtont: {
      padding: 6,
      // backgroundColor: '#377E47',
      // backgroundColor: '#BF0D04',
      backgroundColor: '#400080',
  
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    sectionButtontt: {
      padding: 6,
      // backgroundColor: '#ff6600',
      // backgroundColor: '#BF0D04',
      backgroundColor: '#400080',
  
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    sectionButtonText: {
      color: 'white',
      marginLeft: 4,
      fontSize: 10,
    },
    section: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    storyItemContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginTop: 8,
      marginBottom: 8,
    },
    storyItem: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      width: '95%',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingBottom: 8,
    },
    starIcon: {
      marginHorizontal: 2,
    },
    title: {
      fontSize: 14,
      textAlign: 'center',
      flex: 1,
      color: '#000000',
      fontWeight: 'bold',
    },
    shareIcon: {
      marginRight: 15,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginBottom: 8,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      // position: 'absolute',
      // top: 20,
      // right: 20,
      position: 'absolute',
      top: 10,
      right: 10,
      // color:'white'
    },
    closeButtonText: {
      fontSize: 30,
      color:'white',
      backgroundColor:'black'
    },
    videoContainer: {
      width: '100%',
      height: 300,
    },
    shareModalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#d4e10e'
    },
    shareOptionsContainer: {
      width: '80%',
      alignItems: 'center',
    },
    shareOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    shareOptionText: {
      marginLeft: 10,
      fontSize: 18,
    },
  
    modalContent: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
    },
    modalImage1: {
      width: '100%',
      height: 300,
      // width: 200,
      // height: 200,
      // marginBottom: 20,
      marginTop:-100,
    },
    modalTitle1: {
      fontSize: 18,
      fontWeight: 'bold',
      // marginBottom: 10,
      color: '#880015',
    },
    modalSubtitle1: {
      fontSize: 18,
      textAlign: 'center',
      color: '#880015',
      fontWeight: 'bold',
  
    },
    row1: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:20,
      marginBottom:20,
    },
    image1: {
      width: 50,
      height: 50,
      marginHorizontal: 10,
    },
  
    link: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      position: 'center',
  
      textDecorationLine: 'underline',
      marginTop:40,
      marginBottom:15,
      
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingIndicator: {
      marginBottom: 10,
    },
    loadingText: {
      fontSize: 16,
      color: '#0000ff',
    },
     image: {
      width: '100%',
      height: 180,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    placeholderImage: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ccc',
    },
    placeholderText: {
      color: '#666',
      fontSize: 16,
    },
    noVideosContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noVideosText: {
      fontSize: 18,
      color: 'gray',
      textAlign: 'center',
    },
    
  });
  
  export default Dash;
  
  
  
  
  
  
  
  


  const renderStoryItem = ({ item }) => {
    const isFavorite = favorites.includes(item.link); 
    const isWatchLater = watchLater.includes(item.link);  
  
    return (
      <TouchableOpacity style={styles.storyItemContainer} onPress={() => handleImagePress(item)}>
        <View style={styles.storyItem}>
          <Image 
            source={{ uri: item.link ? getYoutubeThumbnailUrl(extractVideoId(item.link)) : null }} 
            style={styles.image} 
          />
          <View style={styles.titleContainer}>
            {Array(4).fill().map((_, i) => (
              <Icon key={i} name="star" size={14} color="orange" style={styles.starIcon} />
            ))}
            <TouchableOpacity onPress={() => handleSaveForLater(item)}>
              <Image source={require('../images/watchone.png')} style={styles.watchImage}/>
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item.link)}>
              <Icon
                name={isFavorite ? 'heart' : 'heart-o'} 
                size={16}
                color={isFavorite ? 'red' : 'black'} 
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };