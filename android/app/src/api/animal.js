// const animalstories = [
//     {
//         id:31,title:'Chandni and the Magical Pond',link:'https://youtu.be/LvxVVkJAXMI?si=6Bk__2i5ZNoJ5AkN',image: require('../images/one.png')
//     },
//     {
//         id:32,title:'The Starry Night ',link:'https://youtu.be/KVRMothSHyI?si=PcleErDp0UaN69Ef',image: require('../images/two.png')
//     },
//     {
//         id:33,title:'The Song of Birds',link:'https://youtu.be/qlBUpyynpFU?si=X0wdHWg2xgTmyugw',image: require('../images/one.png')
//     },
//     {
//         id:34,title:'The Curious Adventure of Timmy and Tessa',link:'https://youtu.be/fnW6mlb6Rq4?si=Kw_r-NpyXEBjbeeI',image: require('../images/two.png')
//     },
//     {
//         id:35,title:'The Quest for the Magical Carrot ',link:'https://youtu.be/wdygEJnhBLo?si=Pke0FwVxe99A4pwa',image: require('../images/one.png')
//     },
//     {
//         id:36,title:'Dheeru the Clever Deer',link:'https://youtu.be/kj4WRX3nSEk?si=BscHWNxT8UFOmO2W',image: require('../images/two.png')
//     },
//     {
//         id:37,title:'Sunrise Symphony',link:'https://youtu.be/ZgfQB4naG-g?si=PC-atxtMThe4wiPK',image: require('../images/one.png')
//     },
//     {
//         id:38,title:'Chunnu the Brave Squirre',link:'https://youtu.be/qxUWG34stlY?si=7Q4goTntrSVf2NqJ',image: require('../images/two.png')
//     },
//     {
//         id:39,title:'Melodies of Petals',link:'https://youtu.be/RRZ36eCV1fg?si=lFGF049p6M6-pMER',image: require('../images/one.png')
//     },
//     {
//         id:40,title:'Chikus Cleverness',link:'https://youtu.be/mBOw5BDSl2M?si=_yJUbB6KfkV2s4Yh',image: require('../images/two.png')
//     },
//     {
//         id:41,title:'The Kind Deer and the Injured Bird ',link:'https://youtu.be/FR9qaZ8gr0c?si=LH-RZioI8N9Ywb-V',image: require('../images/one.png')
//     },
//     {
//         id:42,title:'The Brave Tiger and the Value of Friendship',link:'https://youtu.be/z2YCTUwWLcc?si=ky75tr8iOTVy0Rr9',image: require('../images/two.png')
//     },
//     {
//         id:43,title:'The A to Z Animal Serenade',link:'https://youtu.be/IiHCRL7XyHI?si=kL66mtZb5kcH9gOI',image: require('../images/one.png')
//     },
//     {
//         id:44,title:'Gajraj and the Magical River ',link:'https://youtu.be/_Fe7aNyDM7Y?si=CG3EL78YIequiIyC',image: require('../images/two.png')
//     },
//     {
//         id:45,title:'The Journey to the Great Mountain Brambles Adventure',link:'https://youtu.be/_IGoBeD41Bo?si=uilzr20o7_RZMo2m',image: require('../images/one.png')
//     },
//     {id:46,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=wQYolD98JkPluvTJ',image: require('../images/two.png')
//     }
// ];

// export const getAnimal = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(animalstories);
//       }, 1000); 
//     });
//   };



// import database from '../config/firebaseConfig'; 
// export const getAnimal = async () => {
//   try {
//     const reference = database.ref('/animalstories/animalstories'); 
//     const snapshot = await reference.once('value');
//     const data = snapshot.val();
    
//     if (data) {
//       return Object.keys(data).map(key => ({
//         id: key,
//         ...data[key],
//       }));
//     }
//     return [];
//   } catch (error) {
//     console.error('Error fetching animal stories:', error);
//     throw error;
//   }
// };



import database from '../config/firebaseConfig'; 
export const getAnimal = async () => {
  try {
    const reference = database.ref('/stories/animalstories'); 
    const snapshot = await reference.once('value');
    const data = snapshot.val();
    
    if (data) {
      return Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching animal stories:', error);
    throw error;
  }
};

export const getHindi = async () => {
  try {
    const reference = database.ref('/stories/hindistories'); 
    const snapshot = await reference.once('value');
    const data = snapshot.val();
    
    if (data) {
      return Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching hindi stories:', error);
    throw error;
  }
};

export const getEnglish = async () => {
  try {
    const reference = database.ref('/stories/englishstories'); 
    const snapshot = await reference.once('value');
    const data = snapshot.val();
    
    if (data) {
      return Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching english stories:', error);
    throw error;
  }
};

