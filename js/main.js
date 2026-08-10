
document.addEventListener('DOMContentLoaded',function(){
  var h=document.querySelector('.hamburger'),n=document.querySelector('nav');
  if(h){h.addEventListener('click',function(){n.classList.toggle('open');});}
  document.querySelectorAll('nav li').forEach(function(li){
    var dd=li.querySelector('.dropdown');
    if(dd){li.querySelector('a').addEventListener('click',function(e){
      if(window.innerWidth<=900){e.preventDefault();li.classList.toggle('open');}
    });}
  });

  // Formu WhatsApp mesajina donustur
  var WA = '905454717579';
  document.querySelectorAll('form.wa-form').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var g=function(n){var el=f.querySelector('[name="'+n+'"]');return el?el.value.trim():'';};
      var ad=g('ad_soyad'), tel=g('telefon'), konu=g('konu'), mesaj=g('mesaj');
      var ok=f.querySelector('[name="onay"]');
      if(!ad||!tel){alert('Lütfen ad soyad ve telefon bilgilerinizi giriniz.');return;}
      if(ok&&!ok.checked){alert('Devam etmek için özel nitelikli kişisel verilerin işlenmesine ilişkin açık rıza onayını işaretlemeniz gerekir.');return;}
      var t='Merhaba, web siteniz üzerinden yazıyorum.\n\n';
      t+='Ad Soyad: '+ad+'\nTelefon: '+tel;
      if(konu) t+='\nKonu: '+konu;
      if(mesaj) t+='\n\nMesaj: '+mesaj;
      window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank');
    });
  });
});
