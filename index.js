const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const btn = document.querySelector('.btn');
const errorMessage = document.querySelector('.error-message');

// btn.addEventListener('click', () => {
//   console.log('clicked');
//   errorMessage.style.display = 'none';
//   if (typeof billAmount.value === Number) {
//     if (billAmount.value > 0) {
//     } else {
//       showError('Bill Amount should be greater than 0');
//     }
//   } else {
//     showError('Invalid Bill Amount');
//   }
// });

btn.addEventListener('click', () => {
  errorMessage.style.display = 'none';
  console.log(typeof billAmount.value);
  const billAmountConverted = Number(billAmount.value);
  console.log('typeof billAmountConverted:', typeof billAmountConverted);
  console.log('billAmountConverted:', billAmountConverted);
  if (Number.isNaN(billAmountConverted) === true) {
    showError('Invalid Amount');
    console.log('its NaN');
  } else {
    console.log('its not Nan');
    if (billAmountConverted > 0) {
    } else {
      showError('Bill Amount must be greater than 0');
    }
  }
});

const showError = (msg) => {
  errorMessage.style.display = 'block';
  errorMessage.style.color = 'red';
  errorMessage.style.marginBottom = '2rem';
  errorMessage.innerText = msg;
};
