const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walkX = 250;
const walkY = 50; //100px


function shadow(e) {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX:x, offsetY:y} = e;

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walkX) - (walkY / 2))
  const yWalk = Math.round((y / height * walkY) - (walkY / 2))
  
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0,0,0,.4),
    ${xWalk * 1.5 }px ${yWalk * 1.5}px 0 rgba(0,0,0,.2)
    `
}

hero.addEventListener('mousemove', shadow)