

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

function handleCheck(e) {

  let inBetween = false
  if (e.shiftKey && this.checked) {
        // 시프트키 눌렀고 체크가 되어있을때

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