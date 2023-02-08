//basket
const basketStarterEl = document.querySelector('header .basket-starter');
basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', (e) => {
  e.stopPropagation();
  if (basketEl.classList.contains('show')) {
    hideBasket();    
  } else {
    showBasket();
  }
})
basketEl.addEventListener('click', (e)=>{e.stopPropagation();})
window.addEventListener('click', ()=> {hideBasket();})

function showBasket() {basketEl.classList.add('show');}
function hideBasket() {basketEl.classList.remove('show');}

//search
const headerEl = document.querySelector('header');
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const searchInputEl = searchWrapEl.querySelector('input');
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')];

searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
  headerEl.classList.add('searching');
  document.documentElement.classList.add('fixed');
  headerMenuEls.reverse().forEach((el, index)=> {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'; 
  });
  searchDelayEls.forEach((el, index)=> {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'; 
  });
  setTimeout(()=>{searchInputEl.focus()}, 600);
}
function hideSearch() {
  headerEl.classList.remove('searching');
  document.documentElement.classList.remove('fixed');
  headerMenuEls.reverse().forEach((el, index)=> {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'; 
  });
  searchDelayEls.reverse().forEach((el, index)=> {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'; 
  });
  searchDelayEls.reverse();
  searchInputEl.value="";
}

//isShow
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    }entry.target.classList.add('show')
  })
})
const infoEls = document.querySelectorAll('.info');
infoEls.forEach((el) => {io.observe(el)})

//Video
const video = document.querySelector('.stage video');
const playBtn = document.querySelector('.stage .controller--play');
const pauseBtn = document.querySelector('.stage .controller--pause');

playBtn.addEventListener('click', ()=> {
  video.play();
  playBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
})

pauseBtn.addEventListener('click', ()=> {
  video.pause();
  playBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
})
