
const moonPath = "M15.5 27.5C15.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15.5 12.3122 15.5 27.5Z"

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"

const darkMode = document.querySelector('#darkmode')
const switchBtn = document.querySelector('.switchBtn')
let toggle = false


switchBtn.addEventListener('click', ()=> {
  const timeline = anime.timeline({
    duration : 750,
    easing : "easeOutExpo"
  })
  timeline.add({
    targets: ".sun",
    d: [
      {value: toggle ? sunPath : moonPath}
    ]
  })
  .add({
    targets: '#darkmode',
    rotate: 360
  }, '-= 350') // 애니메이션 시간을 줄여줌
  .add({
    targets: 'section',
    backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
    color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
  }, '-=700')

  if(!toggle){
    toggle = true
  } else {
    toggle = false
  }

})