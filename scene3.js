(function(){
  function trigger(){window.dispatchEvent(new Event('scenechange'));}
  const btn=document.querySelector('#scene3-container .intention-btn');
  if(btn){btn.onclick=function(){document.getElementById('scene4').checked=true;trigger();};}
})();