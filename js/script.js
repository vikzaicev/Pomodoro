/*===============timerSVG==============================*/
const mm = document.getElementById('mm')
let style = 0
mm.style.strokeDashoffset = style
let start = 1030 / (1 * 60)

mm.addEventListener('click', startTime)

function startTime() {
  let interval = setInterval(() => {
    style += start
    mm.style.strokeDashoffset = style
    console.log(mm.style.strokeDashoffset);
    if (mm.style.strokeDashoffset >= 995) {
      let audio = new Audio('audio/facebook_louder.mp3');
      audio.play();
    };
    if (mm.style.strokeDashoffset >= 1030) {
      clearInterval(interval)
    };
  }, 1000);
}
/*===============timerSVG==============================*/
/*===============tab===================================*/

function tabs(elements) {
  for (let index = 0; index < elements.length; index++) {
    const item = elements[index];

    item.addEventListener("click", numbActiv);

    function numbActiv() {
      elements.forEach(element => {
        element.classList.remove('active')
      });
      item.classList.add('active')
    }
  }
}
const btn = document.querySelectorAll('.btn');
tabs(btn)

const fn = document.querySelectorAll('.fn');
tabs(fn)

const cl = document.querySelectorAll('.cl');
tabs(cl)

/*===============tab===================================*/

/*===============popup=================================*/
const body = document.body
const popup = document.querySelector('.popup')
const settingsBtn = document.querySelector('.settings')
const settingsCloseBtn = document.querySelector('.settings__bott')
console.log(popup, settingsBtn, settingsCloseBtn);

settingsBtn.addEventListener('click', openPopup)

function openPopup() {
  popup.classList.add('active')
  body.classList.add('scroll')
}

settingsCloseBtn.addEventListener('click', closePopup)

function closePopup() {
  popup.classList.remove('active')
  body.classList.remove('scroll')
}

window.addEventListener('click', closePopupWin)

function closePopupWin(event) {
  if (event.target == popup) {
    popup.classList.remove('active')
    body.classList.remove('scroll')
    console.log(event.target);
  }
}

/*===============popup=================================*/

/*===============setting minutes=======================*/

const ups = document.querySelectorAll('.time__up')
const adds = document.querySelectorAll('.time__add')

for (let i = 0; i < ups.length; i++) {
  const item = ups[i];

  item.addEventListener("click", activ);

  function activ(event) {
    if (event.target.closest('.pomodoro')) {
      const item = event.target.closest('.pomodoro')
      let num = parseInt(item.querySelector('.time__num').innerText)
      num += 1
      if (num > 60) num = 0;
      item.querySelector('.time__num').innerText = num
    }
    if (event.target.closest('.short')) {
      const item = event.target.closest('.short')
      let num = parseInt(item.querySelector('.time__num').innerText)
      num += 1
      if (num > 60) num = 0;
      item.querySelector('.time__num').innerText = num
    }
    if (event.target.closest('.long')) {
      const item = event.target.closest('.long')
      let num = parseInt(item.querySelector('.time__num').innerText)
      num += 1
      if (num > 60) num = 0;
      item.querySelector('.time__num').innerText = num
    }
  }
}

for (let i = 0; i < adds.length; i++) {
  const item = adds[i];

  item.addEventListener("click", activ);

  function activ(event) {
    if (event.target.closest('.pomodoro')) {
      const item = event.target.closest('.pomodoro')
      let num = parseInt(item.querySelector('.time__num').innerText)
      num--
      if (num < 0) num = 60;
      item.querySelector('.time__num').innerText = num
    }
    if (event.target.closest('.short')) {
      const item = event.target.closest('.short')
      let num = parseInt(item.querySelector('.time__num').innerText)
      num--
      if (num < 0) num = 60;
      item.querySelector('.time__num').innerText = num
    }
    if (event.target.closest('.long')) {
      const item = event.target.closest('.long')
      let num = parseInt(item.querySelector('.time__num').innerText)
      num--
      if (num < 0) num = 60;
      item.querySelector('.time__num').innerText = num
    }
  }
}
/*===============setting minutes=======================*/

