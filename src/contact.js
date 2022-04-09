
function createContact() {
    let main = document.querySelector('#main');
    let contentContainer = document.querySelector('#content-container');
    contentContainer.innerHTML = '';

    let contactContainer = createDiv('contact-container');

    // phone-number
    let phoneNumber = createDiv('phone-number');
    phoneNumber.innerHTML = 'Phone: (925) 439-43xx';

    // address
    let contactAddress = createDiv('contact-address');
    contactAddress.innerHTML = '123 Country Lane, San Jose, CA';

    // map image
    let contactImage = document.createElement('img');
    contactImage.setAttribute('src', './images/Screen Shot 2022-04-09 at 11.45.52 AM.png');
    contactImage.setAttribute('alt', 'maps location image');
    contactImage.setAttribute('id', 'contact-image');

    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(contactAddress);
    contactContainer.appendChild(contactImage);

    contentContainer.appendChild(contactContainer);
}


function createDiv(idName) {
    let div = document.createElement('div');
    div.setAttribute('id', idName);
    return div;
}

export default createContact;

