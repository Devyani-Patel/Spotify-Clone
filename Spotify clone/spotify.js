console.log("Welcome to Spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Arrayfrom(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Night Changes", filePath: "", coverPath: "" },
    {songName: "Lakshya", filePath: "", coverPath: "" },
    {songName: "Heat Waves", filePath: "", coverPath: "" },
    {songName: "Piya Tose", filePath: "", coverPath: "" },
    {songName: "Closer", filePath: "", coverPath: "" },
    {songName: "Apna Bana Le", filePath: "", coverPath: "" },
    {songName: "Cheap Thrills", filePath: "", coverPath: "" },
]
songItems.forEach((element, i)=>{
      console.log(elment, i);
      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText = songs[i].coverPath;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.curentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 1;
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity = 0;
     }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
           makeAllPlays();
           console.log(e.target);
           songIndex = parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');
           e.target.classList.add('fa-pause-circle');
           audioElement.src = '';
           masterSongName.innerText = songs[songIndex].songName;
           audioElement.currentTime = 0
           audioElement.play();
           gif.style.opacity = 1;
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex+= 1;
    }
    audioElement.src = '';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex-= 1;
    }
    audioElement.src = '';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})