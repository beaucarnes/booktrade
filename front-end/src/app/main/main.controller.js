export class MainController {
  constructor ($http) {
    'ngInject';
    
    this.$http = $http

  }
  
  getMessages() {
    var vm = this;
    this.$http.get('https://book-trade-beaucarnes.c9users.io:8081/api/book').then(function(result){
      vm.messages = result.data;
    });
  }
  
  submitBook() {
    this.$http.post('https://book-trade-beaucarnes.c9users.io:8081/api/book',{book: this.book});
  }
}
