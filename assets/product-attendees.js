// Variables
const attendeesWrp = document.querySelector('.attendees');
const attendeesBtn = document.querySelector('.attendees .button');

// Functions

// Adding more attendees
function addAttendee() {
  // Form ID
  const form = attendeesBtn.closest('form');
  const formId = form ? form.getAttribute('id') : null; // check if form exists before getting its ID

  const wordToRemove = '-installment';
  const newFormId = formId.replace(wordToRemove, '');

  // Line item
  const lineItem = document.createElement('p');
  lineItem.classList.add('line-item-property__field');
  attendeesWrp.appendChild(lineItem);

  //Label
  const label = document.createElement('label');
  label.setAttribute('for', 'first-name-2');
  label.innerText = 'First Name 2';
  lineItem.appendChild(label);

  //Input
  const input = document.createElement('input');
  input.required = true;
  input.classList.add('required');
  input.setAttribute('id', 'first-name-2');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'properties[First Name 2]');
  input.setAttribute('form', newFormId);
  lineItem.appendChild(input);

  attendeesWrp.appendChild(lineItem);
}

// Event listeners
attendeesBtn.addEventListener('click', addAttendee);

// Tests
