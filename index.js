const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const btn = document.querySelector('.btn');
const errorMessage = document.querySelector('.error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

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
      if (Number(cashGiven.value) >= Number(billAmount.value)) {
        console.log(cashGiven.value);
        console.log(billAmount.value);
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateNoOfNotes(amountToBeReturned);
      } else {
        showError('Cash given must be greater or equal to the Bill Amount');
      }
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

const calculateNoOfNotes = (amountToBeReturned) => {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
};
