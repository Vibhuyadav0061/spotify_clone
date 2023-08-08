console.log("welcome to js");
let songIndex = 1 ;
 let audioelement = new Audio('song/1.mp3');
let myprogress  = document.getElementById("myprogressbar");
 let gif = document.getElementById("gif");
 let play_bt = document.getElementById("play_button");
 let songplay_btn = Array.from(document.getElementsByClassName("songplay"));
 let progress = 0 ;
let songItem = Array.from(document.getElementsByClassName("songItem"));
let previous = document.getElementById("previous_btn");
let further = document.getElementById("further_btn");
let song_bar_name_change = document.getElementById("song_bar_play_name")

 let songs = [
    {songName:"Akvkjvjnsv s" , filePath:"song/1.mp3",coverPage:"covers/cover1.avif"},
    {songName:"Bmdsmvvmfv" , filePath:"song/2.mp3",coverPage:"covers/cover2.webp"},
    {songName:"Cmdsijkkdmds" , filePath:"song/3.mp3",coverPage:"covers/cover3.jpeg"},
    {songName:"Dnjfsvojfsvks" , filePath:"song/4.mp3",coverPage:"covers/cover4.avif"},
    {songName:"Ekjnsjsvkf" , filePath:"song/5.mp3",coverPage:"covers/cover5.jpeg"},
    {songName:"Fkdsdsjiklmf" , filePath:"song/6.mp3",coverPage:"covers/cover6.jpg"}
 ]

songItem.forEach((element,i )=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPage;
    element.getElementsByClassName("songNames")[0].innerHTML = songs[i].songName;
})
play_bt.addEventListener ('click',()=>{
    if(audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play();
        song_bar_name_change.innerHTML = songs[songIndex-1].songName;

        gif.style.opacity = 1 ;
        play_bt.classList.remove('fa-circle-play')
        play_bt.classList.add('fa-circle-pause');
    }
    else{
        audioelement.pause();
        gif.style.opacity = 0 ;
        play_bt.classList.remove('fa-circle-pause');
        play_bt.classList.add('fa-circle-play');
        
    }
})

myprogress.addEventListener('timeupdate',()=>{
   console.log('timeupdate');
   progress = parseInt(audioelement.currentTime/audioelement.duration*100);
   myprogress.value = progress

})
myprogress.addEventListener('change',()=>{
    
    audioelement.currentTime = myprogress.value*audioelement.duration/100;
    
})

let previousplayoff = ()=>{
    songplay_btn.forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}


songplay_btn.forEach((element)=>{
    element.addEventListener('click',(e)=>{

        songIndex =parseInt(e.target.id);
        previousplayoff();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = songs[songIndex - 1].filePath;
        audioelement.currentTime = 0;
        audioelement.play();
        song_bar_name_change.innerHTML = songs[songIndex-1].songName;
        gif.style.opacity = 1 ;

        play_bt.classList.add('fa-circle-pause');
        play_bt.classList.remove('fa-circle-play'); 


    })
})

previous.addEventListener('click',(e)=>{
    if(songIndex <= 1){
        songIndex = 1;
    }
    else{
        songIndex = songIndex - 1;
    }
    
    // previousplayoff();
    audioelement.src = songs[songIndex - 1].filePath;
        audioelement.currentTime = 0;
        audioelement.play();
        song_bar_name_change.innerHTML = songs[songIndex-1].songName;
        gif.style.opacity = 1 ;

        play_bt.classList.add('fa-circle-pause');
        play_bt.classList.remove('fa-circle-play'); 
})

further.addEventListener('click',(e)=>{
    if(songIndex >= 6){
        songIndex = 6;
    }
    else{
        songIndex = songIndex + 1;
    }
    
    // previousplayoff();
    audioelement.src = songs[songIndex - 1].filePath;
        audioelement.currentTime = 0;
        audioelement.play();
        song_bar_name_change.innerHTML = songs[songIndex-1].songName;
        gif.style.opacity = 1 ;
        play_bt.classList.add('fa-circle-pause');
        play_bt.classList.remove('fa-circle-play'); 
})
