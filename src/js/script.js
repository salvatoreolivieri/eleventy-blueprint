
  //Sticky Header
const stickyHeader = document.getElementById('sticky-header');

let lastScrollTop = 0;
let counter = 0;

window.onscroll = () => {

  let ls = window.pageYOffset;

  if (ls < 100) {
    stickyHeader.classList.add('active');
    counter = 0;
  }

  if (ls >= 100) {
    if (ls > lastScrollTop) {

      stickyHeader.classList.remove('active');
    } else  {

      if (counter >= 20) {
        stickyHeader.classList.add('active');
        counter = 0;
      }
      if (counter < 40) {
        //counter ++
        counter = counter + 1;

      }
    }
  }

  lastScrollTop = ls <= 0 ? 0 : ls;


  //ProgressBar
  const progressBar = document.querySelector('.progress-bar');
    
  if(progressBar) {
    let init = 0;
   
    const maxScroll = (document.documentElement.scrollHeight ||  document.body.scrollHeight) - (document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight);
    let currentPosition = window.pageYOffset;
   
    const result = (currentPosition * 100) / maxScroll;
   
   
    progressBar.style.width = result + '%';
  }
   


}


//Target blank link esterni
const links = document.querySelectorAll('a');

links.forEach((link) => {
  if (link.getAttribute('href').includes('https')) {

    link.target = '_blank';

  }
})

//Loading lazy img
const img = document.querySelectorAll('img');

img.forEach((img) => {
  img.loading = 'lazy';

})


//Menù

const hamburgerMenu = document.getElementById("hamburger");
const closeButton = document.getElementById("close-tag");

hamburgerMenu.addEventListener("click", function (){

  closeButton.classList.remove("hidden");
  hamburgerMenu.classList.add("hidden");

})

closeButton.addEventListener("click", function (){

  hamburgerMenu.classList.remove("hidden");
  closeButton.classList.add("hidden");

})


//Dark Mode

const darkModeButton = document.querySelector("#dark-mode-button");
const mobileDarkModeButton = document.querySelector('#mobile-dark-mode-button')
const htmlElement = document.querySelector("html");
  // Dark Mode Handler => switch theme on button click.

  const darkModeHandler = () => {

//     const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();

//     const darkModeSound = new Audio("/sound/switch.wav")
//     darkModeSound.volume = 0.1;
//     darkModeSound.play();

    const suns = document.querySelectorAll("#sun");
    const moons = document.querySelectorAll("#moon");
    
    if (localStorage.getItem("darkMode") == 1) {
      htmlElement.classList.remove("dark");
      suns.forEach(sun => {
        sun.classList.add("hidden")
      })
      
      moons.forEach(moon => {
        moon.classList.remove("hidden")
      })
      localStorage.setItem("darkMode", 0);
    } else {
      htmlElement.classList.add("dark");
      
      suns.forEach(sun => {
        sun.classList.remove("hidden")
      })
      
      moons.forEach(moon => {
        moon.classList.add("hidden")
      })

      localStorage.setItem("darkMode", 1);
    }
  };
  
  // Dark Moda State Handler => check if a 'darkMode' local store exist. 
  // If true, activate darkMode, else create a localStorage called 'darkMode'
  
  const darkModeState = () => {

    const suns = document.querySelectorAll("#sun");
    const moons = document.querySelectorAll("#moon");

    if (localStorage.getItem("darkMode") == 1) {
      htmlElement.classList.add("dark");

      moons.forEach(moon => {
        moon.classList.add("hidden")
      })

      suns.forEach(sun => {
        sun.classList.remove("hidden")
      })

    } else {
      localStorage.setItem("darkMode", 0);

      moons.forEach(moon => {
        moon.classList.remove("hidden")
      })

      suns.forEach(sun => {
        sun.classList.add("hidden")
      })
    }
  };

  darkModeState();


  darkModeButton.addEventListener("click", darkModeHandler);
  mobileDarkModeButton.addEventListener("click", darkModeHandler);