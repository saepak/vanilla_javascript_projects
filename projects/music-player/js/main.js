
const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.pregress')
const progressContainer = document.querySelector('.pregress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles
const songs = ['hey', 'summer', 'ukulele']

//keep track of songs
let songIndex = 1

// Initially load song info DOM
loadSong(songs[songIndex])

//Update song details
const loadSong = (song) => {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpeg`
}

// Event listeners
playBtn.addEventListener('click', ()=> {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})