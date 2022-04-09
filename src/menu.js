
function createMenu() {
    console.log('youre inside menu');
    let main = document.querySelector('#main');
    let contentContainer = document.querySelector('#content-container');
    contentContainer.innerHTML = '';

    // menu title
    let menuTitle = createDiv('menu-title');
    menuTitle.innerHTML = 'Pizzas';

    // create pizzas section
    let pizzasGrid = createDiv('pizzas-grid');

    //Ham and Mushroom Pizza
    let hamAndMushroom = document.createElement('div');
    hamAndMushroom.setAttribute('class', 'pizza');
    let hamImage = document.createElement('img');
    hamImage.setAttribute('src', './images/pizza-png-19335.png');
    hamImage.setAttribute('alt', 'ham and mushroom pizza');
    let hamTitle = document.createElement('div');
    hamTitle.setAttribute('class', 'pizza-title');
    hamTitle.innerHTML = 'Ham and Mushroom';
    let hamDescription = document.createElement('div');
    hamDescription.setAttribute('class', 'pizza-description');
    hamDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, topped with ham and mushrooms.';

    hamAndMushroom.appendChild(hamImage);
    hamAndMushroom.appendChild(hamTitle);
    hamAndMushroom.appendChild(hamDescription);

    //Italian Combo
    let italianCombo = document.createElement('div');
    italianCombo.setAttribute('class', 'pizza');
    let italianImage = document.createElement('img');
    italianImage.setAttribute('src', './images/pizza-png-19323.png');
    italianImage.setAttribute('alt', 'combo pizza');
    let italianTitle = document.createElement('div');
    italianTitle.setAttribute('class', 'pizza-title');
    italianTitle.innerHTML = 'Italian Combo';
    let italianDescription = document.createElement('div');
    italianDescription.setAttribute('class', 'pizza-description');
    italianDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, topped with black olives, tomatoes, mushrooms, and green peppers.';

    italianCombo.appendChild(italianImage);
    italianCombo.appendChild(italianTitle);
    italianCombo.appendChild(italianDescription);


    //Meat lovers pizza
    let meatLovers = document.createElement('div');
    meatLovers.setAttribute('class', 'pizza');
    let meatImage = document.createElement('img');
    meatImage.setAttribute('src', './images/pizza-png-19321.png');
    meatImage.setAttribute('alt', 'meat lovers pizza');
    let meatTitle = document.createElement('div');
    meatTitle.setAttribute('class', 'pizza-title');
    meatTitle.innerHTML = 'Meat Lovers';
    let meatDescription = document.createElement('div');
    meatDescription.setAttribute('class', 'pizza-description');
    meatDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, topped with basil, mushrooms, ham, sausage, and jalapenos.';

    meatLovers.appendChild(meatImage);
    meatLovers.appendChild(meatTitle);
    meatLovers.appendChild(meatDescription);


    // Kids pizza
    let kidsPizza = document.createElement('div');
    kidsPizza.setAttribute('class', 'pizza');
    let kidsImage = document.createElement('img');
    kidsImage.setAttribute('src', './images/pizza-icon-25584.png');
    kidsImage.setAttribute('alt', 'kids pizza');
    let kidsTitle = document.createElement('div');
    kidsTitle.setAttribute('class', 'pizza-title');
    kidsTitle.innerHTML = 'Kids Personal Pizza';
    let kidsDescription = document.createElement('div');
    kidsDescription.setAttribute('class', 'pizza-description');
    kidsDescription.innerHTML = 'Aged mozarella cheese with our house made garlic tomato sauce, choice of (1) topping for kids.';

    kidsPizza.appendChild(kidsImage);
    kidsPizza.appendChild(kidsTitle);
    kidsPizza.appendChild(kidsDescription);

    pizzasGrid.appendChild(hamAndMushroom);
    pizzasGrid.appendChild(italianCombo);
    pizzasGrid.appendChild(meatLovers);
    pizzasGrid.appendChild(kidsPizza);

    contentContainer.appendChild(menuTitle);
    contentContainer.appendChild(pizzasGrid);

}



function createDiv(idName) {
    let div = document.createElement('div');
    div.setAttribute('id', idName);
    return div;
}

export default createMenu;

