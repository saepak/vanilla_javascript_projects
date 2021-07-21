
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        // randomSelect()
    }
})

const createTags = (input) => {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // ,를 기준으로 나누고 trim으로 양끝 공백 제거 (filter를 써서 빈태그를 삭제)

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

// function randomSelect() {
//     const times = 30

//     const interval = setInterval(() => {
//         const randomTag = pickRandomTag()

//         highlightTag(randomTag)

//         setTimeout(() => {
//             unHighlightTag(randomTag)
//         }, 100)
//     }, 100);

//     setTimeout(() => {
//         clearInterval(interval)

//         setTimeout(() => {
//             const randomTag = pickRandomTag()

//             highlightTag(randomTag)
//         }, 100)

//     }, times * 100)
// }

// function pickRandomTag() {
//     const tags = document.querySelectorAll('.tag')
//     return tags[Math.floor(Math.random() * tags.length)]
// }

// function highlightTag(tag) {
//     tag.classList.add('highlight')
// }

// function unHighlightTag(tag) {
//     tag.classList.remove('highlight')
// }
