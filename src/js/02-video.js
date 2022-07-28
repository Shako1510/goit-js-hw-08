import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);



// player.on('play', function () {
//     console.log('played the video!');

// });

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });

const storage = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(function () {
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
        // seconds = the current playback position
    })
        .catch(function (error) { });
}, 1000),
    player.setCurrentTime(storage)
        .then(function (seconds) { })
        .catch(function (error) { })

);



