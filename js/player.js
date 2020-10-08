class Player{
    constructor(){
this.index=null
this.name=null
this.distance=0
this.rank=null
}
updateCount(count){
database.ref('/').update({
    playerCount:count
})
}
getRank(){
    database.ref('carAtEnd').on("value",(data)=>{
        this.rank=data.val()
    }
    )
}
updateRank(rank){
    database.ref('/').update({
        carAtEnd:rank
    })
}
getCount(){
database.ref('playerCount').on("value",(data)=>{
    playerCount = data.val()
})
}
update(){
var playerIndex = "players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
   distance:this.distance
})
}
getPlayerInfo(){
    var playerInfoRef = database.ref('players')
playerInfoRef.on("value",(data)=>{
    allPlayers=data.val()
})

}

}
