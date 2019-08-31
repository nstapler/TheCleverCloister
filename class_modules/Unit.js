function Unit(U=null) {
    if(U && typeof(U)==="object"){
        this.id = U.id;
        this.Topic =U.Topic;
        this.Description =U.Description;
        this.dateCreated=U.dateCreated;
        this.lastUpdated=U.lastUpdated;
    
        this.currentVideo = U.currentVideo;
        this.TemporaryBlob =null;
        this.VideoCollection = U.VideoCollection;
        this.tags=U.tags;

        this.currentVideo = new Video(this.currentVideo);
        this.VideoCollection = this.VideoCollection.map((v)=>{
            return new Video(v);
        });
    }else{
        var d = new Date();
        this.id = -1;
        this.Topic ="";
        this.Description ="";
        this.dateCreated=d.toString();
        this.lastUpdated="";
    
        this.currentVideo = null;
        this.TemporaryBlob =null;
        this.VideoCollection = [];
        this.tags=[];
    }
    
}

Unit.prototype.getTemp = function(){
    return this.TemporaryBlob;
};

Unit.prototype.getTopic= function(){
    return this.Topic;
};
Unit.prototype.getDescription= function(){
    return this.Description;
};
Unit.prototype.getTags= function(){
    return this.Tags;
};
Unit.prototype.updated= function(){
    return this.lastUpdated;
};
Unit.prototype.created= function(){
    return this.dateCreated;
};
Unit.prototype.getId= function(){
    return this.id;
};
Unit.prototype.getCurrent= function(){
    return this.currentVideo;
};



Unit.prototype.saveNew=function(){
    var inputObj = getFormInputs();
    if(inputObj){
        $('#modalTemplate').modal('hide');
        inputObj.blob=this.getTemp();
        var vid = new Video();
        vid.setVideo(inputObj);


        this.addVideo(vid);
        this.TemporaryBlob=null;
        //show the video in the recent
        $("#unitContainer_"+this.getId()+" .mainResponse .videoSaveButton").css("visibility","hidden");
    }
    
};

Unit.prototype.saveTemp=function(blob){
    this.TemporaryBlob=blob;
    this.update();
};

Unit.prototype.setTopic= function(topic="No Topic"){
    this.Topic=topic;
    this.update();
};

Unit.prototype.setDescription= function(description=""){
    this.Description=description;
    this.update();
};

Unit.prototype.update = function(){
    var d = new Date();
    this.lastUpdated=d.toString();
};

Unit.prototype.setTags= function(tags=[]){
    this.Tags=tags;
    this.update();
};

Unit.prototype.setId= function(id){
    this.id = id;
};

Unit.prototype.addVideo = function(video){
    this.VideoCollection.push(video);
    this.update();
};

Unit.prototype.changeCurrent = function(video){
    //when change current, update the video
    this.currentVideo= video;
    this.update();
    //update the dom?
    this.update();
};

Unit.prototype.pickVideo = function(index){
    if(index<=this.VideoCollection.length-1 && index >= 0  ){
        this.changeCurrent(this.VideoCollection.splice(index,1));
    }
};