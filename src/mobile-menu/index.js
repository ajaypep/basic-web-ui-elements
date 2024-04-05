import './style.css';

const ProfileInfo = (pfpSrc) => {
  const profileEle = document.createElement('div');
  profileEle.classList.add('profile-info');

  const pictureEle = document.createElement('img');
  pictureEle.src = pfpSrc;
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

const ProfileRegion = (pfpSrc) => {
  const profileRegionEle = document.createElement('article');
  profileRegionEle.classList.add('profile-region');

  const editProfileBtn = document.createElement('button');
  editProfileBtn.textContent = 'Edit Profile';
  editProfileBtn.classList.add('edit-profile');

  const notificationBtn = document.createElement('button');
  notificationBtn.classList.add('notification');

  profileRegionEle.append(ProfileInfo(pfpSrc), editProfileBtn, notificationBtn);
  return profileRegionEle;
};

const Workspace = (workspacesData) => {
  const workspaceEle = document.createElement('p');
  workspaceEle.classList.add('workspace', 'field');

  const workspaceSelectLabelEle = document.createElement('label');
  workspaceSelectLabelEle.textContent = 'WORKSPACE';
  workspaceSelectLabelEle.setAttribute('for', 'workspace-select');

  const workspaceSelectEle = document.createElement('select');
  workspaceSelectEle.id = 'workspace-select';
  workspacesData.forEach((workspace) => {
    const optionEle = document.createElement('option');
    optionEle.text = workspace;
    workspaceSelectEle.appendChild(optionEle);
  });

  workspaceEle.append(workspaceSelectLabelEle, workspaceSelectEle);
  return workspaceEle;
};

const Header = (pfpSrc, workspaceData) => {
  const headerEle = document.createElement('header');
  headerEle.append(ProfileRegion(pfpSrc), Workspace(workspaceData));
  return headerEle;
};

const List = (items) => {
  const listEle = document.createElement('div');
  listEle.classList.add('list');

  items.forEach((item) => {
    const itemEle = document.createElement('p');
    itemEle.classList.add('item');

    const itemIconEle = document.createElement('img');
    itemIconEle.src = item.iconSrc;

    const itemNameEle = document.createElement('span');
    itemNameEle.textContent = item.name;

    itemEle.append(itemIconEle, itemNameEle);
    listEle.appendChild(itemEle);
  });
  return listEle;
};

const MobileMenu = (pfpSrc, workspaceData, listItems) => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.appendChild(Header(pfpSrc, workspaceData));
  menu.appendChild(List(listItems));
  return menu;
};

export default MobileMenu;
