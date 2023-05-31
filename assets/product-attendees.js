// Variables
const quantity = document.querySelector('quantity-input');

function updatingForm() {
  const quantityInput = document.querySelector('.quantity__input');
  let attendeesCounter = quantityInput.value;

  // Form test start (remove cards on submit)

  const formProduct = document.querySelector('product-form form');
  const cardTest = document.querySelector('.card');

  function logSubmit(event) {
    console.log('Form submitted');

    const cardsAccordion = document.querySelector('#accordionExample');
    const cardsAccordionCards = cardsAccordion.children;
    let removeThese = [];

    cardsAccordionCards.forEach((card, index) => {
      console.log(card, index);

      if (index > 0) {
        // card.style.display = "none";
        // card.remove();
        removeThese.push(card);
      }
    });

    removeThese.forEach((card) => {
      card.remove();
    });

    // event.preventDefault();
  }

  // Form test end

  // Functions
  function newCard(cardnumber, formID) {
    // Elements
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.id = `heading${cardnumber}`;

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('mb-0');

    const cardButton = document.createElement('button');
    cardButton.classList.add('btn', 'btn-link');
    cardButton.setAttribute('type', 'button');
    cardButton.setAttribute('data-toggle', 'collapse');
    cardButton.setAttribute('data-target', `#collapse${cardnumber}`);
    cardButton.setAttribute('aria-expanded', 'true');
    cardButton.setAttribute('aria-controls', `collapse${cardnumber}`);
    cardButton.innerText = `Attendee ${cardnumber}`;

    const cardCollapse = document.createElement('div');
    cardCollapse.id = `collapse${cardnumber}`;
    cardCollapse.classList.add('collapse', 'show');
    cardCollapse.setAttribute('aria-labelledby', `heading${cardnumber}`);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardAttendees = document.createElement('div');
    cardAttendees.classList.add('attendees');

    // Line item
    function lineItem(attendeeNumber, formName, propertyName, formType, form) {
      const newLineItem = document.createElement('p');
      newLineItem.classList.add('line-item-property__field');

      const label = document.createElement('label');
      label.setAttribute('for', `${formName}${attendeeNumber}`);
      label.innerText = `${propertyName}:`;

      const input = document.createElement('input');
      input.required = true;
      input.classList.add('required');
      input.id = `${formName}${attendeeNumber}`;
      input.setAttribute('type', formType);
      input.setAttribute('name', `properties[${propertyName} ${attendeeNumber}]`);
      input.setAttribute('form', form);

      // Appending children
      newLineItem.append(label, input);

      // Exporting element
      return newLineItem;
    }

    const firstName = lineItem(cardnumber, 'first-name', 'First Name', 'text', formID);

    const lastName = lineItem(cardnumber, 'last-name', 'Last Name', 'text', formID);

    const email = lineItem(cardnumber, 'email', 'Email', 'email', formID);

    const phone = lineItem(cardnumber, 'phone', 'Phone', 'tel', formID);

    const age = lineItem(cardnumber, 'age', 'Age', 'number', formID);

    // Appending children
    // New card
    newCard.appendChild(cardHeader);
    newCard.appendChild(cardCollapse);

    // Card header
    cardHeader.appendChild(cardTitle);
    cardTitle.appendChild(cardButton);

    // Card collapse
    cardCollapse.appendChild(cardBody);
    cardBody.appendChild(cardAttendees);
    cardAttendees.append(firstName, lastName, email, phone, age);

    // Exporting new element
    return newCard;
  }

  function updateAttendeesForm() {
    // Variables
    const attendeesUpdate = quantityInput.value;
    const accordion = document.querySelector('product-info .accordion');

    // Form ID
    const form = document.querySelector('product-form form');
    const formId = form ? form.getAttribute('id') : null; // check if form exists before getting its ID

    // Logic
    if (attendeesUpdate > attendeesCounter) {
      accordion.appendChild(newCard(attendeesUpdate, formId));
    } else {
      if (accordion.children.length <= 1) {
        return;
      } else {
        accordion.removeChild(accordion.lastChild);
      }
    }

    attendeesCounter = attendeesUpdate;
  }

  // Event listeners
  quantity.addEventListener('click', updateAttendeesForm);
  // formProduct.addEventListener("submit", logSubmit);
}

if (quantity) {
  updatingForm();
}

// Testing
// URL change indicator
