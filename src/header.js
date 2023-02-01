export default () => {
  const element = document.createElement('h1');
  element.innerHTML = 'Hello Webpack!';
  element.addEventListener('click', () => {
    alert('Hello Webpack');
  })

  return element;
};