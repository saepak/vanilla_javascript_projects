const draggable_list = document.getElementById('draggable-list')
const check = document.getElementById('check')


const topAlbumSales = [
    'Folklore, Taylor Swift',
    'After Hours, The Weeknd',
    'Map of the Soul: 7, BTS',
    'Legends Never Die, Juice Wrld',
    'Fine Line, Harry Styles',
    'Chromatica, Lady Gaga',
    'Manic, Halsey',
    'Evermore, Taylor Swift',
    'Music to Be Murdered By, Eminem',
    'Here and Now, Kenny Chesney'
]


// Store listitems
const listItems = []
let dragStartIndex

createList()

// Insert list itmes to DOM
function createList() {
    [...topAlbumSales] //원래 어레이를 바꾸지 않고 사용
        .map( a => ({value: a, sort: Math.random()})) //map으로 새로운 어레이 리턴
        .sort((a,b)=> a.sort - b.sort) //숫자를 순서대로 정렬함
        .map(a => a.value) // 다시 어레이 아닌 밸류만 리턴 -> 리프레쉬 할때마다 새로운 sort 넘버가 생기고 정렬바뀜
        .forEach((person, index) => {
            console.log(person)
            
            const listItem = document.createElement('li')   
            listItem.setAttribute('data-index', index)

            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="person-name">${person}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `

            listItems.push(listItem)

            draggable_list.appendChild(listItem)
        })

        addEventListeners()
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index')
    //가장 가까운 li의 data-index 숫자를 dragStartIndex에 넣어줌  
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index')
    swapItems(dragStartIndex, dragEndIndex)

    this.classList.remove('over')
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable')
    const itemTwo = listItems[toIndex].querySelector('.draggable')

    listItems[fromIndex].appendChild(itemTwo)
    listItems[toIndex].appendChild(itemOne)
}

// Check the order of list items 
function checkOrder() {
    listItems.forEach((listItem, index)=>{
        const personName = listItem.querySelector('.draggable')
            .innerText.trim()

        if(personName !== topAlbumSales[index]){
            listItem.classList.add('wrong')
        } else{
            listItem.classList.remove('wrong')
            listItem.classList.add('right')
        }
    })
}

function dragEnter() {
    this.classList.add('over')
}

function dragLeave() {
    this.classList.remove('over')
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable')
    const dragListItems = document.querySelectorAll('.draggable-list li')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart)
    })

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver)
        item.addEventListener('drop', dragDrop)
        item.addEventListener('dragenter', dragEnter)
        item.addEventListener('dragleave', dragLeave)
    })
}

check.addEventListener('click', checkOrder)