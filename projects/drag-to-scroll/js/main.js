
const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft



slider.addEventListener('mousedown', (e)=> {
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    // 마진값 뺀 위치를 구해줌
    console.log(startX)
})

slider.addEventListener('mouseleave', ()=> {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseup', ()=> {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', ()=> {
    if(!isDown) return 
    console.count(isDown)
})