const Song_name = document.getElementById("song-name");
const Band_name = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuffleBottom = document.getElementById("shuffle");
const repeatBottom = document.getElementById("bi-repeat");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");



const One = {
    music : "One",
    artist : "Metallica",
    file : "One"
};

const Man_in_the_box = {
    music : "Man_in_the_box",
    artist : "Alice in Chains",
    file : "Man_in_the_box"
};

const EnterSandman = {
    music : "EnterSandman",
    artist : "Metallica",
    file : "EnterSandman"
};

const playlist = [One, Man_in_the_box, EnterSandman];

let sortedPlaylist = [...playlist];
let isPlaying = false;
let index = 0;
let isShuffled = false;
let repeatActive = false;



//Funções de play e pause

function PlaySong() {
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
}

function PauseSong() {
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    song.pause();   
    isPlaying = false;
}

function PlayPause() {
    if(isPlaying) {
        PauseSong();
    }
    else {
        PlaySong();
    }
}


//Funções para mudar a musica

function inicializeSong() {
    cover.src = `imagens/${sortedPlaylist[index].file}.jpg`;
    song.src = `songs/${sortedPlaylist[index].file}.mp3`;
    Band_name.innerText = sortedPlaylist[index].artist;
    Song_name.innerText = sortedPlaylist[index].music;
}

function previousSong() {
    if (index > 0){
        index -= 1;
    }
    inicializeSong();
    PlaySong();
}

function nextSong() {
    if (index < sortedPlaylist.length - 1){
        index += 1;
    }
    inicializeSong();
    PlaySong();
}

function updateProgress() {
    const barWidth = (song.currentTime / song.duration) * 100;
    currentProgress.style.setProperty("--progress", `${barWidth}%`);
    updateTotalTime();
}

function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const JumpToTime = (clickPosition/width) * song.duration;
    song.currentTime = JumpToTime;
}

function shuffleBottomClicked() {
    if(!isShuffled){
        isShuffled = true;
        shuffleArray(sortedPlaylist);
        shuffleBottom.classList.add("button-active");
    }
    else{
        isShuffled = false;
        sortedPlaylist = [...playlist];
        shuffleBottom.classList.remove("button-active");
    }
}

function shuffleArray(preShuffledArray) {
    let size = preShuffledArray.length;
    let currentIndex = size - 1;
    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * size);
        let aux = preShuffledArray[currentIndex];
        preShuffledArray[currentIndex] = preShuffledArray[randomIndex]
        preShuffledArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function repeatBottomClicked() {
    if(!repeatActive){
        repeatActive = true;
        repeatBottom.classList.add("button-active");

    }
    else{
        repeatActive = false;
        repeatBottom.classList.remove("button-active");
    }
}

function nextOrRepeat() {
    if(!repeatActive){
        nextSong();
    }
    else{
        PlaySong();
    }
}

function toHHMMSS(originalNumber) {
    let hours = Math.floor(originalNumber / 3600);
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let sec = Math.floor(originalNumber - (hours * 3600) - (min * 60));

    return(`${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')
        }:${sec.toString().padStart(2, '0')}`);
}

function updateCurrentTime() {
    songTime.innerText = toHHMMSS(song.currentTime);
}

function updateTotalTime() {
    totalTime.innerText = toHHMMSS(song.duration);
}

inicializeSong();


play.addEventListener("click", PlayPause);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);
song.addEventListener("timeupdate", updateProgress);
song.addEventListener("ended", nextOrRepeat);
song.addEventListener("loadedmetadata", updateTotalTime);
progressContainer.addEventListener("click", jumpTo);
shuffleBottom.addEventListener("click", shuffleBottomClicked);
repeatBottom.addEventListener("click", repeatBottomClicked);
