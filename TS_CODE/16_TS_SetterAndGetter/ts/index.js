var Book = /** @class */ (function () {
    function Book() {
    }
    Book.prototype.setId = function (id) {
        this.id = id;
    };
    Book.prototype.getId = function () {
        return this.id;
    };
    return Book;
}());
var book = new Book();
book.setId(1);
console.log(book.getId());
