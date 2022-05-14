//playing key sounds
function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(e.keyCode);
  if(audio){
//return audio to start
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}else{
  return
}
}
//remove style effect after hitting a key
function removeTransition(e){
  //console.log(e);
  if(e.propertyName == 'transform'){
    //console.log(e.propertyName);
    this.classList.remove('playing');
  }else{
    return
  }
}
window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
