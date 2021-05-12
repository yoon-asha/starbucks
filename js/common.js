// search bar
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



// 날짜
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 지금 년도 나옴!
//

