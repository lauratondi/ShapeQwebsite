// LOGO ANIMATION

// function play() {
//   TweenLite.set('#logo', { opacity: 0, x: '-700%', y: '100%' });
//   var tl = new TimelineLite({ delay: 0.5 });
//   tl.to('#logo', 0.5, { opacity: 1, y: '-150%', ease: Bounce.easeinOut })
//     .to('#logo', 1.25, { y: '0%', ease: Bounce.easeOut })
//     .to('#logo', 0.5, { rotation: 360 }, '-=.5')
//     .to('#logo', 2.5, { x: '+=700%' }, '-=1.75');
// }
// play();

// TEXT ANIMATION

var split = new SplitText('#ani', {
  type: 'chars,words',
  wordsClass: 'word++',
  charsClass: 'word++',
});

var splitAni = new TimelineMax();
splitAni.set('#ani', { clearProps: 'all' });
splitAni.from(
  split.chars,
  {
    duration: 2,
    opacity: 0,
    ease: 'steps(1)',
    display: 'none',
    stagger: 0.05,
  },

  '-=.5'
);

window.addEventListener('load', function () {
  splitAni.restart();
});

// VIDEO CONTROL
var playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', playHandler, false);
video1.addEventListener('ended', endHandler, false);

function playHandler(e) {
  video1.play();

  playBtn.style.visibility = 'hidden';
}

function endHandler(e) {
  playBtn.style.visibility = 'visible';
}

// ICONS ANIMATION
var icoAni = new TimelineMax({
  duration: 1,
  repeat: -1,
});

icoAni.to(['#trade'], { ease: 'step', x: 10 });
icoAni.to(['#publish'], { ease: 'elastic', y: -5 }, '-=.5');
icoAni.to(['#connect'], { rotation: 360 }, '-=.5');
icoAni.fromTo(
  ['#integrate2'],
  { opacity: 0, x: -5 },
  { opacity: 1, x: 0, ease: 'expo.out' },
  '-=.5'
);
icoAni.to(['#integrate'], { opacity: 0, ease: 'expo.out' });
icoAni.fromTo(
  ['#blockchain'],
  { scaleX: 1 },
  { scaleX: 0, transformOrigin: '0% 0%', ease: 'back.out' },
  '-=.5'
);
icoAni.to(
  ['#channel'],
  {
    ease: 'steps(2)',
    opacity: 0.1,
    duration: 0.2,
  },
  '-=.5'
);

window.addEventListener('load', function () {
  icoAni.restart();
});

// BACKGROUND COLOR ANIMATION

ScrollTrigger.create({
  trigger: '#products',
  start: 'top 40%',
  end: 'bottom 50%',
  onEnter: () =>
    gsap.to('#products', {
      backgroundColor: '#133644',
      color: 'white',
      duration: 2,
      ease: 'sine',
    }),

  onLeave: () =>
    gsap.to('#products', {
      backgroundColor: 'white',
      color: '#133644',
      duration: 2,
      ease: 'sine',
    }),
  onLeaveBack: () =>
    gsap.to('#products', {
      backgroundColor: 'white',
      color: '#133644',
      duration: 2,
      ease: 'sine',
    }),
  onEnterBack: () =>
    gsap.to('#products', {
      backgroundColor: '#133644',
      color: 'white',
      duration: 2,
      ease: 'sine',
    }),
  // markers: true,
});

// ScrollTrigger.create({
//   trigger: '#marketplace',
//   start: 'top 40%',
//   end: 'bottom 50%',
//   onEnter: () =>
//     gsap.to(['#marketplace', '#footer'], {
//       backgroundColor: '#133644',
//       color: 'white',
//       duration: 2,
//       ease: 'sine',
//     }),

//   onLeave: () =>
//     gsap.to(['#marketplace', '#footer'], {
//       backgroundColor: 'white',
//       color: '#133644',
//       duration: 2,
//       ease: 'sine',
//     }),
//   onLeaveBack: () =>
//     gsap.to(['#marketplace', '#footer'], {
//       backgroundColor: 'white',
//       color: '#133644',
//       duration: 2,
//       ease: 'sine',
//     }),
//   onEnterBack: () =>
//     gsap.to(['#marketplace', '#footer'], {
//       backgroundColor: '#133644',
//       color: 'white',
//       duration: 2,
//       ease: 'sine',
//     }),
//   // markers: true,
// });
