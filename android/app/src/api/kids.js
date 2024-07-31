const kidsstories = [
    { 
        id: 1, title: 'The Brave Tiger and the Value of Friendship', link: 'https://youtu.be/z2YCTUwWLcc?si=eD1-azqonE_TqWaV' , image: require('../images/five.png')
    },
    {
         id: 2, title: 'Radha and the Magical Book', link: 'https://youtu.be/OqmBDdtbYQE?si=BFyzrK0MsWXzSwq3', image: require('../images/six.png')
         },
    { 
        id: 3, title: 'Five Monkeys', link: 'https://youtu.be/hmvYCp1wh74?si=-4ifpfUfmvWwSOyM'  , image: require('../images/five.png')
    },
     {
          id: 4, title: 'Tu Ani Me', link: 'https://youtu.be/EQiYhm-GHUk?si=7JPGX_8kq7F0Oom2' , image: require('../images/six.png')
    },
     {
          id: 5, title: 'March of the Ants', link: 'https://youtu.be/SSoDfWrT7po?si=T053IVPEPi0wN4fo' , image: require('../images/five.png')
         },
    {
        id:6, title:'The Song of Birds',link:'https://youtu.be/qlBUpyynpFU?si=kvbi6HZpagnvL5Yf', image: require('../images/six.png')
    },
     {
         id:7,title:'The Brave Tiger and the Value of Friendship',link:'https://youtu.be/z2YCTUwWLcc?si=DfY4s7PEs8YzdkKZ' , image: require('../images/five.png')
     }
     ,{
         id:8,title:'Gajraj and the Magical River ',link:'https://youtu.be/_Fe7aNyDM7Y?si=P4GJx2eE27TN6r83', image: require('../images/six.png')
     }
     ,{
    id:9,title:'Chikus Cleverness ',link:'https://youtu.be/mBOw5BDSl2M?si=JbvBjnxJgCQssJkC' , image: require('../images/five.png')
     }
    ,{
        id:10,title:'Sunrise Symphony',link:'https://youtu.be/ZgfQB4naG-g?si=awl0e1daggeL5UU-', image: require('../images/six.png')
     },
     {
         id:11,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=4AJG30hNMlYZhSLu' , image: require('../images/five.png')
     },
    {
         id:12,title:'The Natures Symphony',link:'https://youtu.be/0dvw0zXRA64?si=hU9UkPaqVGhRkIN1', image: require('../images/six.png')
    },
     {
        id:13,title:'Chunnu the Brave Squirre ',link:'https://youtu.be/qxUWG34stlY?si=F01cY9UyE1AmusjZ' , image: require('../images/five.png')
    },
    {
        id:14,title:'Melodies of Petals',link:'https://youtu.be/RRZ36eCV1fg?si=pqVSvrHweTP3bXgd', image: require('../images/six.png')
     },
     {
        id:15,title:'The Clever Little Rabbit',link:'https://youtu.be/kXJQopw81gc?si=Ob2YTG7MJWLaUqYz' , image: require('../images/five.png')
    },
    {
       id:16,title:'The Clever Bird and the Jackal ',link:'https://youtu.be/E1Q3SA_cETY?si=bImWADYBb3rPJ14L', image: require('../images/six.png')
    },
     {
         id:17,title:'Queen Butterflys Dream ',link:'https://youtu.be/cxnow0g_uzo?si=a91Or6_FXXaUKGGx' , image: require('../images/five.png')
     },
     {
         id:18,title:'Gajraj and the Rivers Friendship',link:'https://youtu.be/DQjoLq5wL9A?si=0N2cJwdf0d5XwPDg', image: require('../images/six.png')
    },
     {
         id:19,title:'March of the Ants ',link:'https://youtu.be/SSoDfWrT7po?si=sTg9J2PLCbnfeMfS' , image: require('../images/five.png')
     },
     {
         id:20,title:'Meena and the Magical Pen ',link:'https://youtu.be/PbPNuMMi9Lo?si=5fII-xUGPEUvT2dQ', image: require('../images/six.png')
     },
     {
        id:21,title:'The Bugs Adventure ',link:'https://youtu.be/k42w1z-ZMuk?si=EJIH76QLxWcpPPvf' , image: require('../images/five.png')
    },
   {
        id:22,title:'Timmy and the Magical Book',link:'https://youtu.be/INBNoD4RV4s?si=ctrqXAv_DzFu8Bio', image: require('../images/six.png')
    },
     {
        id:23,title:'The Grasshoppers Lesson A Tale of Work and Play',link:'https://youtu.be/tbahNgpK94M?si=9ZDmYH3xx-WndheM' , image: require('../images/five.png')
    },
    {
      id:24,title:'Golu and the Magical Tree',link:'https://youtu.be/993PD2Cv7DM?si=sY_j9Q8nKEW-cGCq', image: require('../images/six.png')
    },
    {
        id:25,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=wQYolD98JkPluvTJ' , image: require('../images/five.png')
    }
];

export const getKids = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(kidsstories);
      }, 1000); 
    });
  };