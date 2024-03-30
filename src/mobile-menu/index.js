import './style.css';

const Profile = () => {
  const profileEle = document.createElement('div');
  profileEle.classList.add('profile');

  const pictureEle = document.createElement('img');
  pictureEle.src = '';
  pictureEle.classList.add('picture');

  const usernameEle = document.createElement('span');
  usernameEle.classList.add('username');
  usernameEle.textContent = 'username';

  const emailEle = document.createElement('span');
  emailEle.classList.add('email');
  emailEle.textContent = 'username@email.com';

  profileEle.append(pictureEle, usernameEle, emailEle);
  return profileEle;
};

const Header = () => {
  const headerEle = document.createElement('header');

  const editProfileBtn = document.createElement('button');
  editProfileBtn.textContent = 'Edit Profile';
  editProfileBtn.classList.add('edit-profile');

  const notificationBtn = document.createElement('button');
  notificationBtn.classList.add('notification');

  headerEle.append(Profile(), editProfileBtn, notificationBtn);
  return headerEle;
};
const MobileMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.append(Header());
  return menu;
};

export default MobileMenu;
