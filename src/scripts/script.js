// Page-wide JavaScript

document.addEventListener('DOMContentLoaded', () => {
});
const main = document.querySelector('#main');
const ul = document.createElement('ul');
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    groceriesJson = JSON.parse(xhr.responseText);
    main.appendChild(ul);
    ul.classList.add('container');

    // Had to put some thought into this one.
    // The options were use a createElement function
    // to add to the list item but I felt that I would
    // lose the ability to add in the image in a concise
    // way. I went this route for ease of writing.

    function groceryDetails (grocery) {
        return `<span>Item: ${grocery.item}</span><br/>
                <span>Type: ${grocery.type}</span><br/>
                <span>Brand: ${grocery.brand}</span><br/>
                <span>Quantity: ${grocery.qty}</span>`
    }

    for (var i = 0; i < groceriesJson.length; i++) {
        const li = document.createElement('li');
        li.classList.add('col');
        switch (groceriesJson[i].category) {
            // The innerHTML calls seem to be the simplest way to add in
            // the images and class in one line. In earlier testing though,
            // multiple innerHTML calls caused the later one to override the previous
            // call. Fun times.
            case 'fruit':
                li.innerHTML = `<div class="fruit"><img src="images/Fruit.svg" alt="Fruit" class="img" /> Fruit <br /></div>
                                ${groceryDetails(groceriesJson[i])}`;
                break;
            case 'beverage':
                li.innerHTML = `<div class="beverage"><img src="images/beverage.svg" alt="Beverage" class="img" /> Beverage <br /></div>
                                ${groceryDetails(groceriesJson[i])}`;
                break;
            case 'pasta':
                li.innerHTML = `<div class="pasta"><img src="images/Pasta.svg" alt="Pasta" class="img" /> Pasta <br /></div>
                                ${groceryDetails(groceriesJson[i])}`;
                break;
            case 'dessert':
                li.innerHTML = `<div class="dessert"><img src="images/Cake.svg" alt="Dessert" class="img" /> Dessert <br /></div>
                                ${groceryDetails(groceriesJson[i])}`;
                break;
            case 'dairy':
                li.innerHTML = `<div class="dairy"><img src="images/dairy_product.svg" alt="Dairy" class="img" /> Dairy <br /></div>
                                ${groceryDetails(groceriesJson[i])}`;
                break;
            default:
                break;
        }
        ul.appendChild(li);
    }
};

xhr.open('GET', 'groceries.json', true);
xhr.send(null);
