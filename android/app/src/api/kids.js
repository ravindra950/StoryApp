const kidsstories = [
    { 
        id: 1, title: 'The Brave Tiger and the Value of Friendship', link: `https://youtu.be/z2YCTUwWLcc?si=eD1-azqonE_TqWaV` 
    },
    {
         id: 2, title: 'Radha and the Magical Book', link: 'https://youtu.be/OqmBDdtbYQE?si=BFyzrK0MsWXzSwq3'
         },
    { 
        id: 3, title: 'Five Monkeys', link: 'https://youtu.be/hmvYCp1wh74?si=-4ifpfUfmvWwSOyM' 
    },
    // {
    //      id: 4, title: 'Tu Ani Me', link: 'https://youtu.be/EQiYhm-GHUk?si=7JPGX_8kq7F0Oom2' 
    //     },
    // {
    //      id: 5, title: 'March of the Ants', link: 'https://youtu.be/SSoDfWrT7po?si=T053IVPEPi0wN4fo'
    //      },
    // {
    //     id:6, title:'The Song of Birds',link:'https://youtu.be/qlBUpyynpFU?si=kvbi6HZpagnvL5Yf'
    // },
    // {
    //     id:7,title:'The Brave Tiger and the Value of Friendship',link:'https://youtu.be/z2YCTUwWLcc?si=DfY4s7PEs8YzdkKZ'
    // }
    // ,{
    //     id:8,title:'Gajraj and the Magical River ',link:'https://youtu.be/_Fe7aNyDM7Y?si=P4GJx2eE27TN6r83'
    // }
    // ,{
    //     id:9,title:'Chikus Cleverness ',link:'https://youtu.be/mBOw5BDSl2M?si=JbvBjnxJgCQssJkC'
    // }
    // ,{
    //     id:10,title:'Sunrise Symphony',link:'https://youtu.be/ZgfQB4naG-g?si=awl0e1daggeL5UU-'
    // },
    // {
    //     id:11,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=4AJG30hNMlYZhSLu'
    // },
    // {
    //     id:12,title:'The Natures Symphony',link:'https://youtu.be/0dvw0zXRA64?si=hU9UkPaqVGhRkIN1'
    // },
    // {
    //     id:13,title:'Chunnu the Brave Squirre ',link:'https://youtu.be/qxUWG34stlY?si=F01cY9UyE1AmusjZ'
    // },
    // {
    //     id:14,title:'Melodies of Petals',link:'https://youtu.be/RRZ36eCV1fg?si=pqVSvrHweTP3bXgd'
    // },
    // {
    //     id:15,title:'The Clever Little Rabbit',link:'https://youtu.be/kXJQopw81gc?si=Ob2YTG7MJWLaUqYz'
    // },
    // {
    //     id:16,title:'The Clever Bird and the Jackal ',link:'https://youtu.be/E1Q3SA_cETY?si=bImWADYBb3rPJ14L'
    // },
    // {
    //     id:17,title:'Queen Butterflys Dream ',link:'https://youtu.be/cxnow0g_uzo?si=a91Or6_FXXaUKGGx'
    // },
    // {
    //     id:18,title:'Gajraj and the Rivers Friendship',link:'https://youtu.be/DQjoLq5wL9A?si=0N2cJwdf0d5XwPDg'
    // },
    // {
    //     id:19,title:'March of the Ants ',link:'https://youtu.be/SSoDfWrT7po?si=sTg9J2PLCbnfeMfS'
    // },
    // {
    //     id:20,title:'Meena and the Magical Pen ',link:'https://youtu.be/PbPNuMMi9Lo?si=5fII-xUGPEUvT2dQ'
    // },
    // {
    //     id:21,title:'The Bugs Adventure ',link:'https://youtu.be/k42w1z-ZMuk?si=EJIH76QLxWcpPPvf'
    // },
    // {
    //     id:22,title:'Timmy and the Magical Book',link:'https://youtu.be/INBNoD4RV4s?si=ctrqXAv_DzFu8Bio'
    // },
    // {
    //     id:23,title:'The Grasshoppers Lesson A Tale of Work and Play',link:'https://youtu.be/tbahNgpK94M?si=9ZDmYH3xx-WndheM'
    // },
    // {
    //     id:24,title:'Golu and the Magical Tree',link:'https://youtu.be/993PD2Cv7DM?si=sY_j9Q8nKEW-cGCq'
    // },
    // {
    //     id:25,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=wQYolD98JkPluvTJ'
    // }
];

export const getKids = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(kidsstories);
      }, 1000); 
    });
  };