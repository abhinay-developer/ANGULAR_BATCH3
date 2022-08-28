class Book {
  id: number;
  name: string;
  email: string;

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

}

let book=new Book();
book.setId(1);
console.log(book.getId());