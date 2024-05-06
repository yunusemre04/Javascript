class Music{
    constructor(musicName,singer,img,mp3){
        this.musicName=musicName;
        this.singer=singer;
        this.img=img;
        this.mp3=mp3;
    }
    getMusicName(){
        return this.musicName+" "+this.singer;
    }
}

const musicList=[
    new Music("Living Life","Cheriimoya","ll.jpg","livingLife.mp3"),
    new Music("Son Arzum","Skova","skova.png","sonArzum.mp3"),
    new Music("Dünyanın En Güzel Kızı","Mavi gri","degk.jpg","Degk.mp3"),
    new Music("Ölüme İnat","Hidra","inat.jpg","inat.mp3"),
    new Music("In the End","Linkin Park","ItE.png","ItE.mp3"),
]
