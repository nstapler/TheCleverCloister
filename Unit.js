function Unit() {
    var d = new Date();
    this.id = -1;
    this.Topic ="";
    this.Description ="";
    this.dateCreated=d.toString();
    this.lastUpdated="";

    this.currentVideo = null;
    this.VideoCollection = [];
    this.tags=[];
    
}
Unit.prototype.getTopic= function(){
    return this.Unit;
};
Unit.prototype.getDesc= function(){
    return this.Description;
};
Unit.prototype.created= function(){
    return this.dateCreated;
};
Unit.prototype.updated= function(){
    return this.lastUpdated;
};
Unit.prototype.getTags= function(){
    return this.Tags;
};
Unit.prototype.getId= function(){
    return this.id;
};
Unit.prototype.setId= function(id){
    this.id = id;
};
Unit.prototype.getCurrent= function(){
    return this.currentVideo;
};
Unit.prototype.addVideo = function(video){
    this.VideoCollection.push(video);
};
Unit.prototype.changeCurrent = function(video){
    //when change current, update the video
    this.currentVideo= video;
    //update the dom?
};
Unit.prototype.pickVideo = function(index){
    if(index<=this.VideoCollection.length-1 && index >= 0  ){
        this.changeCurrent(this.VideoCollection.splice(index,1));
    }
};
