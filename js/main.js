(function(){
  var GA_ID='G-DKQKJH285Q';
  var ADS_ID='AW-680530470';
  var ADS_CONVERSIONS={
    whatsapp:'AW-680530470/S-_BCPPHh9YcEKakwMQC',
    whatsapp_form:'AW-680530470/S-_BCPPHh9YcEKakwMQC',
    phone:'AW-680530470/mtpBCPbHh9YcEKakwMQC'
  };

  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('consent','default',{
    analytics_storage:'denied',
    ad_storage:'denied',
    ad_user_data:'denied',
    ad_personalization:'denied',
    wait_for_update:500
  });
  window.gtag('js',new Date());
  window.gtag('config',GA_ID,{anonymize_ip:true});
  window.gtag('config',ADS_ID);

  var tag=document.createElement('script');
  tag.async=true;
  tag.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(GA_ID);
  document.head.appendChild(tag);

  window.trackContact=function(eventName,method){
    window.gtag('event',eventName,{
      contact_method:method,
      page_path:window.location.pathname,
      transport_type:'beacon'
    });

    var destination=ADS_CONVERSIONS[method];
    if(destination){
      window.gtag('event','conversion',{
        send_to:destination,
        transport_type:'beacon'
      });
    }
  };
})();

document.addEventListener('DOMContentLoaded',function(){
  var consentKey='analytics_consent_v1';
  var savedConsent='';
  try{savedConsent=localStorage.getItem(consentKey)||'';}catch(e){}

  function updateConsent(granted){
    window.gtag('consent','update',{
      analytics_storage:granted?'granted':'denied',
      ad_storage:'denied',
      ad_user_data:'denied',
      ad_personalization:'denied'
    });
  }

  if(savedConsent==='granted'){
    updateConsent(true);
  }else if(savedConsent!=='denied'){
    var notice=document.createElement('div');
    notice.setAttribute('role','dialog');
    notice.setAttribute('aria-label','Çerez tercihleri');
    notice.style.cssText='position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:9999;max-width:760px;margin:auto;padding:1rem 1.1rem;background:#fff;color:#222;border:1px solid #ddd;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.18);font:14px/1.45 Inter,Arial,sans-serif';
    notice.innerHTML='<div style="margin-bottom:.75rem">Site kullanımını anlamak için anonimleştirilmiş analiz çerezleri kullanmak istiyoruz. Reddetmeniz siteyi kullanmanızı engellemez. <a href="/kvkk" style="color:#a51955">KVKK metni</a></div><div style="display:flex;gap:.6rem;justify-content:flex-end"><button type="button" data-consent="denied" style="padding:.55rem .9rem;border:1px solid #bbb;border-radius:8px;background:#fff;cursor:pointer">Reddet</button><button type="button" data-consent="granted" style="padding:.55rem .9rem;border:0;border-radius:8px;background:#a51955;color:#fff;cursor:pointer">Kabul et</button></div>';
    document.body.appendChild(notice);
    notice.addEventListener('click',function(e){
      var button=e.target.closest('[data-consent]');
      if(!button)return;
      var granted=button.getAttribute('data-consent')==='granted';
      try{localStorage.setItem(consentKey,granted?'granted':'denied');}catch(err){}
      updateConsent(granted);
      notice.remove();
    });
  }

  document.addEventListener('click',function(e){
    var link=e.target.closest('a[href]');
    if(!link)return;
    var href=link.getAttribute('href')||'';
    if(/^https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)){
      window.trackContact('whatsapp_click','whatsapp');
    }else if(/^tel:/i.test(href)){
      window.trackContact('phone_click','phone');
    }
  });

  var h=document.querySelector('.hamburger'),n=document.querySelector('nav');
  if(h){h.addEventListener('click',function(){var o=n.classList.toggle('open');h.setAttribute('aria-expanded',o?'true':'false');h.setAttribute('aria-label',o?'Menüyü kapat':'Menüyü aç');});}
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
      var t='Merhaba, web siteniz üzerinden yazıyorum.\\n\\n';
      t+='Ad Soyad: '+ad+'\\nTelefon: '+tel;
      if(konu) t+='\\nKonu: '+konu;
      if(mesaj) t+='\\n\\nMesaj: '+mesaj;
      window.trackContact('whatsapp_form_submit','whatsapp_form');
      window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank');
    });
  });
});
