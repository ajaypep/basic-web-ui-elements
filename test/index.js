import * as BasicWebUIElements from '../dist/main';
import Pfp from './images/pfp.png';
import OverviewIcon from './images/overview.svg';

const testMobileMenu = () => {
  const workspaceData = ['Workspace1', 'Worskspace2', 'Workspace3'];
  const listItems = [
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
    {
      iconSrc: OverviewIcon,
      name: 'Overview',
    },
  ];
  document.body.appendChild(
    BasicWebUIElements.MobileMenu(Pfp, workspaceData, listItems)
  );
};

testMobileMenu();
