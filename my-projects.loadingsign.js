
//loading sign button
const button = document.getElementById('load_button');
button.addEventListener('click', function() {
  document.getElementById("loading").style.textDecoration = "none"
  document.getElementById("loading").style.fontStyle = "italic"
  const p = document.createElement("p");
  p.textContent = `Woops! No projects yet; they're still "loading..." My software-engineering journey will officially begin in mid-September as I begin courses with Flatiron School.`;
  p.className = "fade"
  document.body.append(p);
  document.getElementById("clickme").textContent=""
  const vid = document.createElement("iframe")
  vid.src = 'https://www.youtube.com/embed/Vzybd59aboU'
  vid.className = "fade"
  p.className = "text"
  vid.id = "vid"
  document.body.append(vid)
}, { once: true} );

//random api retriever

const fetchResource = url => {
  return fetch(url)
  .then(res=>res.json())
  .then(data => {
    //console.log(data)
    document.querySelector('h4').textContent=data.name
  })

}

// fetchResource(`https://anapioficeandfire.com/api/characters/${Math.floor(Math.random()*2139)}`)

// const randomButton = document.querySelector('button')
// randomButton.addEventListener('click', fetchResource)
//fetchResource('http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=%09Y70nl8XbkPX3xjXs3sFl1yWQdApoHxkt')[Math.floor(Math.random()*151)].EnglishName

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Vzybd59aboU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}