function SubirTela(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}
 /* EVENTLISTENER  */
function BotaoSubir() {
  if(window.scrollY === 0){
    document.querySelector('.btn-subir').style.display = 'none';
  }
  else{
    document.querySelector('.btn-subir').style.display = 'block';
  }
}
window.addEventListener('scroll', BotaoSubir);