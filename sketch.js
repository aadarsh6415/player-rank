var ball;
var playerCount,gameState=0;
var player,form,game;
var allPlayers;
var cars,car1,car2,car3,car4;

function preload(){
car1img=loadImage('images/car1.png')
car2img=loadImage('images/car2.png')
car3img=loadImage('images/car3.png')
car4img=loadImage('images/car4.png')
trackimg=loadImage('images/track.jpg')

}

function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
     database = firebase.database();
     game = new Game()
     game.getState()
     game.start()
   }

function draw(){
       if(playerCount===4){
         game.updateState(1)
       }
      if(gameState===1) {
        game.play()
      } 
  if(gameState===3) {
    text("playerRank: "+player.rank,displayWidth/2,displayHeight-300)
  }    
}

