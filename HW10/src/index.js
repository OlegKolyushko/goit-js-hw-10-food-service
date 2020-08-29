import './styles.css';
import menu from './menu.json';
import template from './template.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuRef = document.querySelector('.js-menu');
const switchRef = document.querySelector('.js-switch-input');

function createMarkup(menuElements) {
  const createdTemplate = menuElements.map(el => template(el)).join('');
  return createdTemplate;
}
const stringMarkup = createMarkup(menu);

menuRef.insertAdjacentHTML('beforeend', stringMarkup);
switchRef.addEventListener('change', onSwitchChange);

function onSwitchChange(e) {
  console.dir(e.target.checked);
  if (!e.target.checked) {
    document.body.classList.remove(Theme.DARK);

    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('switcher', false);

    document.body.classList.add(Theme.LIGHT);
  } else if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('switcher', true);

    document.body.classList.add(Theme.DARK);
  }
}


const localStorageTheme = localStorage.getItem('theme');
console.log(localStorageTheme);

document.body.classList.add(localStorageTheme);
const localStorageSwitcher = localStorage.getItem('switcher');

switchRef.checked = JSON.parse(localStorageSwitcher);