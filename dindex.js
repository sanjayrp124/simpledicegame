
// first player dice

var randomNumber1 = Math.floor (Math.random()*6) + 1;

var randomImg = "dice"+randomNumber1+".png";

var randomImgSrc = randomImg;

var player1 = document.querySelectorAll('img')[0];

player1.setAttribute("src",randomImgSrc );

// second player dice

var randomNumber2 = Math.floor (Math.random()*6) + 1;

var randomImg2 = "dice"+randomNumber2+".png";

 var randomImgSrc2 = randomImg2;

var player2 = document.querySelectorAll('img')[1];

player2.setAttribute("src" ,randomImgSrc2 );

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = " 🚩player 1 wins👑🙌"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = " 🎈player 2 wins👑🥳"
}
else{
    document.querySelector('h1').innerHTML = "🤪match is tied😂"
}