

const [allVideos, setAllVideos] = useState([]);

useEffect(() => {
  const loadLists = async () => {
    try {
      const watchedList = await AsyncStorage.getItem('watchedList');
      setWatched(watchedList ? JSON.parse(watchedList) : []);
      
      const watchLaterList = await AsyncStorage.getItem('watchLaterList');
      setWatchLater(watchLaterList ? JSON.parse(watchLaterList) : []);
    } catch (error) {
      console.error('Failed to load lists:', error);
    }
  };

  loadLists();
}, []);

useEffect(() => {
  getStories()
    .then(data => {
      setStories(data);
      setAllVideos(data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
}, []);

useEffect(() => {
  if (selectedSection === 'kids') {
    getKids()
      .then(data => {
        setKidsstories(data);
        setAllVideos(data);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }
}, [selectedSection]);

useEffect(() => {
  getAnimal()
    .then(data => {
      setAnimalstories(data);
      setAllVideos(data);
    })
    .catch(error => {
      console.error(error);
      setLoading(false);
    });
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
    }
  } catch (error) {
    console.error(`Error adding to ${listName}`, error);
  }
};

const onVideoPlay = (videoUrl) => {
  addToList('watchedList', videoUrl);
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
        filteredVideos = allVideos.filter(video => !watched.includes(video.link) && !watchLater.includes(video.link));
        break;
      default:
        filteredVideos = allVideos;
    }
    return filteredVideos;
  };
