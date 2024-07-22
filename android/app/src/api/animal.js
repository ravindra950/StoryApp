const animalstories = [
    {
        id:31,title:'Chandni and the Magical Pond',link:'https://youtu.be/LvxVVkJAXMI?si=6Bk__2i5ZNoJ5AkN'
    },
    {
        id:32,title:'The Starry Night ',link:'https://youtu.be/KVRMothSHyI?si=PcleErDp0UaN69Ef',image: require('../images/instaravi.png')
    },
    {
        id:33,title:'The Song of Birds',link:'https://youtu.be/qlBUpyynpFU?si=X0wdHWg2xgTmyugw'
    },
    {
        id:34,title:'The Curious Adventure of Timmy and Tessa',link:'https://youtu.be/fnW6mlb6Rq4?si=Kw_r-NpyXEBjbeeI'
    },
    {
        id:35,title:'The Quest for the Magical Carrot ',link:'https://youtu.be/wdygEJnhBLo?si=Pke0FwVxe99A4pwa'
    },
    {
        id:36,title:'Dheeru the Clever Deer',link:'https://youtu.be/kj4WRX3nSEk?si=BscHWNxT8UFOmO2W'
    },
    {
        id:37,title:'Sunrise Symphony',link:'https://youtu.be/ZgfQB4naG-g?si=PC-atxtMThe4wiPK'
    },
    {
        id:38,title:'Chunnu the Brave Squirre',link:'https://youtu.be/qxUWG34stlY?si=7Q4goTntrSVf2NqJ'
    },
    {
        id:39,title:'Melodies of Petals',link:'https://youtu.be/RRZ36eCV1fg?si=lFGF049p6M6-pMER'
    },
    {
        id:40,title:'Chikus Cleverness',link:'https://youtu.be/mBOw5BDSl2M?si=_yJUbB6KfkV2s4Yh'
    },
    {
        id:41,title:'The Kind Deer and the Injured Bird ',link:'https://youtu.be/FR9qaZ8gr0c?si=LH-RZioI8N9Ywb-V'
    },
    {
        id:42,title:'The Brave Tiger and the Value of Friendship',link:'https://youtu.be/z2YCTUwWLcc?si=ky75tr8iOTVy0Rr9'
    },
    {
        id:43,title:'The A to Z Animal Serenade',link:'https://youtu.be/IiHCRL7XyHI?si=kL66mtZb5kcH9gOI'
    },
    {
        id:44,title:'Gajraj and the Magical River ',link:'https://youtu.be/_Fe7aNyDM7Y?si=CG3EL78YIequiIyC'
    },
    {
        id:45,title:'The Journey to the Great Mountain Brambles Adventure',link:'https://youtu.be/_IGoBeD41Bo?si=uilzr20o7_RZMo2m'
    },
    {id:46,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=wQYolD98JkPluvTJ'
    }
];

export const getAnimal = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(animalstories);
      }, 1000); 
    });
  };