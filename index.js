var numberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var key = this.innerHTML
    buttonAnimation(key);
    playSound(key);
  });
}

document.addEventListener("keydown",function(event){
  buttonAnimation(event.key);
  playSound(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      // tempAlert("Wrong key", 5000);

  }
}

function buttonAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");}
    , 100);
}

// function tempAlert(msg,duration)
// {
//  var tempMsg = document.createElement("div");
//  tempMsg.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
//  tempMsg.innerHTML = msg;
//  setTimeout(function(){
//   tempMsg.parentNode.removeChild(tempMsg);
//  },duration);
//  document.body.appendChild(tempMsg);
// }
