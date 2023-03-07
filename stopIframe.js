const divs = document.getElementsByClassName('vid-container')
console.log(divs)
// to pause the video
function pause() {
    let videos = document.getElementsByTagName("iframe")
    // let video = document.getElementById("videoId")
    for (let i = 0; i < videos.length; i++) {
        videos[i].contentWindow.postMessage('{"event":"command", "func":"pauseVideo", "args":""}', '*');
        console.log(videos[i])
    }

}