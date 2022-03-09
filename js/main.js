// Typewriteer
let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Costa del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

// Toast
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

// Nav sticky
window.addEventListener("scroll", function(){
  var navSticky = document.getElementById('navSticky');
  navSticky.classList.toggle("opacity-50",window.scrollY>400);
})
