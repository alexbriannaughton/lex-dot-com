// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
console.log(firstScriptTag)
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player1;
var player2;
var player3;
var player4;
var player5;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        height: '100%',
        width: '100%',
        videoId: 'ne1kx2UGRPs',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player2 = new YT.Player('player2', {
        height: '100%',
        width: '100%',
        videoId: '0MR-LYxXSvg',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player3 = new YT.Player('player3', {
        height: '100%',
        width: '100%',
        videoId: 'SPx3rZWjshM',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player4 = new YT.Player('player4', {
        height: '100%',
        width: '100%',
        videoId: 'uinlDrEq00g',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player5 = new YT.Player('player5', {
        height: '100%',
        width: '100%',
        videoId: 'Vzybd59aboU',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
   
}


// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player1.stopVideo();
}