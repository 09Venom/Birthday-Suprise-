(function(){
  function trigger(){window.dispatchEvent(new Event('scenechange'));}
  document.getElementById('nextBtn').onclick=function(){document.getElementById('scene2').checked=true;trigger();};
  document.getElementById('nextFrom2').onclick=function(){document.getElementById('scene3').checked=true;trigger();};
})();