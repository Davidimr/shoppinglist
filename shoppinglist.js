"strict-mode";
const form = document.querySelector('form')
const addToList = document.getElementById('addItem')
const input = document.getElementById('newItem')
const qInput = document.getElementById('quantity')




//adding to the list
addToList.addEventListener('click', () =>{ 
  const addItem = document.createElement('span')
  const newItem = document.querySelector('#storedItems')
  const value = input.value
  const addQuantity = document.createElement('span')
  
  
  addItem.setAttribute('class', 'addedItem')
  addItem.innerText = value
  
  //adds the bin icon to the span
  const removeIcon = document.createElement('i')
  removeIcon.classList.add('ph')
  removeIcon.classList.add('ph-prohibit')
  removeIcon.setAttribute('id', 'remove-icon')
  removeIcon.setAttribute('alt', 'remove')

  const iconGroup = document.createElement('div')
  iconGroup.classList.add('icon-group')

 
  addQuantity.innerText = qInput.value
  

  //adds to the list
  iconGroup.append(removeIcon)
  addItem.append(addQuantity,iconGroup)
  newItem.append(addItem)

//removes letters from the quantity input
  qInput.oninput = () => {
    let quantityInput = qInput.value.replace(/[a-z]/g, '')
    qInput.value = quantityInput
  }
//removes numbers from the text input
input.addEventListener('input', () => {
    let inputValue = input.value.replace(/([0-9])/g, '');
    input.value = inputValue
    console.log(inputValue)
})
newItem.addEventListener('click', (event) => {
  
  if (event.target.classList.contains('ph-prohibit')) {
    const removeItem = event.target.closest('.addedItem')
    removeItem.remove()
    
  } 
})

form.onsubmit = (event) => {
  event.preventDefault()
}
})
