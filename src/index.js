/* eslint-env browser */

function component() {
  const element = document.createElement('h1');

  element.innerHTML = 'FOO';

  return element;
}

document.body.appendChild(component());

console.log('Foo');
