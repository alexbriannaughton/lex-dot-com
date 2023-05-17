var ytplayerList;

function onPlayerReady(e) {
    var video_data = e.target.getVideoData(),
        label = video_data.video_id+':'+video_data.title;
    e.target.ulabel = label;
    // console.log(label + " is ready!");
 
}
function onPlayerError(e) {
    console.log('[onPlayerError]');
}
function onPlayerStateChange(e) {
    // var label = e.target.ulabel;
    if (e["data"] == YT.PlayerState.PLAYING) {
        // console.log({
        //     event: "youtube",
        //     action: "play:"+e.target.getPlaybackQuality(),
        //     label: label
        // });
        
        //if one video is playing then pause other
        e.target.getIframe().classList.add('playing-video');
        pauseOthersYoutubes(e.target);
    }
    // if (e["data"] == YT.PlayerState.PAUSED) {
    //     console.log({
    //         event: "youtube",
    //         action: "pause:"+e.target.getPlaybackQuality(),
    //         label: label
    //     });
    // }
    // if (e["data"] == YT.PlayerState.ENDED) {
    //     console.log({
    //         event: "youtube",
    //         action: "end",
    //         label: label
    //     });
    // }
    //track number of buffering and quality of video
    if (e["data"] == YT.PlayerState.BUFFERING) {
        e.target.uBufferingCount?++e.target.uBufferingCount:e.target.uBufferingCount=1; 
        // console.log({
        //     event: "youtube",
        //     action: "buffering["+e.target.uBufferingCount+"]:"+e.target.getPlaybackQuality(),
        //     label: label
        // });

        //if one video is play then pause other, this is needed because at start video is in buffered state and start playing without go to playing state
        if( YT.PlayerState.UNSTARTED ==  e.target.uLastPlayerState ){
            pauseOthersYoutubes(e.target);
        }
    }
    //last action keep stage in uLastPlayerState
    if( e.data != e.target.uLastPlayerState ) {
        // console.log(label + ":state change from " + e.target.uLastPlayerState + " to " + e.data);
        e.target.uLastPlayerState = e.data;
    }
}
function initYoutubePlayers(){
    ytplayerList = null; //reset
    ytplayerList = []; //create new array to hold youtube player
    for (var e = document.getElementsByTagName("iframe"), x = e.length; x-- ;) {
        if (/youtube.com\/embed/.test(e[x].src)) {
            ytplayerList.push(initYoutubePlayer(e[x]));
            // console.log("create a Youtube player successfully");
        }
    }
    
}
function pauseOthersYoutubes( currentPlayer ) {
    if (!currentPlayer) return;
    for (var i = ytplayerList.length; i-- ;){
        if( ytplayerList[i] && (ytplayerList[i] != currentPlayer) ){
            ytplayerList[i].pauseVideo();
            ytplayerList[i].getIframe().classList.remove('playing-video');
        }
    }  
}
//init a youtube iframe
function initYoutubePlayer(ytiframe){
    // console.log("have youtube iframe");
    var ytp = new YT.Player(ytiframe, {
        events: {
            onStateChange: onPlayerStateChange,
            onError: onPlayerError,
            onReady: onPlayerReady
        }
    });
    ytiframe.ytp = ytp;
    return ytp;
}
function onYouTubeIframeAPIReady() {
    // console.log("YouTubeIframeAPI is ready");
    initYoutubePlayers();
}

document.addEventListener('click', function(event) {
    // Check if the clicked element is a YouTube video
    var isYoutubeVideo = false;
    var target = event.target;
    while (target != document.body) {
        if (target.classList.contains('youtube-video')) {
            isYoutubeVideo = true;
            break;
        }
        target = target.parentNode;
    }

    // Pause and close the video if clicked outside of it
    if (!isYoutubeVideo) {
        for (var i = ytplayerList.length; i-- ;) {
            ytplayerList[i].pauseVideo();
            ytplayerList[i].getIframe().classList.remove('playing-video');
        }
    }
});

var tag = document.createElement('script');
//use https when loading script and youtube iframe src since if user is logging in youtube the youtube src will switch to https.
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  