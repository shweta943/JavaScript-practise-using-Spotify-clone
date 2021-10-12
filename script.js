console.log("hii");
//for locating we need index numbers
let audioIndex = 0;
let master_play = document.getElementById("master_play");
let myprogress_bar = document.getElementById("myprogress_bar");
let gif = document.getElementById("gif");
let song_name = document.getElementById("song_name");
let song_item_play = document.getElementsByClassName("song_item_play");
let songItems = Array.from(document.getElementsByClassName("song_item"));
//let icon1=document.getElementById("icon1");



let songs = [
    {
        songName: "Dil Diyaan Galla",
        filePath: "1.mp3",
        coverPath: "song1.jpg"
    },
    {
        songName: "Shona Shona",
        filePath: "2.mp3",
        coverPath: "song2.jpg"
    },
    {
        songName: "Baby(Justin Beiber)",
        filePath: "3.mp3",
        coverPath: "song3.jpg"
    },
    {
        songName: "Goa Beach",
        filePath: "4.mp3",
        coverPath: "song4.jpg"
    },
    {
        songName: "Machaenge",
        filePath: "5.mp3",
        coverPath: "song5.jpg"
    },
    {
        songName: "Param Sundari",
        filePath: "6.mp3",
        coverPath: "song6.jpg"
    },
];
songItems.forEach((elem, i) => {
    elem.getElementsByTagName("img")[0].src = songs[i].coverPath;
    elem.getElementsByClassName("song_play")[0].innerText = songs[i].songName;


});

const plans = () => {
    Array.from(document.getElementsByClassName("song_item_play")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
}
Array.from(document.getElementsByClassName("song_item_play")).forEach((element) => {
    element.addEventListener("click", (e) => {
        plans();
        console.log(e);
        audioIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle");
        song_name.innerText = songs[audioIndex].songName;
        audioElement.src = `${audioIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        master_play.classList.remove("fa-play-circle");
        master_play.classList.add("fa-pause-circle");
        //master_play.classList.remove("fa-play-circle");

    })
});

let audioElement = new Audio("Dil.mp3");
//audioElement.play();

//to hnandle play song
master_play.addEventListener('click', () => {
    if (audioElement.pause() || audioElement.currentTime <= 0) {
        audioElement.play();
        master_play.classList.remove("fa-play-circle");
        master_play.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        master_play.classList.remove("fa-pause-circle");
        master_play.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})


//for listening to events
audioElement.addEventListener("timeupdate", () => {
    //changes duration of timimg in %
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    
    myprogress_bar.value = progress;

});
myprogress_bar.addEventListener("change", () => {
    //changes % to duration in string
    audioElement.currentTime = (myprogress_bar.value * audioElement.duration) / 100;
});

document.getElementById("next").addEventListener("click", () => {
    if (audioIndex > 5) {
        audioIndex = 0;
    } else {
        audioIndex = audioIndex + 1;
    }
    audioElement.src = `${audioIndex + 1}.mp3`;
    song_name.innerText = songs[audioIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    master_play.classList.remove("fa-play-circle");
    master_play.classList.add("fa-pause-circle");
    //song_item_play.classList.remove("fa-play-circle");
    //song_item_play.classList.add("fa-pause-circle");
})
document.getElementById("pre").addEventListener("click", () => {
    if (audioIndex <= 0) {
        audioIndex = 0;
    } else {
        audioIndex = audioIndex - 1;
    }
    audioElement.src = `${audioIndex + 1}.mp3`;
    song_name.innerText = songs[audioIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    master_play.classList.remove("fa-play-circle");
    master_play.classList.add("fa-pause-circle");

})