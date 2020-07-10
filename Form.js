class Form{
constructor(){
 this.input=createInput("ENTER NAME TO START");
this.button=createButton("START SURVEY")
this.start= createElement("h3")
}
hide(){
this.start.hide();
this.input.hide();
this.button.hide();
}
display(){
var title = createElement(("h2"))
title.html("Q.1 DO YOU THINK THAT LOCKDOWN IS IMPORTANT?");
title.position(20,50);

this.input.position(200,200);
this.button.position(200,270);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playerCount+= 1;
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)

this.start.html("HI USER "+player.name)
this.start.position(50,100);

});


}




}