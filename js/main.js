
document.addEventListener('DOMContentLoaded',function(){
  var h=document.querySelector('.hamburger'),n=document.querySelector('nav');
  if(h){h.addEventListener('click',function(){n.classList.toggle('open');});}
  document.querySelectorAll('nav li').forEach(function(li){
    var dd=li.querySelector('.dropdown');
    if(dd){li.querySelector('a').addEventListener('click',function(e){
      if(window.innerWidth<=900){e.preventDefault();li.classList.toggle('open');}
    });}
  });
});
