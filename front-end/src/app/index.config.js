export function config ($logProvider, toastrConfig, $authProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
    
    $authProvider.signupUrl = 'https://book-trade-beaucarnes.c9users.io:8081/auth/register';
}
