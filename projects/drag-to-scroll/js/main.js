
const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft



slider.addEventListener('mousedown', (e)=> {
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    // 마진값 뺀 위치를 구해줌
    scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', ()=> {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseup', ()=> {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mousemove', (e)=> {
    if(!isDown) return 
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 3
    //initial pointer에서 얼마만큼 이동했는지를 알려줌
    slider.scrollLeft = scrollLeft - walk
})




