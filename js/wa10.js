const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 16 fahrenheit outside, so :insertx: was way too cold to go outside. :insertx: decided to stay inside and :inserty:, they got bored in the process, then :insertz:. Bob decided to join in, but was not surprised — :insertx: weighs 700 pounds, and it was extremely cold outside.";
const insertX = ["Rudolf the Reindeer", "Charlie Brown", "Peanut the Cat"];
const insertY = ["make chicken noodle soup", "make hot chocolate", "watch a Christmas movie"];
const insertZ = ["spontaneously decided to jump out the window", "decided to build a snowman", "started making snowballs"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(700/14) + " stone";
    newStory = newStory.replace("700 pounds", weight);
    const temperature =  Math.round((94-32)*(5/9)) + " centigrade";
    newStory = newStory.replace("16 fahrenheit", temperature);
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}