var player = videojs('min-player', {
    controls: false,
    preload: true
});

player.on('ready', function() {
  player.play();
}).on('canplay', function() {
  document.getElementById('min-player_html5_api').removeAttribute('controls');
}).on('error', function() {
  document.getElementById('min-player_html5_api').removeAttribute('controls');
}).on('playing', function() {

});

var vplayer = videojs('player', {
    controls: true,
    preload: true,
    //autoplay: true,
}); 

document.querySelector('.icon-play').addEventListener('click', function() {
  document.querySelector('.icon-play').style.display = 'none';
  vplayer.play();
  player.pause();
  document.querySelector('.video-fixed').style.display = 'block';
  vplayer.on('ready', function() {
    vplayer.play();
  });
});

document.querySelector('.close-video').addEventListener('click', function() {
  vplayer.pause();
  player.play();
  document.querySelector('.icon-play').style.display = 'block';
  document.querySelector('.video-fixed').style.display = 'none';
});

var list = ['img/img12/1.jpg','img/img12/2.jpg','img/img12/3.jpg','img/img12/4.jpg','img/img12/5.jpg','img/img12/6.jpg','img/img12/7.jpg','img/img12/8.jpg','img/img12/9.jpg','img/img12/10.jpg','img/img12/11.jpg','img/img12/12.jpg','img/img12/13.jpg','img/img12/14.jpg','img/img12/15.jpg','img/img12/16.jpg','img/img12/17.jpg','img/img12/18.jpg','img/img12/19.jpg','img/img12/20.jpg','img/img12/21.jpg','img/img12/22.jpg', 'img/img12/23.jpg', 'img/img12/24.jpg'];

var index = 6;
setInterval(function () {
    var str = '';
    if(index > 22) {
      index = 0;
    } 
    for(var i = 0, len = 6; i < len; i++) {
      str += '<img src="' + list[index] + '" class="animtate"/>';
      index++;
    }

    document.querySelector('.content').innerHTML = str;
    
}, 8000);

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
