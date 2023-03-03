const players = [];

function onYouTubePlayerAPIReady() {
    var iframes = document.getElementsByTagName('iframe');

    for (var i = 0; i < iframes.length; i++) {
        var player = new YT.Player(iframes[i].id);
        players.push(player);
    }
}

function stopAllVideos(currentPlayer) {
    for (var i = 0; i < players.length; i++) {
        if (players[i] != currentPlayer) {
            players[i].stopVideo();
        }
    }
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        stopAllVideos(event.target);
    }
}

for (var i = 0; i < players.length; i++) {
    players[i].addEventListener('onStateChange', onPlayerStateChange);
}