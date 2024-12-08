let cookieID = document.getElementById ('cookie');
let clicker__counterID = document.getElementById('clicker__counter');
let cookieSpeedClick = document.getElementById("clicker__speed__counter");
let todayTime = Date.now();
let counterID = 0; 
cookieID.addEventListener('click', function(){
  counter++; 
    
  clicker__counterID.textContent = counter; 
  if (counter % 2 == 0) {
    cookieID.width = '250';
  }
  if (counter % 2 !== 0) cookieID.width = '200';
}

);
cookieID.onclick = function () {
    
  cookieID.classList.contains('clicker__cookie') ? cookieID.className = 'new__clicker__cookie' : cookieID.className = 'clicker__cookie';

  let currentClicks = parseInt(clicker__counterID.textContent);
  clicker__counterID.textContent = currentClicks + 1;

  cookieSpeedClick.textContent = (((Date.now() - todayTime) / 1000) / (currentClicks - counterID)).toFixed(2);
  counterID = currentClicks;
}