let keys = document.querySelectorAll('.key')


let playSound=e=> {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    
    if (!audio) return;    //if there is no audio block return nothing
    audio.currentTime=0;   //rewind to start
    audio.play()
    
    key.classList.add('playing');    //add class

  
}

window.addEventListener('keydown', playSound)

function removeTransition (e) {
    if (e.propertyName !== "transform") return;    
    console.log(this);  //current object as it is normal function
     this.classList.remove('playing');   //remove class
}


keys.forEach(key => key.addEventListener('transitionend',removeTransition))
