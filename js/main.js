$(function() {
  //  Intro Event Handlers
  $('#intro div.nav-buttons>i').click(navIntro);

  //  Selection Event Handlers
  var movementStrength = 10;
  $selection = $("#selection div#content");
  var height;
  var width;

  $selection.mousemove(function(e) {
    height = movementStrength / $selection.height();
    width = movementStrength / $selection.width();
    var pageX = (e.pageX - ($selection.width() / 2));
    var pageY = (e.pageY - ($selection.height() / 2));
    var newvalueX = -1*((width * (pageX * 1)) - 50);
    var newvalueY = -1*((height * (pageY * -1)) - 105);
    $('#selection div#content').css("background-position", newvalueX + "%     " + newvalueY + "%");
  });

  //  Selection Title Anim
  var selection = "yangon", count = 0;

  const element = document.querySelector('#content h1#title-1');
  charming(element);

  const element2 = document.querySelector('#content h1#title-2');
  charming(element2);

  const element3 = document.querySelector('#content h1#title-3');
  charming(element3);

  var titleInAnim = anime.timeline({
    autoplay: false
  });

  titleInAnim.add({
    targets: '#content h1#title-1',
    top: ['30%','40%'],
    easing: 'easeInOutQuart'
  }).add({
    targets: '#content h1#title-1>span',
    rotateY: [-45,0],
    opacity: [0,1],
    offset: '-=900',
    easing: 'easeInCubic',
    elasticity: 100,
    delay: function(el, i, l) { return i * 50; }
  });

  InAnim.push(titleInAnim);

  var title2InAnim = anime.timeline({
    autoplay: false
  });

  title2InAnim.add({
    targets: '#content h1#title-2',
    top: ['30%','40%'],
    easing: 'easeInOutQuart'
  }).add({
    targets: '#content h1#title-2>span',
    rotateY: [-45,0],
    opacity: [0,1],
    offset: '-=900',
    easing: 'easeInCubic',
    elasticity: 100,
    delay: function(el, i, l) { return i * 50; }
  });

  InAnim.push(title2InAnim);

  var title3InAnim = anime.timeline({
    autoplay: false
  });

  title3InAnim.add({
    targets: '#content h1#title-3',
    top: ['30%','40%'],
    easing: 'easeInOutQuart'
  }).add({
    targets: '#content h1#title-3>span',
    rotateY: [-45,0],
    opacity: [0,1],
    offset: '-=900',
    easing: 'easeInCubic',
    elasticity: 100,
    delay: function(el, i, l) { return i * 50; }
  });

  InAnim.push(title3InAnim);

  InAnim[0].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      InAnim[count%InAnim.length].play();
      anim.reversed = false;
    }
  }

  InAnim[1].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      InAnim[count%InAnim.length].play();
      anim.reversed = false;
    }
  }

  InAnim[2].update = function (anim) {
    if(anim.reversed && anim.progress == 0) {
      InAnim[count%InAnim.length].play();
      anim.reversed = false;
    }
  }

  function changeForward() {
    var mod = count%InAnim.length;

    if(!InAnim[mod].reversed) {
      count++;
      InAnim[mod].reverse();
      InAnim[mod].play();
    }
  }

  function changeBack() {
    var mod = count%InAnim.length;

    if(!InAnim[mod].reversed) {
      count--;
      InAnim[mod].reverse();
      InAnim[mod].play();
    }
  }

  $('#map-nav .fa-arrow-circle-o-right').click(changeForward);

  $('#map-nav .fa-arrow-circle-o-left').click(changeBack);
});
