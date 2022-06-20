
function changeClass(e){
  e.classList.toggle('off')
  e.classList.toggle('on')
}
document.querySelectorAll('span').forEach(span => span.addEventListener('click', function(){
  changeClass(this);
}))