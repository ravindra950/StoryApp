// import React from 'react';
// import { View, Text } from 'react-native';

// const DrawerFile = () => {
//   return (
//     <View>
//       <Text>hellow</Text>
//     </View>
//   );
// }

// export default DrawerFile;
// return (
//     <View style={styles.screenContainer}>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
//           <Text style={styles.loadingText}>Loading Please Wait...</Text>
//         </View>
//       ) : (
//         <>
//           {/* Render filter buttons only after loading is complete */}
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={[
//                 styles.sectionButton,
//                 selectedSection === 'all' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('all')}
//             >
//               <Icon name="globe" size={14} color="white" />
//               <Text style={styles.sectionButtonText}>All</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity
//               style={[
//                 styles.sectionButton,
//                 selectedSection === 'kids' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('kids')}
//             >
//               <Icon name="child" size={14} color="white" />
//               <Text style={styles.sectionButtonText}>Kids</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity
//               style={[
//                 styles.sectionButtont,
//                 selectedSection === 'animal' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('animal')}
//             >
//               <Icon name="paw" size={14} color="white" />
//               <Text style={styles.sectionButtonText}>Animal</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity
//               style={[
//                 styles.sectionButtont,
//                 selectedSection === 'hindi' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('hindi')}
//             >
//               <Text style={styles.sectionButtonText}>Hindi</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[
//                 styles.sectionButtont,
//                 selectedSection === 'english' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('english')}
//             >
//               <Text style={styles.sectionButtonText}>English</Text>
//             </TouchableOpacity>
//           </View>
  
//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={[styles.sectionButton, selectedSection === 'favorite' && { backgroundColor: 'black' }]}
//               onPress={() => handleSectionPress('favorite')}
//             >
//               <Text style={styles.sectionButtonText}>My Favorite</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity
//               style={[
//                 styles.sectionButtono,
//                 selectedSection === 'watched' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('watched')}
//             >
//               <Text style={styles.sectionButtonText}>Watched</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity
//               style={[
//                 styles.sectionButton,
//                 selectedSection === 'watchLater' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('watchLater')}
//             >
//               <Text style={styles.sectionButtonText}>Watch Later</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity
//               style={[
//                 styles.sectionButton,
//                 selectedSection === 'newlyAdded' && { backgroundColor: 'black' },
//               ]}
//               onPress={() => handleSectionPress('newlyAdded')}
//             >
//               <Text style={styles.sectionButtonText}>Newly Added</Text>
//             </TouchableOpacity>
//           </View>
  
//           {/* Content Display */}
//           {getDataForSection().length === 0 ? (
//             <View style={styles.noVideosContainer}>
//               <Text style={styles.noVideosText}>No Video</Text>
//             </View>
//           ) : (
//             <FlatList
//               ref={flatListRef}
//               data={getDataForSection()}
//               renderItem={renderStoryItem}
//               keyExtractor={(item, index) => item?.id ? item.id.toString() : index.toString()}
//               contentContainerStyle={styles.section}
//             />
//           )}
//         </>
//       )}
//    {/* <Image
//       source={require('../images/logom.png')} 
//       style={styles.logoImage}
//     /> */}