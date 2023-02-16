// Select The Start Game Button
document.querySelector(".control-buttons span").onclick = function () {

    // Prompt Window To Ask For Name
    let yourName = prompt("Whats Your Name?");
  
    // If Name Is Empty
    if (yourName == null || yourName == "") {
  
      // Set Name To Unknown
      document.querySelector(".name span").innerHTML = 'Unknown';
  
    // Name Is Not Empty
    } else {
  
      // Set Name To Your Name
      document.querySelector(".name span").innerHTML =yourName + ' 😈';
  
    }
   
    // Remove Splash Screen
    document.querySelector(".control-buttons").remove();

//    let control=document.querySelector(".control-buttons")
//    control.remove('z-index');
}

let domm=document.querySelector(".control-buttons span")

// Effect Duration
let duration = 1100;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children)

// Create Range Of Keys
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

// Add Order Css Property To Game Blocks
blocks.forEach((block, index) => {
  // Add CSS Order Property
  block.style.order = orderRange[index];


  block.addEventListener('click' ,()=>flipblock(block))
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  domm.addEventListener('click' ,()=>flipblock(block))
  setTimeout(() => reo(block),10000);
//////////////////////////////////////////////////////////////////////////////////////////
});
function flipblock(Selectblock){
  Selectblock.classList.add('is-flipped')
  
  // Collect All Flipped Cards
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

  if (allFlippedBlocks.length === 2) {
    stopClicking()
    chekmatch(allFlippedBlocks[0],allFlippedBlocks[1])
}
}
// Shuffle Function
function shuffle(array) {

  // Settings Vars
  let current = array.length,//20
      temp,//empty
      random;//math method

  while (current > 0) {

    // Get Random Number
    random = Math.floor(Math.random() * current);

    // Decrease Length By One
    current--;

    // [1] Save Current Element in Stash
    temp = array[current];
    
    // [2] Current Element = Random Element
    
    array[current] = array[random];

    // [3] Random Element = Get Element From Stash
    array[random] = temp;
  }
  return array;
}
// Stop Clicking Function
function stopClicking() {

  blocksContainer.classList.add('no-clicking');
  setTimeout(() => blocksContainer.classList.remove('no-clicking'), duration);

}
function chekmatch(one,two){

let tris=document.querySelector('.tries span');

  if(one.dataset.technology===two.dataset.technology){
    one.classList.remove('is-flipped')
    two.classList.remove('is-flipped')
    one.classList.add('has-match')
    two.classList.add('has-match')
  }else{
    tris.innerHTML= parseInt(tris.innerHTML)+1;
    setTimeout(() => {
    one.classList.remove('is-flipped')
    two.classList.remove('is-flipped')
    },duration)
   
  }

}
//////////////////////////////////

function reo(onw){
  onw.classList.remove('has-match')}
/////////////////////////////////////////////

