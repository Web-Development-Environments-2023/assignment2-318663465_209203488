
//Set default values for game time, number of ghosts, number of balls
var howMuchTimeIWantInTheGame = 120;

var enemyMap = [
    [7,7,7,7,7],
    [2,2,2,2,2],
    [3,3,3,3,3],
    [0,0,0,0,0],
];


//Set default values for space control.
var space=32;
var goLeft = 37;
var goRight = 39;
var goUP = 38;
var goDowm = 40;

//Update when we change the value of the control arrow. keyCode as a number - '65'
function updateArrowsDisplay(keyCode){
  switch(keyCode){
    case 32: return "-" //space
  

    default:
      return String.fromCharCode(keyCode); // The char itself as write in keyboard - 'A'
  }
}
var shoot=32;
function changeArrowSettings(typeArrow){
    $(document).on('keydown', (event) => {
        keyCode = event.keyCode; //The val as a number
        shoot=keyCode;
        // console.log(s); //'A'
        // console.log(typeArrow) //upArrow

        switch (typeArrow){
          case "Space":
            if (keyCode == goLeft || keyCode == goRight || keyCode == goDowm){
              document.getElementById("msg-arrow-settings").innerHTML = "arrows are for moving. Choose different one.";
              break;
            }
            document.getElementById("Space").value = updateArrowsDisplay(keyCode);
            // document.getElementById("keyup_id").innerHTML = updateArrowsDisplay(keyCode);
            document.getElementById("msg-arrow-settings").innerHTML ="";
            space = keyCode;
            break;
      }
      $(document).off('keydown');
  });
         
}

function updateColorBalls(pointsNum){
  switch(pointsNum){
    case 'points5':
      small_ball_color = document.getElementById("points5").value;
    case 'points15':
      medium_ball_color = document.getElementById("points15").value;
    case 'points25':
      big_ball_color = document.getElementById("points25").value;
  }   
}

// Update Num Of Ghosts -  'onchange' event we update the number of ghosts in the game.
function updateNumGhosts(){
  howMuchGhostIWant = parseInt(document.getElementById("numGhosts").value);
}



// Update Time -  'oninput' event we update the timer of duration of the game and display in the settings page.
  var sliderTime = document.getElementById("Range_time");
  var time = document.getElementById("time"); 
  time.innerHTML = sliderTime.value;

  sliderTime.oninput = function() {
    time.innerHTML = this.value; //Display the current value you chose to set time game.
    howMuchTimeIWantInTheGame = parseInt(time.innerHTML); //Update time
  }

function RandomSettings(){
 
  //update num of ghosts
  // howMuchGhostIWant  = getRandomNum(1,5);  
  // document.getElementById(howMuchGhostIWant).selected = "true";

  //update num of balls
  // howMuchFoodIwant = getRandomNum(50,91);
  // document.getElementById("Range_b").value=howMuchFoodIwant;
  // document.getElementById("balls").innerHTML = howMuchFoodIwant;
  
  //update colors and display changes in settings page.
  random3Flags(); 
  
  //update time of duration game.
  howMuchTimeIWantInTheGame = getRandomNum(120,241);
  document.getElementById("Range_time").value = howMuchTimeIWantInTheGame;
  document.getElementById("time").innerHTML = howMuchTimeIWantInTheGame;
}


function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusiv
}
 function updateEnemyMap(){
  for(let i=0;i<enemyMap.length;i++){

      for(let j=0;j<enemyMap[i].length;j++){
      enemyMap[i][j]=enemyMapNums[i];}}
  console.log(enemyMap);}

var enemyMapNums=[];
function random3Flags(){
  let randomFlag;
  let count = 0;
  let randomNum;
  const flags4 = [];
  while(count < 4) {
    randomNum = Math.floor(Math.random()*9);
    console.log(randomNum);
    randomFlag=`images/bad${randomNum}.png`
    if (!flags4.includes(randomFlag)){
      enemyMapNums.push(randomNum);
      flags4[count]=randomFlag;
      console.log(flags4[count]);
      count++;
    }
   
  }

  

 


  //update diplay colors in setting page.
  firstRow=document.getElementById("points5").value;
  console.log(firstRow);
  firstRow = flags4[0];
  console.log(firstRow);

  secRow=document.getElementById("points10").value;
  secRow =  flags4[1];
  thirdRow=document.getElementById("points15").value;
  thirdRow =  flags4[2];
 forthRow= document.getElementById("points20").value;
 forthRow = flags4[3];
 const imageFirst = document.getElementById("image");
const imageSec = document.getElementById("image2");
const imagThird = document.getElementById("image3");
const imagForth = document.getElementById("image4");

  const selectedImageSrc1 = firstRow;
  imageFirst.src = selectedImageSrc1;
  select1.options[select1.selectedIndex].text=chooseImage(flags4[0]);

  const selectedImageSrc2 = secRow;
  imageSec.src = selectedImageSrc2;
  select2.options[select2.selectedIndex].text=chooseImage(flags4[1]);

  const selectedImageSrc3 = thirdRow;
  imagThird.src = selectedImageSrc3;
  select3.options[select3.selectedIndex].text=chooseImage(flags4[2]);

  const selectedImageSrc4 = forthRow;
  imagForth.src = selectedImageSrc4;
  select4.options[select4.selectedIndex].text=chooseImage(flags4[3]);


  updateEnemyMap();

}
const select1 = document.getElementById("points5");
const select2 = document.getElementById("points10");
const select3 = document.getElementById("points15");
const select4 = document.getElementById("points20");
const image1 = document.getElementById("image");
const image2 = document.getElementById("image2");
const imag3 = document.getElementById("image3");
const imag4 = document.getElementById("image4");

  

select1.addEventListener("change", function () {
    const selectedValue = select1.value;
    const selectedImageSrc = `${selectedValue}.png`;
    image1.src = selectedImageSrc;
});
select2.addEventListener("change", function () {
  const selectedValue = select2.value;
  const selectedImageSrc = `${selectedValue}.png`;
  image2.src = selectedImageSrc;
});
select3.addEventListener("change", function () {
  const selectedValue = select3.value;
  const selectedImageSrc = `${selectedValue}.png`;
  image3.src = selectedImageSrc;
});
select4.addEventListener("change", function () {
  const selectedValue = select4.value;
  const selectedImageSrc = `${selectedValue}.png`;
  image4.src = selectedImageSrc;
});


function chooseImage(pngstring){
  if(pngstring=="images/bad1.png"){ return "Sweden"}
  else if(pngstring=="images/bad2.png"){ return "Iceland"}
  else if(pngstring=="images/bad3.png"){ return "Ukraine"}
  else if(pngstring=="images/bad4.png"){ return "Finland"}
  else if(pngstring=="images/bad5.png"){ return "Denmark"}
  else if(pngstring=="images/bad6.png"){ return "3"}
  else if(pngstring=="images/bad7.png"){ return "Switzerland"}
  else if(pngstring=="images/bad8.png"){ return "Portugal"}
  else if(pngstring=="images/bad9.png"){ return "England"}
  else if(pngstring=="images/bad0.png"){ return "Italy"}

}