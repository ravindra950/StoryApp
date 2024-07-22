const animalstories = [
    {
        id:31,title:'Chandni and the Magical Pond',link: require('../../images/three.mp4'),image: require('../../images/one.png')
    },
    {
        id:32,title:'The Starry Night ',link: require('../../images/four.mp4'),image: require('../../images/two.png')
    },
    {
        id:33,title:'The Song of Birds',link: require('../../images/five.mp4'),image: require('../../images/one.png')
    },
    {
        id:34,title:'The Curious Adventure of Timmy and Tessa',link: require('../../images/three.mp4'),image: require('../../images/two.png')
    },
    {
        id:35,title:'The Quest for the Magical Carrot ',link: require('../../images/four.mp4'),image: require('../../images/one.png')
    },
    {
        id:36,title:'Dheeru the Clever Deer',link: require('../../images/five.mp4'),image: require('../../images/two.png')
    },
    {
        id:37,title:'Sunrise Symphony',link: require('../../images/three.mp4'),image: require('../../images/one.png')
    },
    {
        id:38,title:'Chunnu the Brave Squirre',link: require('../../images/four.mp4'),image: require('../../images/two.png')
    },
    {
        id:39,title:'Melodies of Petals',link: require('../../images/five.mp4'),image: require('../../images/one.png')
    },
    {
        id:40,title:'Chikus Cleverness',link: require('../../images/three.mp4'),image: require('../../images/two.png')
    },
    {
        id:41,title:'The Kind Deer and the Injured Bird ',link: require('../../images/four.mp4'),image: require('../../images/one.png')
    },
    {
        id:42,title:'The Brave Tiger and the Value of Friendship',link: require('../../images/five.mp4'),image: require('../../images/two.png')
    },
    {
        id:43,title:'The A to Z Animal Serenade',link: require('../../images/three.mp4'),image: require('../../images/one.png')
    },
    {
        id:44,title:'Gajraj and the Magical River ',link: require('../../images/four.mp4'),image: require('../../images/two.png')
    },
    {
        id:45,title:'The Journey to the Great Mountain Brambles Adventure',link: require('../../images/five.mp4'),image: require('../../images/one.png')
    },
    {id:46,title:'The Power of Unity The Tale of the Forester Ants ',link: require('../../images/three.mp4'),image: require('../../images/two.png')
    }
];

export const getAnimal = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(animalstories);
      }, 1000); 
    });
  };