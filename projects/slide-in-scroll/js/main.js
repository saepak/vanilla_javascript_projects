
const debounce =(func, wait = 20, immediate = true)=> {
    let timeout
    return function() {
        let context = this, args = arguments
        let later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)

        if (callNow) func.apply(context, args)

    }
}

const sliderImages = document.querySelectorAll('.slide-in')


const checkSlide = (e) => {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2 
        // /2안하면 각 이미지가 윈도우 끝에 왔을때 높이를 구함 나누기를 해서 이미지 절반쯤 왔을때의 높이를 구함
        console.log(slideInAt)
    })
}

window.addEventListener('scroll', debounce(checkSlide))