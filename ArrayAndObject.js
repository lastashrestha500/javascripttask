// Array and object-10 practice tasks
// 1.Create an array colors with 5 color names and log the third element.
const colors=["navy","Antique Gold","sage green","linen","lavender"];
console.log( "third color is",colors[2]);
// 2.Create an object book with properties title, author, pages, and publishedYear.
const book={
    title:"The Breif Histroy of Intelligence",
    author:"L.Albatross",
    pages:210,
    PublishedYear:2026

};
console.log(book.title + "is written by"+ book.author+" "+ "in"+" "+book.PublishedYear);
console.log(book.author);

// 3.Add a new property isRead: true to an existing book object immutably (return new object).
const newBook={
    isRead:true,
...book
};
console.log(newBook)
// 4.Create an array of 3 objects, each representing a student with name and grade.

const student=[
    {name:"lasta",
        grade:10
    },
    {
        name:"hari",
        grade:34
    },
    {
name:"sarah",
grade:90
    }
    ];
    // 5.Create a nested object company with properties name, location, and employees (an array of names).
    const company={
        name:"Albatross&co",
        location:"lokhanthali",
        employees:[
            { name:"alice"},
            {name:"luna"},
            {name:"sarah"}
        ]

    };
    console.log(company);
    // 6.from an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.
const numbers=[10,20,30]
const newNumber=numbers.map(num=>num+5);
console.log(newNumber)
// 7.Create an object car and add a new property color immutably.
const Car={
    name:"tesla",
    model:"camry"
    
};
const upDatedCar={
    
    color:"blue",
    ...Car
};
console.log(upDatedCar)
console.log(Car)
// 8.Create an array shoppingList and add a new item at the beginning immutably.
const shoppingList=[
    {dress:"top",
    earing:2,
    shoes:"sandals",
    }]

const newItem=[{
   bag:4,
    purse:3,
    }];
    const updatedItem=[shoppingList,...newItem];

console.log(newItem);
console.log(shoppingList);
// 9.Create an object profile with nested address object containing city and country.

const profile={
    name:"lasta",
    location:"bode",
    address:{city:"ktm",country:"nepal"}
}
console.log(profile)
// 10.From an array of objects products, create a new array with only name and price properties
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Coffee Maker", price: 50, category: "Home" },
  { id: 3, name: "Keyboard", price: 75, category: "Electronics" }
];
const simplifiedProducts = products.map(product => {
  return {
    name: product.name,
    price: product.price
  };
});

console.log(simplifiedProducts);
// Output: [{ name: "Laptop", price: 999 }, { name: "Coffee Maker", price: 50 }, ...]




