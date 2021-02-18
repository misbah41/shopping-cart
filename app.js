




const increaseBtn = document.getElementById('increaseBtn');
increaseBtn.addEventListener('click', () => {
  const updateInput = document.getElementById('updateInput').value;
  const updateInputNumber = parseInt(updateInput);
  const updateCount = updateInputNumber + 1;
  document.getElementById('updateInput').value = updateCount;

  const phonePrice = document.getElementById('phonePrice').innerText;
  const phoneIncrease = updateCount * 1219;
  document.getElementById('phonePrice').innerText = phoneIncrease;

});
const decreaseBtn = document.getElementById('decreaseBtn');
decreaseBtn.addEventListener('click', () => {
  handlePhoneChange()
});

const handlePhoneChange = () => {
  const updateInput = document.getElementById('updateInput').value;
  const updateInputNumber = parseInt(updateInput);
  const updateCount = updateInputNumber - 1;
  document.getElementById('updateInput').value = updateCount;

  const phonePrice = document.getElementById('phonePrice').innerText;
  const phoneIncrease = updateCount * 1219;
  document.getElementById('phonePrice').innerText = phoneIncrease;
}



//second dhap


const increaseBtn = document.getElementById('increaseBtn');
increaseBtn.addEventListener('click', () => {
  handlePhoneChange(true)

});
const decreaseBtn = document.getElementById('decreaseBtn');
decreaseBtn.addEventListener('click', () => {
  handlePhoneChange(false)
});

const handlePhoneChange = (isIncrease) => {
  const updateInput = document.getElementById('updateInput').value;

  const updateInputNumber = parseInt(updateInput);
  let updateCount = updateInputNumber;
  if (isIncrease === true) {
    updateCount = updateInputNumber + 1
  } else if (isIncrease === false && updateCount > 0) {
    updateCount = updateInputNumber - 1;
  } else {
    alert('nooooooooooooot allowed')
  }
  document.getElementById('updateInput').value = updateCount;

  const phonePrice = document.getElementById('phonePrice').innerText;
  const phoneIncrease = updateCount * 1219;
  document.getElementById('phonePrice').innerText = phoneIncrease;
  totalCalculate();
}

const getInputValue = (id) => {
  const updateInput = document.getElementById(id).value;
  const updateInputNumber = parseInt(updateInput);
  return updateInputNumber;
}

const totalCalculate = () => {
  const updateInput = getInputValue('updateInput');
  const subtotal = updateInput * 1219;
  const tax = subtotal * 0.1;
  const totalCost = tax + subtotal;
  document.getElementById('Subtotal').innerText = subtotal;
  document.getElementById('tax').innerText = tax;
  document.getElementById('total').innerText = totalCost;
}



const caseIncrease = document.getElementById('caseIncrease');
caseIncrease.addEventListener('click', () => {
  // const caseUpdateInput = document.getElementById('caseUpdateInput').value;
  // const caseNumber = parseInt(caseUpdateInput);
  // const caseNewCount = caseNumber + 1;
  // document.getElementById('caseUpdateInput').value = caseNewCount;

  // const casePrice = document.getElementById('casePrice').innerText;
  // const caseUpdate = caseNewCount*59;
  // document.getElementById('casePrice').innerText = caseUpdate;
  handleCaseChange(true);


});

const caseDecrease = document.getElementById('caseDecrease');
caseDecrease.addEventListener('click', () => {
  // const caseUpdateInput = document.getElementById('caseUpdateInput').value;
  // const caseNumber = parseInt(caseUpdateInput);
  // const caseNewCount = caseNumber - 1;
  // document.getElementById('caseUpdateInput').value = caseNewCount;

  // const casePrice = document.getElementById('casePrice').innerText;
  // const caseUpdate = caseNewCount*59;
  // document.getElementById('casePrice').innerText = caseUpdate;
  handleCaseChange(false);
});
const handleCaseChange = (isIncrease) => {
  const updateInput = document.getElementById('caseUpdateInput').value;

  const updateInputNumber = parseInt(updateInput);
  let updateCount = updateInputNumber;
  if (isIncrease === true) {
    updateCount = updateInputNumber + 1
  } else if (isIncrease === false && updateCount > 0) {
    updateCount = updateInputNumber - 1;
  } else {
    alert('nooooooooooooot allowed')
  }
  document.getElementById('caseUpdateInput').value = updateCount;

  const phonePrice = document.getElementById('casePrice').innerText;
  const phoneIncrease = updateCount * 59;
  document.getElementById('casePrice').innerText = phoneIncrease;
}








