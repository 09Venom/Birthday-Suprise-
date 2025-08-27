(function(){
  const messages=["Dear Apsara 💅","You're my home👺","I love your voice 😉"];
  const ul=document.querySelector('#scene4-container .page4-ul');
  function build(){ul.innerHTML="";messages.forEach(m=>{const li=document.createElement('li');li.textContent=m;ul.appendChild(li);});}
  function trigger(){window.dispatchEvent(new Event('scenechange'));}
  function bind(){document.querySelector('#scene4-container .back-btn').onclick=function(){document.getElementById('scene3').checked=true;trigger();};}
  window.addEventListener('scenechange',()=>{if(document.getElementById('scene4').checked){build();bind();}});
})();