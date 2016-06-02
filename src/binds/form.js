import {Bind} from '../bind';

Bind.register('form', function (view, selector) {
  const input = view.querySelector(selector);
  this.update = function (value) {
    input.value !== value ? input.value = value : '';
  };
});
