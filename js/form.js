class Form{
    constructor(){
        this.input = createInput('name')
        this.button = createButton('play')
        this.greating = createElement('h4')
this.reset=createButton('reset')
    }
    hide(){
        this.greating.hide()
        this.button.hide()
        this.input.hide()
    }
display(){
    var title = createElement('h2','car racing game')
        
title.position(windowWidth/2-100,0)
this.input.position(windowWidth/2-50,windowHeight/2-100)
this.button.position(windowWidth/2-100,windowHeight/2-50)
this.reset.position(displayWidth-100,20)
this.reset.mousePressed(()=>{
    player.updateCount(0)
    game.updateState(0)
})
this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
player.name = this.input.value()
playerCount=playerCount+1
player.index=playerCount
player.updateCount(playerCount)
player.update()
this.greating.html("hello "+player.name)
this.greating.position(windowWidth/2,windowHeight/2)
})
}
}