const $input = document.getElementById("my_input")
const $buttons= document.getElementById("buttons")
const $submit= document.getElementById("submit")
const $calcButton= document.getElementById("calcbutton")
const $form= document.getElementById("item")
const $checkboxesContainer= document.getElementById("checkboxes")

const payload = {
  salary: '',
  payment: [],
  type: 'payment'
}


const onInputChange = (event) => {
  payload.salary = event.target.value
}

$input.addEventListener('change', onInputChange)


$buttons.addEventListener('click', (event) => {
  payload.type = event.target.dataset.type
  console.log(payload)
})


$submit.addEventListener('click', (event) => {
  event.preventDefault()
  window.history.back()
  alert(JSON.stringify(payload))
})

const createCheckbox = (year, value) => {       
  return `<label class = "calculation_block">
                <input name='payments' type="checkbox" class = "checkbox"/>
                <span class = "money">${value}</span>
                <span class = "year">${year}</span>
                <span class = "checkmark"></span>
           </label>
           <div class="line"></div>`
}

const calculateTax = (event) => {
  // TODO:
  const payments = [{year: 'в 1-ый год', value: '78 000 рублей' } , {year: 'во 2-ой год' , value: '78 000 рублей' } , {year: 'в 3-ий год' , value: '78 000 рублей' } , {year: 'в 4-ый год' , value: '26 000 рублей' }]
  
  const checkboxes = $checkboxesContainer.querySelectorAll('.calculation_block')
  if (checkboxes.length > 0) {
    return; 
  }

  const paymentsMarkup = payments.map((payment) => {
      return createCheckbox(payment.year, payment.value);
  })

  $checkboxesContainer.insertAdjacentHTML('beforeend', paymentsMarkup.join(''))
}


$calcButton.addEventListener('click', calculateTax)

$checkboxesContainer.addEventListener('click',(event) => {
   // TODO:
})
