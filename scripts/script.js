var turn = 0;
var firstElement;
var point = 0;
//var score = 0;
var squares = document.getElementsByTagName('div');


// var bgImageArray = [
// "http://www.entertainmentearth.com/images/AUTOIMAGES/RBPIN008lg.jpg",
// "http://startrek2009.com/wp-content/uploads/2016/03/star-trek-next-generation-costumes-adults-sword-300x300.jpg"
// ];

window.onload = function() {
  for (var i = 0; i < squares.length; i ++) {
    squares[i].addEventListener('click', changeImage)

  }
}

function changeImage() {
  turn += 1;
  var currentElement = this.id;

  var currentCell = document.getElementById(currentElement);
  var currentElementString = "" + currentElement;
  var currentCellClass = currentElementString.slice(0, 4);
  // console.log(currentCell);
  currentCell.className += " " + currentCellClass;
  currentCell.removeEventListener("click", changeImage);

  if (turn % 2 !== 0){
    console.log("first turn");
    firstElement = currentCellClass;
    console.log(firstElement);
  }
  if (turn % 2 === 0){
    // compare classes
    compareClasses(currentCellClass, firstElement);
  }

}

function compareClasses(currentElement, firstElement) {
  // console.log("even number of turns");
  console.log('current element is ', currentElement);
  console.log('first element is ', firstElement);
  if (currentElement == firstElement) {
    console.log('they are the same');
    // add points
    // disable tiles
    turn = 0;
    point ++;
    recordPoint();

  } else {
    console.log('they are different');
    resetTiles(currentElement, firstElement);
    turn = 0;

  }
}



function resetTiles(currentElement, firstElement) {
  if (turn > 1) {
    // var selectedTiles = document.getElementsByClassName("div");
    // console.log(selectedTiles);

    // replace .classList.remove() with .className = "col"
    currentElement.classList.remove(currentCellClass);
    firstElement.classList.remove(currentCellClass);
// then set the value / properties to zero etc
    //selectedTiles.innerHTML = "";
    //document.getElementById("selectedTiles").innerHTML = "";

  }
}

function recordPoint() {
  document.getElementById("score").innerHTML = "Score is: " +  point;
  document.getElementById("messages").innerHTML = "You scored one point!"
}


/* function endGame() {
  if  (clicks = 16) {
    resetTiles();
  }
}


function clearBox() {
  document.getElementById("currentElement").innerHTML = "";
}


function changeTurn() {
  // Each square is assigned an image
  // One click makes image appear
  // Second click makes another image appear
  // Disallow any more clicks (disable?)
  // Check if both images are identical
  // If images are identical they stay up
  // If images arent they turn over
  if (turn == 0) {
    squares[i].style.backgroundImage =
  }
} */


// var div1 = document.getElementById('div1');
// var div2 = document.getElementById('div2');
// var div3 = document.getElementById('div3');
// var div4 = document.getElementById('div4');
// var div5 = document.getElementById('div5');
// var div6 = document.getElementById('div6');
// var div7 = document.getElementById('div7');
// var div8 = document.getElementById('div8');