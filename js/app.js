// Mostrar el botón cuando el usuario ha bajado 20 píxeles desde la parte superior de la página
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Volver a la parte superior de la página cuando el usuario hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

const links = document.getElementsByClassName('links')[0];
const hamburger = document.getElementsByClassName("hamburger")[0];
const menuHamburger = document.getElementById("hamburger");
let abierto = false;

const toggleMenu = ()=>{
    links.classList.toggle('links2');
    links.style.transition = "transform 0.5s ease-in-out";
}

hamburger.addEventListener('click', ()=>{
    toggleMenu();
    if(document.querySelector('.links.links2')){
        abierto = true;
    }else{
        abierto = false;
    }
})

window.addEventListener('click', (e) =>{
    this.console.log(e.target);
    if(abierto){
        if (e.target !== menuHamburger) {
          toggleMenu();
          abierto = false;
        }
    }
})

window.addEventListener('resize', () =>{
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            links.style.transition = 'none';
            abierto = false;
        }
    }
})
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '300',
    width: '640',
    videoId: 'kNcMDqo5YKU',
    playerVars: {
    'modestbranding': 1, // Oculta el logotipo de YouTube
    'rel': 0, // Desactiva los videos relacionados al final del video
    'showinfo': 0 // Oculta la información del video
},
  });
}

