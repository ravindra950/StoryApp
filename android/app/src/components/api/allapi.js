
const stories = [
    { 
        // id: 1, title: 'The Brave Tiger ', link: require('../../images/six.mp4') ,image: require('../../images/three.png')
    },
    {
         id: 2, title: 'Radha and Magical Book', link: require('../../images/seven.mp4'),image: require('../../images/four.png')
         },
    { 
        id: 3, title: 'Five Monkeys',link: require('../../images/eight.mp4') ,image: require('../../images/three.png')
    },
    {
         id: 4, title: 'Tu Ani Me', link: require('../../images/six.mp4') ,image: require('../../images/four.png')
        },
    {
         id: 5, title: 'March of the Ants', link: require('../../images/seven.mp4'),image: require('../../images/three.png')
         },
    {
        id:6, title:'The Song of Birds',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:7,title:'The Brave Tiger and the Value of Friendship',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    }
    ,{
        id:8,title:'Gajraj and the Magical River ',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    }
    ,{
        id:9,title:'Chikus Cleverness ',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    }
    ,{
        id:10,title:'Sunrise Symphony',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:11,title:'The Power of Unity The Tale of the Forester Ants ',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:12,title:'The Natures Symphony',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:13,title:'Chunnu the Brave Squirre ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:14,title:'Melodies of Petals',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:15,title:'The Clever Little Rabbit',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:16,title:'The Clever Bird and the Jackal ',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:17,title:'Queen Butterflys Dream ',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:18,title:'Gajraj and the Rivers Friendship',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:19,title:'March of the Ants ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:20,title:'Meena and the Magical Pen ',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:21,title:'The Bugs Adventure ',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:22,title:'Timmy and the Magical Book',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:23,title:'The Grasshoppers Lesson A Tale of Work and Play',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:24,title:'Golu and the Magical Tree',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:25,title:'The Power of Unity The Tale of the Forester Ants ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:26,title:'Chulbul and the Magical Stone',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:27,title:'Squeaky and Jayce',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:28,title:'The Blue Balloon',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:29,title:'Radha and the Magical Book ',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:30,title:'The crow and the pitcher',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:31,title:'Chandni and the Magical Pond',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:32,title:'The Starry Night ',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:33,title:'The Song of Birds',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:34,title:'The Curious Adventure of Timmy and Tessa',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:35,title:'The Quest for the Magical Carrot ',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:36,title:'Dheeru the Clever Deer',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:37,title:'Sunrise Symphony',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:38,title:'Chunnu the Brave Squirre',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:39,title:'Melodies of Petals',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:40,title:'Chikus Cleverness',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:41,title:'The Kind Deer and the Injured Bird ',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:42,title:'The Brave Tiger and the Value of Friendship',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:43,title:'The A to Z Animal Serenade',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:44,title:'Gajraj and the Magical River ',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:45,title:'The Journey to the Great Mountain Brambles Adventure',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:46,title:'The Magical Kite',link: require('../../images/two.mp4'),image: require('../../images/six.png')
    },
    {
        id:47,title:'The Amazing Journey in the Jungle',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:48,title:'The Magical Flute ',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:49,title:'Luna and the Magic of the Ocean',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:50,title:'The Magical Pen',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:51,title:'Mollys Brave Adventure',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:52,title:'The Potter and the Magical Pot ',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:53,title:'The Frog and the Ox A Tale of Ambition and Contentment',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:54,title:'The Clever Rabbit and the Wise Tortoise',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:55,title:'The Lazy Donkey and the Clever Farmer ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:56,title:'The Clever Mouse and the Lion',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:57,title:'Soul of the Desert',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:58,title:'The Unique Friend: Raju and the Magical Kite',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:59,title:'The Amazing Journey of Brave Mouse Max',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:60,title:'Little Tim and the Magical Bird',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:61,title:'The little star and the sweet bunny ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:62,title:'The Adventures of Apple Annie',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:63,title:'The Story of a Bee ',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:64,title:'The Adventures of Mango Man ',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:65,title:'Breaking Rules',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:66,title:'Rabbit Rhyme video',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:67,title:'The Honest Woodcutter',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:68,title:'The Farmers Hard Work',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:69,title:'The Teacher lesson ',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:70,title:'Wings of Harmony ',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:71,title:'The peacocks friendship',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:72,title:'The clever Rabbit',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:73,title:'The fruit of courage and Hard work',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:74,title:'Young boy cleans old temple',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:75,title:'The Story of a Loyal Dog',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:76,title:'Environment awareness animation kids teamwork village ',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:77,title:'The Fox and the Grapes',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:78,title:'Horse Race Competition',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:79,title:'The Tale of Granny and Pumpkin A Magical Journey',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:80,title:'cow in Village ',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:81,title:'Monkey Business with the Butter',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:82,title:'The Dignity of the Poor ',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:83,title:'The Brave Rabbits Adventure',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:84,title:'Neils Dream',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:85,title:'The story of Little Sea ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:86,title:'The Monkey and the Cap Seller',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:87,title:'The Tale of Little Cloud',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:88,title:'Chasing the Sun',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:89,title:'The cunning fox and the honest rabbit',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:90,title:'Monkey and Crocodile',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:91,title:'Guardians of the Enchanted Forest ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:92,title:'The crow and the pitcher',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:93,title:'The story of the lion and the mouse',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:94,title:'Superhero Kids Team ',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:95,title:'The Clever Monkey',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:96,title:'The Clever Rabbit and the innocent tortoise',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:97,title:'The Adventure story',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:98,title:'The Peacock Pride ',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:99,title:'Graduation day',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:100,title:'The Alphabet song',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:101,title:'Rabbit Tales',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:102,title:'The Fat Frogs Big Adventure',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:103,title:'The Plumage parade',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:104,title:'The Magical Toy Shop',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:105,title:'Swimming Symphony',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:106,title:'city foxes animated video',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:107,title:'Cow Animation Rhymes video ',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:108,title:'The Pirates Parrot Adventure',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:109,title:'The Song of the Sea ',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:110,title:'The Time-Traveling Tea Cup',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:111,title:'Rainy Day Dance',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:112,title:'The Enchanted Kingdom',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:113,title:'Rainbow Party in the Sky',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:114,title:'The coward rabbit story',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:115,title:'The Phoenix Flight',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:116,title:'Five monkey',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:117,title:'The Dragon Dance',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:118,title:'The story of Mogli and Baghira',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:119,title:'The Secret Garden Party',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },
    {
        id:120,title:'Moonlight Dance Party',link: require('../../images/six.mp4'),image: require('../../images/four.png')
    },
    {
        id:121,title:'The Lost Star',link: require('../../images/seven.mp4'),image: require('../../images/three.png')
    },
    {
        id:122,title:'The Brave Little Bird',link: require('../../images/eight.mp4'),image: require('../../images/four.png')
    },
    {
        id:123,title:'Rainbow Rain',link: require('../../images/six.mp4'),image: require('../../images/three.png')
    },
    {
        id:124,title:'The Lost Dream',link: require('../../images/seven.mp4'),image: require('../../images/four.png')
    },
    {
        id:125,title:'The story of the hare and the tortoise',link: require('../../images/eight.mp4'),image: require('../../images/three.png')
    },

  ];
  
  export const getStories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(stories);
      }, 1000); 
    });
  };
  