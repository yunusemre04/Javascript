class MusicPlayer{
    constructor(musicList){
        this.musicList=musicList;
        this.musicIndex=0;
    }

      
    previousMusic(){
        if(0<this.musicIndex){
            this.musicIndex--;
        }else{
            this.musicIndex=this.musicList.length-1;
        }
    }
    nextMusic(){
       if(this.musicIndex>=this.musicList.length-1){
        this.musicIndex=0;
       }else{
        this.musicIndex++;
       }
    }
    getMusic(){
        return this.musicList[this.musicIndex];
    }
}