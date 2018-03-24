document.querySelector('.goTop').addEventListener('click', function() {
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  document.querySelector('.goTop').style.display = 'none';
});

window.onscroll = function() { 
  var top = document.documentElement.scrollTop || document.body.scrollTop;
  if(top > 0) {
    document.querySelector('.goTop').style.display = 'block';
  } else {
    document.querySelector('.goTop').style.display = 'none';
  }
}
