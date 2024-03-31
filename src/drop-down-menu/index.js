import './style.css';

const DropdownMenu = (items) => {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');
  const dropdownTrigger = document.createElement('button');
  dropdownTrigger.type = 'button';
  dropdownTrigger.textContent = 'Dropdown';
  const ul = document.createElement('ul');
  items.forEach((item) => {
    const li = document.createElement('li');
    li.append(item);
    ul.appendChild(li);
  });
  dropdown.append(dropdownTrigger, ul);
  return dropdown;
};

export default DropdownMenu;
