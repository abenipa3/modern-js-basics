'use strict';

class Item {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    static maxItems = 10;

    static getHelperText() {
        return 'Add some items to your grocery list';
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

    static getNumberOfItems() {
        // Super will use the Item class and get the maxItem property from that.
        return `3 / ${super.maxItems}`
    }
}

// let item = new Item('Coffee', 'Food');
// item.category = 'Drinks';

// let purchasedItem = new PurchasedItem('Sugar', 'Food', '2.49');

// document.getElementById('output').innerHTML = item.getDetails();

document.getElementById('output').innerHTML = PurchasedItem.getNumberOfItems();