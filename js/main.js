
//search bar

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic
  searchInputEl.focus();
});
// 이케 실행하는 함수를 핸들러 라고 함.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//



//badge

const badgeEl = document.querySelector('header .badges');

// window 브라우저 창. 윈도우 객채 라고 부름. 우리가 보고 있는 화면 자체
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    //gsap.to(요소, 지속시간(밀리세컨 아니고 그냥 초!), 옵션);
    gsap.to(badgeEl, .6, {
      display: 'none',
      opacity: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      display: 'block',
      opacity: 1
    });
  }
}, 300));

//



//visual

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // .7  1.4  2.1  2.8
    opacity: 1
  });
});







