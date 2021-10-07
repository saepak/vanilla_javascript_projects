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
}