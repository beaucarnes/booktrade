export class MainController {
  constructor ($http) {
    'ngInject';
    
    this.$http = $http
    this.getBooks();

  }
  
  getBooks() {
    var vm = this;
    this.$http.get('https://book-trade-beaucarnes.c9users.io:8081/api/book').then(function(result){
      vm.books = result.data;
      console.log(vm.books)
    });
  }
  
  submitBook() {
    this.$http.post('https://book-trade-beaucarnes.c9users.io:8081/api/book',{book: this.book});
  }
}
