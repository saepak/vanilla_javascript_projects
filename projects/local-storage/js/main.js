
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const textfield = document.querySelector('[name=item')
const items = [];

const addItem =(e)=> {
  e.preventDefault()
  const text = textfield.value
  const item = {
    text : text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  textfield.value= ''
  console.log(items)
}

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates.map((plate,i)=>{
    return `
      <li>
        <input type="checkbox" data-index=${i} id="items${i} ${plate.done ? 'checked' : ''}">
        <label for="">${plate.text}</label>
      </li>
    `
  }).join('')
  //맵펑션이 어레이를 리턴할거기 때문에 그걸 스트링으로 바꿔줌
}

addItems.addEventListener('submit', addItem)