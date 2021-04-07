function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var  random1=getRndInteger(1,6);
var im1="images/dice"+random1+".png";

var  random2=getRndInteger(1,6);
var im2="images/dice"+random2+".png";

document.querySelector(".img1").setAttribute("src",im1);
document.querySelector(".img2").setAttribute("src",im2);

if(random1>random2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML="Draw !";
}
