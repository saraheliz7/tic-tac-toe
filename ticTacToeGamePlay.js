// winner winner chicken dinner when three are in a row
// if space-0, space-1, and space-2 are all O alert O wins!
window.onload = function() {
  var spaces = document.querySelectorAll(".spaces td");
  console.log(spaces);

  var count = 0;
  var clickedSpace = document.querySelectorAll(".click");

  clickedSpace.forEach(function(space){
    space.addEventListener("click",function(){
      count++;
    })
  })

var spaceMark = function(event) {
  console.log(event.currentTarget);
  var x = event.currentTarget.querySelector(".X");
  var o = event.currentTarget.querySelector(".O");
  if(count % 2 === 0) {
    x.classList.remove("hiddenX");
  } else {
    o.classList.remove("hiddenO");
  }
  event.currentTarget.classList.add("disable");
};







spaces.forEach(function(space) {
  space.addEventListener("click", spaceMark);
})
};
