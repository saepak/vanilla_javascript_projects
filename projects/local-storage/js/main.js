

const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e) {
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false
  }

  items.push(item)
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items))
  this.reset()
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('')
 // 맵이 어레이를 리턴할거기 때문에 그걸 스트링으로 바꿔줌
 // document.querySelector('plates label:before').style.backgroundColor = 'black'
}

function toggleDone(e) {
  if(!e.target.matches('input')) return
  //인풋만 체크함
  const el = e.target
  const index = el.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)
}
//체크박스 클릭한거 로컬스토리지에 보내줌

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)


populateList(items, itemsList)
