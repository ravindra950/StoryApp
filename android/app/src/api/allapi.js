
const stories = [
    { 
        id: 1, title: 'The Brave Tiger ', link: `https://youtu.be/z2YCTUwWLcc?si=eD1-azqonE_TqWaV` 
    },
    {
         id: 2, title: 'Radha and Magical Book', link: 'https://youtu.be/OqmBDdtbYQE?si=BFyzrK0MsWXzSwq3'
         },
    { 
        id: 3, title: 'Five Monkeys', link: 'https://youtu.be/hmvYCp1wh74?si=-4ifpfUfmvWwSOyM' 
    },
    {
         id: 4, title: 'Tu Ani Me', link: 'https://youtu.be/EQiYhm-GHUk?si=7JPGX_8kq7F0Oom2' 
        },
    {
         id: 5, title: 'March of the Ants', link: 'https://youtu.be/SSoDfWrT7po?si=T053IVPEPi0wN4fo'
         },
    {
        id:6, title:'The Song of Birds',link:'https://youtu.be/qlBUpyynpFU?si=kvbi6HZpagnvL5Yf'
    },
    {
        id:7,title:'The Brave Tiger and the Value of Friendship',link:'https://youtu.be/z2YCTUwWLcc?si=DfY4s7PEs8YzdkKZ'
    }
    ,{
        id:8,title:'Gajraj and the Magical River ',link:'https://youtu.be/_Fe7aNyDM7Y?si=P4GJx2eE27TN6r83'
    }
    ,{
        id:9,title:'Chikus Cleverness ',link:'https://youtu.be/mBOw5BDSl2M?si=JbvBjnxJgCQssJkC'
    }
    ,{
        id:10,title:'Sunrise Symphony',link:'https://youtu.be/ZgfQB4naG-g?si=awl0e1daggeL5UU-'
    },
    {
        id:11,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=4AJG30hNMlYZhSLu'
    },
    {
        id:12,title:'The Natures Symphony',link:'https://youtu.be/0dvw0zXRA64?si=hU9UkPaqVGhRkIN1'
    },
    {
        id:13,title:'Chunnu the Brave Squirre ',link:'https://youtu.be/qxUWG34stlY?si=F01cY9UyE1AmusjZ'
    },
    {
        id:14,title:'Melodies of Petals',link:'https://youtu.be/RRZ36eCV1fg?si=pqVSvrHweTP3bXgd'
    },
    {
        id:15,title:'The Clever Little Rabbit',link:'https://youtu.be/kXJQopw81gc?si=Ob2YTG7MJWLaUqYz'
    },
    {
        id:16,title:'The Clever Bird and the Jackal ',link:'https://youtu.be/E1Q3SA_cETY?si=bImWADYBb3rPJ14L'
    },
    {
        id:17,title:'Queen Butterflys Dream ',link:'https://youtu.be/cxnow0g_uzo?si=a91Or6_FXXaUKGGx'
    },
    {
        id:18,title:'Gajraj and the Rivers Friendship',link:'https://youtu.be/DQjoLq5wL9A?si=0N2cJwdf0d5XwPDg'
    },
    {
        id:19,title:'March of the Ants ',link:'https://youtu.be/SSoDfWrT7po?si=sTg9J2PLCbnfeMfS'
    },
    {
        id:20,title:'Meena and the Magical Pen ',link:'https://youtu.be/PbPNuMMi9Lo?si=5fII-xUGPEUvT2dQ'
    },
    {
        id:21,title:'The Bugs Adventure ',link:'https://youtu.be/k42w1z-ZMuk?si=EJIH76QLxWcpPPvf'
    },
    {
        id:22,title:'Timmy and the Magical Book',link:'https://youtu.be/INBNoD4RV4s?si=ctrqXAv_DzFu8Bio'
    },
    {
        id:23,title:'The Grasshoppers Lesson A Tale of Work and Play',link:'https://youtu.be/tbahNgpK94M?si=9ZDmYH3xx-WndheM'
    },
    {
        id:24,title:'Golu and the Magical Tree',link:'https://youtu.be/993PD2Cv7DM?si=sY_j9Q8nKEW-cGCq'
    },
    {
        id:25,title:'The Power of Unity The Tale of the Forester Ants ',link:'https://youtu.be/2rP0qfh9yF8?si=wQYolD98JkPluvTJ'
    },
    {
        id:26,title:'Chulbul and the Magical Stone',link:'https://youtu.be/73GhtXVGzYo?si=-luXCL3mXaShsci2'
    },
    {
        id:27,title:'Squeaky and Jayce',link:'https://youtu.be/HiqPPE6gRvY?si=6VKAY--bLFYi3lch'
    },
    {
        id:28,title:'The Blue Balloon',link:'https://youtu.be/AHGFQzM_pwg?si=qBlbznewaJeLbopH'
    },
    {
        id:29,title:'Radha and the Magical Book ',link:'https://youtu.be/OqmBDdtbYQE?si=_PhQkazsFzm0RGzK'
    },
    {
        id:30,title:'The crow and the pitcher',link:'https://youtu.be/5zEi4jqpG7k?si=3PIYqmdH30uatNPx'
    },
    {
        id:31,title:'Chandni and the Magical Pond',link:'https://youtu.be/LvxVVkJAXMI?si=6Bk__2i5ZNoJ5AkN'
    },
    {
        id:32,title:'The Starry Night ',link:'https://youtu.be/KVRMothSHyI?si=PcleErDp0UaN69Ef'
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
    {
        id:46,title:'The Magical Kite',link:'https://youtu.be/W41rOyZFtHI?si=CD0NG_40v7QVXrI8'
    },
    {
        id:47,title:'The Amazing Journey in the Jungle',link:'https://youtu.be/_aH9DFQG878?si=xdaAgQWu-7q7hX9q'
    },
    {
        id:48,title:'The Magical Flute ',link:'https://youtu.be/vAl3p8lCffA?si=zVjzZNmNScbwmNKu'
    },
    {
        id:49,title:'Luna and the Magic of the Ocean',link:'https://youtu.be/-YK57eyJP2k?si=Rmi_7oJcCXRIcNpG'
    },
    {
        id:50,title:'The Magical Pen',link:'https://youtu.be/AIqogJEMxes?si=olUm7O3z3RUcq9u7'
    },
    {
        id:51,title:'Mollys Brave Adventure',link:'https://youtu.be/fMIBVTHhu0w?si=IHUHh-5zC1tlZUos'
    },
    {
        id:52,title:'The Potter and the Magical Pot ',link:'https://youtu.be/AT4JPJKomHU?si=5y219Rc2H8zfst9o'
    },
    {
        id:53,title:'The Frog and the Ox A Tale of Ambition and Contentment',link:'https://youtu.be/Yfzaq8tQuPI?si=PTHM0nlDTjc_3V-V'
    },
    {
        id:54,title:'The Clever Rabbit and the Wise Tortoise',link:'https://youtu.be/scYAtfiSTHc?si=B-NvIoJkg2C6UZqr'
    },
    {
        id:55,title:'The Lazy Donkey and the Clever Farmer ',link:'https://youtu.be/LMdMijfi4go?si=nITcDefgEIieIBRQ'
    },
    {
        id:56,title:'The Clever Mouse and the Lion',link:'https://youtu.be/IFNNwef7HLU?si=EOOR_R74LuKDkk_3'
    },
    {
        id:57,title:'Soul of the Desert',link:'https://youtu.be/v1D5Hn1g66I?si=atNG3xl-r6qoT4ED'
    },
    {
        id:58,title:'The Unique Friend: Raju and the Magical Kite',link:'https://youtu.be/6mXsi2myZGA?si=ekZraAyLCIRsx3NM'
    },
    {
        id:59,title:'The Amazing Journey of Brave Mouse Max',link:'https://youtu.be/1RuILbU0q7E?si=ChSJJlfgIs8K_C3z'
    },
    {
        id:60,title:'Little Tim and the Magical Bird',link:'https://youtu.be/bJ-jFb-tq-o?si=QZF4BoxtY915NH0p'
    },
    {
        id:61,title:'The little star and the sweet bunny ',link:'https://youtu.be/AhjBTQ-eQIA?si=okWrBaCQBTPR99DA'
    },
    {
        id:62,title:'The Adventures of Apple Annie',link:'https://youtu.be/By8S8DZLZ_A?si=EYA11XPolsLFfFZB'
    },
    {
        id:63,title:'The Story of a Bee ',link:'https://youtu.be/c_7jmzakye8?si=eikbR1NRaGKGp7wv'
    },
    {
        id:64,title:'The Adventures of Mango Man ',link:'https://youtu.be/8ntdRTOiWs4?si=ik89dwOPnWOo1oTC'
    },
    {
        id:65,title:'Breaking Rules',link:'https://youtu.be/mYJQu7RGzAs?si=ITGD-7TrBU-A7k35'
    },
    {
        id:66,title:'Rabbit Rhyme video',link:'https://youtu.be/G6ouqyGPz5E?si=y13bhh5SLd8eY2aA'
    },
    {
        id:67,title:'The Honest Woodcutter',link:'https://youtu.be/lEu3wQLmbkI?si=0UdpZrRM_BVVHIcu'
    },
    {
        id:68,title:'The Farmers Hard Work',link:'https://youtu.be/0Yei1LPMRz8?si=YrQdNGzgagbfE6sW'
    },
    {
        id:69,title:'The Teacher lesson ',link:'https://youtu.be/0Ts0Zf4fghc?si=nHxwUHk0R7Dlx7HO'
    },
    {
        id:70,title:'Wings of Harmony ',link:'https://youtu.be/Y1Qryl2k7XU?si=lpoD0gMSnLFD45BF'
    },
    {
        id:71,title:'The peacocks friendship',link:'https://youtu.be/6bdS6Q2DZuw?si=RNJW273LaWZxvlGp'
    },
    {
        id:72,title:'The clever Rabbit',link:'https://youtu.be/v2zkUwuIUDU?si=xfMPOy5_x1n2KiQS'
    },
    {
        id:73,title:'The fruit of courage and Hard work',link:'https://youtu.be/PqnPyycDJu8?si=POARNTgoqdYXUi5D'
    },
    {
        id:74,title:'Young boy cleans old temple',link:'https://youtu.be/J9H87TDRojg?si=Kv2xDvaasaz9EQ03'
    },
    {
        id:75,title:'The Story of a Loyal Dog',link:'https://youtu.be/MmyTwYOj9hc?si=c9pSz_ttthJ6e5in'
    },
    {
        id:76,title:'Environment awareness animation kids teamwork village ',link:'https://youtu.be/accmxwwW9eI?si=3LrrtP5R15gN_w7E'
    },
    {
        id:77,title:'The Fox and the Grapes',link:'https://youtu.be/tYRZhKazbVs?si=PnDE3BkWq7o8XuSL'
    },
    {
        id:78,title:'Horse Race Competition',link:'https://youtu.be/QOmTNmV2TlQ?si=qwj6ToP0nqhZD9R3'
    },
    {
        id:79,title:'The Tale of Granny and Pumpkin A Magical Journey',link:'https://youtu.be/zrDbniFT3gw?si=9ZliDRjb-vniEvJm'
    },
    {
        id:80,title:'cow in Village ',link:'https://youtu.be/ttUhylRSOI8?si=MYp3JCcIXIrUN6GB'
    },
    {
        id:81,title:'Monkey Business with the Butter',link:'https://youtu.be/GrM9xlzkkSM?si=vrrZE9A3kTnXojUo'
    },
    {
        id:82,title:'The Dignity of the Poor ',link:'https://youtu.be/ZE8PtFS3asg?si=dsfV4rxh2o2VC6Sy'
    },
    {
        id:83,title:'The Brave Rabbits Adventure',link:'https://youtu.be/t3H_-Y2gZb8?si=pV14sdxCNvpq2TO3'
    },
    {
        id:84,title:'Neils Dream',link:'https://youtu.be/5Y3jCQVlhyA?si=KU1mCeVYegYIQc87'
    },
    {
        id:85,title:'The story of Little Sea ',link:'https://youtu.be/IpSJfb2c4-U?si=V_-n3T5fNbzI8giR'
    },
    {
        id:86,title:'The Monkey and the Cap Seller',link:'https://youtu.be/XTM8-lxUkxc?si=pY1Ldeges6GSzoL8'
    },
    {
        id:87,title:'The Tale of Little Cloud',link:'https://youtu.be/UH-bcRkRBEc?si=oBB1m7WD44aXH8PT'
    },
    {
        id:88,title:'Chasing the Sun',link:'https://youtu.be/R8AA3pT7hUc?si=pNYEdetezycLANoz'
    },
    {
        id:89,title:'The cunning fox and the honest rabbit',link:'https://youtu.be/h9xd950LRWU?si=rYzNr8FbSy-lXEMs'
    },
    {
        id:90,title:'Monkey and Crocodile',link:'https://youtu.be/P9OY04tXKVQ?si=GsWVszRLp1Kr_6Id'
    },
    {
        id:91,title:'Guardians of the Enchanted Forest ',link:'https://youtu.be/GhrshIZbiZ0?si=Ge9hSTtWzkraaJtD'
    },
    {
        id:92,title:'The crow and the pitcher',link:'https://youtu.be/EKSqkqgUuEo?si=8fM0FB-uBXbglqcw'
    },
    {
        id:93,title:'The story of the lion and the mouse',link:'https://youtu.be/tC9NXzKpewU?si=u1y1cnTgo6jcnGLK'
    },
    {
        id:94,title:'Superhero Kids Team ',link:'https://youtu.be/VBLfoFKHu1E?si=fydrLHi5yOe4OLBo'
    },
    {
        id:95,title:'The Clever Monkey',link:'https://youtu.be/Jya9BI6dedU?si=ShTthtRaoQG10BLn'
    },
    {
        id:96,title:'The Clever Rabbit and the innocent tortoise',link:'https://youtu.be/Pt9IRLUsnFY?si=Bmk_PRi-bfU_4bQU'
    },
    {
        id:97,title:'The Adventure story',link:'https://youtu.be/5vc3mnt3Z7M?si=D9XRfXd2wmlOZFxN'
    },
    {
        id:98,title:'The Peacock Pride ',link:'https://youtu.be/dxEosWxt8G8?si=bdYVX4WsEkY-sp0Z'
    },
    {
        id:99,title:'Graduation day',link:'https://youtu.be/G-gqEvPhp9s?si=QAWZhaBrPyeNyhBp'
    },
    {
        id:100,title:'The Alphabet song',link:'https://youtu.be/VxQ3AycxO1A?si=FEHGTh6LfBTWjooQ'
    },
    {
        id:101,title:'Rabbit Tales',link:'https://youtu.be/9h1tOdspH88?si=5tpFPIP73-ttwgbR'
    },
    {
        id:102,title:'The Fat Frogs Big Adventure',link:'https://youtu.be/qYIm1QTOxb4?si=7g4ewYOCOKHT90mB'
    },
    {
        id:103,title:'The Plumage parade',link:'https://youtu.be/Hc40fR9EZRw?si=WjuyXkuNkYsh7FeY'
    },
    {
        id:104,title:'The Magical Toy Shop',link:'https://youtu.be/1McyY-B3lKg?si=OCeR5alDIGPfNNi8'
    },
    {
        id:105,title:'Swimming Symphony',link:'https://youtu.be/E6LY_nGS43o?si=w9hSESUgFzMVYbOI'
    },
    {
        id:106,title:'city foxes animated video',link:'https://youtu.be/VQhimY-sMuE?si=zb9aJCdK1UNDHMfY'
    },
    {
        id:107,title:'Cow Animation Rhymes video ',link:'https://youtu.be/a2JZuHvlSsQ?si=--pmavlO4P6mF6L8'
    },
    {
        id:108,title:'The Pirates Parrot Adventure',link:'https://youtu.be/P38rTZcQ9mc?si=cr2SiE5cuKfnZmVS'
    },
    {
        id:109,title:'The Song of the Sea ',link:'https://youtu.be/3jiyfopPWfI?si=IU8JxsyQeIsYM314'
    },
    {
        id:110,title:'The Time-Traveling Tea Cup',link:'https://youtu.be/9PVqMtJcwFc?si=F9w3txsjEkp0uH8z'
    },
    {
        id:111,title:'Rainy Day Dance',link:'https://youtu.be/nlvBLOWjjRI?si=1_RPeSGK6pgMtwVY'
    },
    {
        id:112,title:'The Enchanted Kingdom',link:'https://youtu.be/dVmKfcsdieo?si=vZQJbXfYKNQCZEL_'
    },
    {
        id:113,title:'Rainbow Party in the Sky',link:'https://youtu.be/QcVD_VAPBO0?si=woGdO7AGgdc2XaJ3'
    },
    {
        id:114,title:'The coward rabbit story',link:'https://youtu.be/hYIBjqYWdBI?si=tfeeggX1Zgyw2VDa'
    },
    {
        id:115,title:'The Phoenix Flight',link:'https://youtu.be/9ExX5ajUpa0?si=0W9Mj1F_1Le36XIM'
    },
    {
        id:116,title:'Five monkey',link:'https://youtu.be/hmvYCp1wh74?si=uMFXYS9a3gmdydqN'
    },
    {
        id:117,title:'The Dragon Dance',link:'https://youtu.be/W6JV3dbpoPc?si=itKZud5wkZqwVv-v'
    },
    {
        id:118,title:'The story of Mogli and Baghira',link:'https://youtu.be/VPLLb200bsw?si=YikThD_EldTEhNK8'
    },
    {
        id:119,title:'The Secret Garden Party',link:'https://youtu.be/lXIC8tLsQzE?si=aANeALD8SRnTdKZZ'
    },
    {
        id:120,title:'Moonlight Dance Party',link:'https://youtu.be/PoZr0RsZQZU?si=zlCUWNJbCYKy5L5Z'
    },
    {
        id:121,title:'The Lost Star',link:'https://youtu.be/wuFguzViQ_I?si=65eCRJNNeigHXGjU'
    },
    {
        id:122,title:'The Brave Little Bird',link:'https://youtu.be/QmUtuNFGn74?si=jqIIg5vOHtEDBc4a'
    },
    {
        id:123,title:'Rainbow Rain',link:'https://youtu.be/23JeSVMgYs8?si=OtCUzjC46VPX8nA6'
    },
    {
        id:124,title:'The Lost Dream',link:'https://youtube.com/shorts/X26BkUisN7s?si=tuIntpdDBp5ZMoV0'
    },
    {
        id:125,title:'The story of the hare and the tortoise',link:'https://youtube.com/shorts/yuCUJB_AbKQ?si=hebu-roszJLvvI68'
    },

  ];
  
  export const getStories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(stories);
      }, 1000); 
    });
  };
  