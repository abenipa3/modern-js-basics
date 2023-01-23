'use strict';

class Item {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    getDetails() {
        return `${this.name} - ${this.category}`;
    }
}

class PurchasedItem extends Item {
    constructor(name, category, price) {
        // Helper method that calls the constructor for the class (Item) by using the context of PurchasedItems.
        super(name, category);
        this.price = price;
    }

    getDetailsWithPrice() {
        return `${this.name} - ${this.category} - $${this.price}`;
    }
}

let item = new Item('Coffee', 'Food');
item.category = 'Drinks';

let purchasedItem = new PurchasedItem('Sugar', 'Food', '2.49');

document.getElementById('output').innerHTML = purchasedItem.getDetailsWithPrice();