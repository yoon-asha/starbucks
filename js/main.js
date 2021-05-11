
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

//


// SWIPER (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

//

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이가 가운데로 오게
  loop: true,
  autoplay: {
    delay: 5000 // 밀리세컨 단위
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})
//


//
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //보이고 있음
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // 느낌표 붙은 값이 반대가 되게 하는 것. 특정 변수 값을 지속적으로 반대로 만들어줄 수 있는 것.
  if (isHidePromotion) {
    //숨김 처리!
    promotionEl.classList.add('hide')
  } else {
    //보임 처리!
    promotionEl.classList.remove('hide')
  }
});
//


//
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션) gsap 이 요소를 찾아줄 수도 있고 우리가 넣으면 gsap이 찾아줄 수도 있음 
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, //gsap 에서 지원하는 기능. -무한 반복-
      yoyo: true, // gsap 에서 지원하는 기능. 내려왔으면 다시 올라가는 기능!
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
} 
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);







