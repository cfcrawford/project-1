var turn = 0;
//var score = 0;
var squares = document.getElementsByTagName('div');
// var div1 = document.getElementById('div1');
// var div2 = document.getElementById('div2');
// var div3 = document.getElementById('div3');
// var div4 = document.getElementById('div4');
// var div5 = document.getElementById('div5');
// var div6 = document.getElementById('div6');
// var div7 = document.getElementById('div7');
// var div8 = document.getElementById('div8');

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
  var currentElement = this.id;

  var currentCell = document.getElementById(currentElement);
  var currentElementString = "" + currentElement
  var currentCellClass = currentElementString.slice(0, 4);
  // console.log(currentCellClass);
  currentCell.classList.add(currentCellClass);

  // var link = bgImageArray[currentElementNumber];

  // currentElement.setAttribute("style", "background-image: ", link);
  //how do I specify the first square I click and the second one?

  /*if (squares[i].div == squares[i + 1]) {
    function Addpoint();
  }
  else {

  }*/


}

function addPoint() {

}

/* function changeTurn() {
  // Each square is assigned an image
  // One click makes image appear
  // Second click makes another image appear
  // Disallow any more clicks (disable?)
  // Check if both images are identical
  // If images are identical they stay up
  // If images aren't they turn over
  if (turn == 0) {
    squares[i].style.backgroundImage =
  }
} */