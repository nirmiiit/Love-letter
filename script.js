function openEnvelope() {
  // Animate envelope flaps opening
  document.getElementById('envelope').style.transform = 'rotateX(45deg)';
  document.querySelector('.top').style.transform = 'rotateX(-180deg)';
  document.querySelector('.bottom').style.transform = 'rotateX(180deg)';
  document.querySelector('.left').style.transform = 'rotateY(-90deg)';
  document.querySelector('.right').style.transform = 'rotateY(90deg)';
  
  // Show the letter
  setTimeout(() => {
    document.getElementById('letterContent').style.display = 'block';
  }, 1000);  // Delay for animation to finish
}
