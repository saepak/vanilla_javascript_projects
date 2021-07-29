

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

function handleCheck(e) {
  // 시프트키가 다운인지 체크

  let inBetween = false
  if (e.shiftKey && this.checked) {

    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        console.log('Starting to check them in between!')
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))