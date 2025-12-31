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
// 4.

