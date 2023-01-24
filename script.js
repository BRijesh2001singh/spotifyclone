console.log("Welcome to brotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let myprogressbar=document.getElementById('myprogressbar');
let soundbar=document.getElementById('soundbar');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let masterplay=document.getElementById('masterplay')
let index=0;
let songs=[
    {songName:"I Guess",filePath:"songs/1.mp3",coverPath:"covers/iguess.png"},
    {songName:"Blinding Lights",filePath:"songs/2.mp3",coverPath:"covers/blindinglights.png"},
    {songName:"DEJALO",filePath:"songs/3.mp3",coverPath:"covers/dejalo.png"},
    {songName:"Faded",filePath:"songs/4.mp3",coverPath:"covers/faded.png"},
    {songName:"Iconic",filePath:"songs/5.mp3",coverPath:"covers/ICONIC.png"},
    {songName:"NOcap",filePath:"songs/6.mp3",coverPath:"covers/nocap.png"},
]
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
     element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
    

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
audioElement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
    }
   else if(audioElement.play){
audioElement.pause();
masterplay.classList.remove('fa-pause-circle');
masterplay.classList.add('fa-play-circle');    
}
})
myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})
audioElement.addEventListener('timeupdate',()=>{
 //update seekbar
 progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
 myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100 ;
})
soundbar.addEventListener('change',()=>{
audioElement.volume=soundbar.value/50;
document.getElementById('soundval').innerHTML=soundbar.value*2;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{  
  element.classList.remove('fa-pause-circle');
  element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeallplays();
    index=parseInt(e.target.id);
    console.log(index);
       e.target.classList.remove('fa-play-circle')
       e.target.classList.add('fa-pause-circle')
       masterplay.classList.remove('fa-play-circle')
       masterplay.classList.add('fa-pause-circle')
       audioElement.src=`songs/${index}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
    })
})
document.getElementById('next').addEventListener('click',()=>{
if(index>=6){
    index=1;
}
else {
    index+=1;
}
masterplay.classList.remove('fa-play-circle')
masterplay.classList.add('fa-pause-circle')
audioElement.src=`songs/${index}.mp3`;
audioElement.currentTime=0;
audioElement.play();
})
document.getElementById('prev').addEventListener('click',()=>{
if(index<=1){
    index=1;
}
else {
    index-=1;
}
masterplay.classList.remove('fa-play-circle')
masterplay.classList.add('fa-pause-circle')
audioElement.src=`songs/${index}.mp3`;
audioElement.currentTime=0;
audioElement.play();
})