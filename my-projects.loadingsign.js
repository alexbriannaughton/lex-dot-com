const button = document.getElementById('button');
button.addEventListener('click', function() {
  const p = document.createElement("p");
  p.textContent = `My software-engineering journey will officially begin in mid-September as I begin courses with Flatiron School; my projects are currently "loading" . . .`;
  p.className = "fade"
  document.body.append(p);
}, { once: true} ); 