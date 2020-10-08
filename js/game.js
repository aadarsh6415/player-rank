class Game{
    constructor(){

}
updateState(state){
database.ref('/').update({
    gameState:state
})
}
getState(){
    
database.ref('gameState').on("value",function(data){
    gameState = data.val()   
})
}
start(){
     if(gameState===0){
        player=new Player();
        player.getCount()
        form=new Form()
        form.display()
    }
car1 = createSprite(100,200)
car1.addImage(car1img)
car2 = createSprite(300,200)
car2.addImage(car2img)
car3 = createSprite(500,200)
car3.addImage(car3img)
car4 = createSprite(700,200)
car4.addImage(car4img)
cars = [car1,car2,car3,car4]
}
play(){
    background("white")
    player.getRank()
    image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
    form.hide();
    text("gameStart",120,100)
    player.getPlayerInfo()

    if (allPlayers!==undefined){
        var index = 0
        var x = 150
        var y;
var displayPosition=130
for(var plr in allPlayers){
    index=index+1
    x=x+200
    y=displayHeight-allPlayers[plr].distance
    cars[index-1].x=x
    cars[index-1].y=y
    if(index===player.index){
        fill("red")
        stroke(10)
        ellipse(x,y,60,60)
        cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y
    }
   
if (plr==="player"+player.index){
fill("red")
}
else{fill("black")}
displayPosition=displayPosition+20
text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,displayPosition)
}
}
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance=player.distance+10
        player.update()
    
}
if(player.distance>=3800){
    gameState=3
    player.rank=player.rank+1
    player.updateRank(player.rank)
}
    drawSprites()
    if(gameState===3) {
        textSize(40);
         fill("red");
        text("Player rank : " + player.rank,displayWidth/2-50,displayHeight-allPlayers[plr].distance-100);
        console.log(player.rank);
    } 
}

}
