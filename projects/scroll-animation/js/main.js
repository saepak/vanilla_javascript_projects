const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4  //브라우저의 창의 높이

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //사용자의 위치값 구하기

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

