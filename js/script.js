/*===============tab===================================*/
let timeHTML = document.querySelector('.clock__time')
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

function tabsBtn(elements) {
  for (let index = 0; index < elements.length; index++) {
    const item = elements[index];

    item.addEventListener("click", numbActiv);

    function numbActiv() {
      elements.forEach(element => {
        element.classList.remove('active')
        element.style.backgroundColor = "inherit"
      });
      item.classList.add('active')
      item.style.backgroundColor = `${colorBody}`
      if (item.id == 'longbtn') {
        timeHTML.innerText = `${longMin}:00`
      }
      if (item.id == 'shortbtn') {
        timeHTML.innerText = `${shortMin}:00`
      }
      if (item.id == 'pomodorobtn') {
        timeHTML.innerText = `${pomodoroMin}:00`
      }
    }
  }
}
const btn = document.querySelectorAll('.btn');
tabsBtn(btn)

const fn = document.querySelectorAll('.fn');
tabs(fn)

const cl = document.querySelectorAll('.cl');
tabs(cl)

/*===============tab===================================*/
/*===============time==================================*/

const body = document.body
let pomodoroMin
let shortMin
let longMin
let colorBody
appli()

function appli() {
  pomodoroMin = document.getElementById('pomodoro').innerText
  shortMin = document.getElementById('short').innerText
  longMin = document.getElementById('long').innerText

  const fonts = document.querySelectorAll('.fn')
  fonts.forEach((font) => {
    if (font.classList.contains('active')) {
      body.style.fontFamily = `${font.id}`
    }
  })

  const colors = document.querySelectorAll('.cl')
  colors.forEach((color) => {
    if (color.classList.contains('active')) {
      colorBody = color.id
      const btnActive = document.querySelector('.btn.active')
      const circle = document.querySelector('circle')

      body.style.color = `${colorBody}`
      circle.style.stroke = `${colorBody}`
      btnActive.style.backgroundColor = `${colorBody}`
    }
  })
}

const appliBtn = document.querySelector('.popup__button')
appliBtn.addEventListener('click', appli)

/*===============time==================================*/

/*===============start=================================*/



/*===============start=================================*/
/*===============timerSVG==============================*/
const mm = document.getElementById('mm')
let style = 0
let interval = 0

mm.addEventListener('click', function () {
  console.log("hh");
  let startHTML = document.querySelector('.clock__text')
  if (startHTML.innerText == 'START') {
    startTime1()
    return;
  };
  if (startHTML.innerText == 'RESTART') {
    style = 0
    startTime1()
    return;
  };
  if (startHTML.innerText == 'PAUSE') {
    clearInterval(interval)
    startHTML.innerText = 'STOP'
    return;
  };
  if (startHTML.innerText == 'STOP') {
    startTime1()
    console.log('g');
    startHTML.innerText = 'PAUSE'
    return;
  };
})

function startTime1() {
  interval = setInterval(() => {
    let startHTML = document.querySelector('.clock__text')
    startHTML.innerText = 'PAUSE'

    let minHTML = document.querySelector('.clock__time').innerText
    //console.log(minHTML.split(':')[1]);
    let sec = parseInt(minHTML.split(':')[1])
    let min = parseInt(minHTML.split(':')[0])
    
    if(sec == 0) {
      sec = 59
      min--
    }
    sec--
    minHTML = `${min}:${sec}`
    console.log(timeHTML);

    console.log(parseInt(timeHTML.innerText));
    style += 1030 / (parseInt(timeHTML.innerText) * 60)

    mm.style.strokeDashoffset = style
    //console.log(mm.style.strokeDashoffset);
    if (mm.style.strokeDashoffset >= 1030) {
      let audio = new Audio('audio/facebook_louder.mp3');
      audio.play();
      startHTML.innerText = 'RESTART'
      clearInterval(interval)
    };
  }, 1000);
}
/*===============timerSVG==============================*/


/*===============popup=================================*/
//const body = document.body
const popup = document.querySelector('.popup')
const settingsBtn = document.querySelector('.settings')
const settingsCloseBtn = document.querySelector('.settings__bott')

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

