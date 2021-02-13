Room.prototype.showGoodSpawnLocation = function(){
    var sources = this.find(FIND_SOURCES);
    var myController = this.find(FIND_STRUCTURES,{filter: {structureType: STRUCTURE_CONTROLLER} });
    var centerX = 0;
    var centerY = 0;
    sources.push(myController[0]);
      console.log(sources);
    for(var i=0;i<sources.length;i++){
        console.log("Best X:"+centerX+" Best Y:"+centerY);
        var sourceObject = Game.getObjectById(sources[i].id);
        centerX += sourceObject.pos.x;
        centerY += sourceObject.pos.y;
        
    }
    centerX /=sources.length;
    centerY /=sources.length;
    console.log("Best X:"+centerX+" Best Y:"+centerY);
    
}