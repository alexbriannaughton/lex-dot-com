const button = document.getElementById('button');
button.addEventListener('click', function() {
  document.getElementById("loading").style.textDecoration = "none"
  document.getElementById("loading").style.fontStyle = "italic"
  const p = document.createElement("p");
  p.textContent = `Woops! No projects yet; they're still "loading..." My software-engineering journey will officially begin in mid-September as I begin courses with Flatiron School.`;
  p.className = "fade"
  document.body.append(p);
}, { once: true} ); 