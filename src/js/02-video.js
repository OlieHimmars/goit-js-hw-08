import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

 player.on('play', function() {
     console.log('played the video!');
});

const lock = function (data) { 
     _.throttle(() => {
    window.localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data);
  }, 1000)
    
}

player.on('timeupdate', lock);



player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
   // localStorage.clear("videoplayer-current-time");
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
