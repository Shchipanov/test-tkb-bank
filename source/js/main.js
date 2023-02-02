import {iosVhFix} from './utils/ios-vh-fix';
import {addRow} from './modules/add-row';
import {postData} from './modules/post';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    addRow();
    postData();
  });
});
