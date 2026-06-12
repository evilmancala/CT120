$("#grrr").click(
  function () {
    $("#insult").stop(true, true).slideDown(300);
  },
  function () {
    $("#insult").stop(true, true).slideUp(300);
  }
);

async function getRandomInsult() {
    const response = await fetch(
        "https://insult.mattbas.org/api/insult.html", {method: "GET",});

        const insultRandom = await response.text();
        console.log("Got insult:", insultRandom);
        return insultRandom;

        console.log("Got insult:", insultRandom);
    return insultRandom;
 
}

async function randomizeInsult() {
    const insultRandom = await getRandomInsult();
    
}

$("#add-insult").click(
    async function () {
        let newInsult;
        if ($('#inRandom').is(':checked')) {
            newInsult = await randomizeInsult();
        }
    }
)


let randomNouns = [
  { plural: ['feet', 'shoes', 'legs', 'arms'] },
  { singular: ['head', 'nose', 'butt', 'face', 'mom', 'dad', 'hair', 'grandma'] }
];

let randomAdjectives = [
  'boring', 
  'dumb', 
  'nasty', 
  'gross', 
  'terrible',
  'stupid',
  'ugly',
  'hairy',
  'useless',
  'sloppy',
  'unnatural',
  'sad', 
  'selfish', 
  'trashy'
];

let randomWords = [
  'horse monster',
  'steamy turd',
  'rat sack',
  'wet goblin',
  'rotten dinosaur',
  'street cow', 
  'fat baby', 
  'hot piece of garbage',
  'pile of eat my shorts',
  'shark snack',
  'turtle fairy',
  'death cult', 
  'vegetable fire', 
  'grouch banana', 
  'wax tampon',
  'turd gobbler', 
  'cotton donkey', 
  'ghost cobra', 
  'jerk-eagle',
  'fart oven', 
  'sneaze basket', 
  'dead hamster',
  'flavor witch',
  'pale bagel'
];


let randomButton = document.getElementById('generateInsult');

let insultText = document.getElementById('insult');
let connector;

function generateInsult() {
  randomButton.addEventListener('click', function(){
    
    let randomNoun = getRandomNoun(randomNouns);
    let randomAdjective = getRandomContent(randomAdjectives);
    let randomWord = getRandomContent(randomWords);
    let connector;
    
    if ( randomAdjective === 'ugly' || randomAdjective === 'unnatural') {
      connector = 'an'; 
    } else {
      connector = 'a';
    }
    
     insultText.innerHTML = 'Your ' + randomNoun + ' like ' + connector + ' ' + randomAdjective + ' ' + randomWord + '.';

    });
  }

generateInsult();


function getRandomContent(randomArray){
  let randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
  const max = randomArray.length;
  return randomArray[getRandomInt(0, randomArray.length - 1)];  
}


function getRandomNoun(randomNouns) {
  
  let randomIndex = randomNouns[Math.floor(Math.random() * randomNouns.length)];
  let connector; 
  
  if ('plural' in randomIndex) {
    
    connector = 'are'; 
    return randomIndex.plural[Math.floor(Math.random() * randomIndex.plural.length)] + ' ' + connector;
    
  } else if ('singular' in randomIndex ) {
    
    connector = 'is';    
    return randomIndex.singular[Math.floor(Math.random() * randomIndex.singular.length)] + ' ' + connector;
    
  } else {
    
    return;   
  }
}

let getRandomInt = (min, max) => {
    // Create byte array and fill with 1 random number
    let byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray); 

    let range = max - min + 1;
    let max_range = 256;
    if (byteArray[0] >= Math.floor(max_range / range) * range)
      return getRandomInt(min, max);
    return min + (byteArray[0] % range);
  }


  import React from "https://esm.sh/react@19";
import { createYay } from "https://esm.sh/react-dom@19/client";
import confetti from "https://esm.sh/canvas-confetti@1";

function App() {
  function onClick() {
    confetti({
      particleCount: 150,
      spread: 60
    });
  }
}

createYay(document.getElementById("Yay")).render(<App />);