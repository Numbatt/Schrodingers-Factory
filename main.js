function clickBox(){
  document.getElementById("box").style.visibility = "hidden";
  var sourceOfPicture= "openbox.png";
  var img = document.getElementById("openbox");
  img.src= sourceOfPicture.replace();
  img.style.display="";
  /*img.style.display="block";*/
}

function Box(){
  if(document.getElementById("box").offsetLeft < 1000){
    document.getElementById("box").src="openbox.png";
    document.getElementById("box").style["height"]="360px";
    document.getElementById("box").style["top"]="36%";
    spawnCat();
  }
function spawnCat(){
  if (Math.random()<0.5){
    document.getElementById("catA").style["display"]="";
  }
  else{
    document.getElementById("catB").style["display"]="";
  }
  
  
}
  
  //document.getElementById("box").alt="openbox";
  //document.getElementById("box").id="openbox";
  /*img.style.display="block";*/
}
//uwu