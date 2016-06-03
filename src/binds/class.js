import {Bind} from '../bind';

Bind.register('class', function (view, selector, classNames) {
  classNames = toClassNameList(classNames);
  const dom = view.queryDom(selector);
  this.update = function (value) {
    const classList = dom.classList;
    const exec = !!value ? classList.add : classList.remove;
    exec.apply(classList, classNames);
  };
});

function toClassNameList(classNames) {
  if (!classNames)
    return [];
  if (Array.isArray(classNames))
    return classNames;
  return [classNames];
}
